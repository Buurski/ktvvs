// Minimal verify: HTML-validering (index + 404) og tjek af interne href/src.
import { readFileSync, existsSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { resolve, dirname } from 'node:path';

const sider = ['index.html', '404.html'];
let fejl = 0;

const v = spawnSync('npx', ['--yes', 'html-validate', ...sider], { stdio: 'inherit', shell: true });
if (v.status !== 0) fejl++;

for (const side of sider) {
  const html = readFileSync(side, 'utf8');
  for (const [, , url] of html.matchAll(/\s(href|src)="([^"]*)"/g)) {
    if (!url || /^(#|[a-z][a-z0-9+.-]*:|\/\/)/i.test(url)) continue; // anker, https:, mailto:, tel:
    const sti = url.split(/[?#]/)[0];
    const mål = sti.startsWith('/') ? resolve(sti.slice(1) || 'index.html') : resolve(dirname(side), sti);
    if (!existsSync(mål)) { console.error(`${side}: mangler ${url}`); fejl++; }
  }
}

console.log(fejl ? `verify: ${fejl} fejl` : 'verify: ok');
process.exit(fejl ? 1 : 0);
