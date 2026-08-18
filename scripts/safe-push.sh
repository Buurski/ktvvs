#!/usr/bin/env bash
set -euo pipefail
MSG="${1:-ktvvs: synk ændringer}"
cd "$(git rev-parse --show-toplevel)"
BRANCH="$(git rev-parse --abbrev-ref HEAD)"
git pull --rebase --autostash origin "$BRANCH" 2>/dev/null || true
git add -A
if git diff --cached --quiet; then
  echo "→ intet at committe"
  exit 0
fi
git commit -m "$MSG"
git push origin "$BRANCH"
echo "✓ synk færdig"
