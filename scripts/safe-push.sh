#!/usr/bin/env bash
# Udfaset 10/10-2026: scriptet lavede `git add -A` + push direkte, i strid med AGENTS.md
# (aldrig main uden Lucas, kun eksplicit `git add <sti>`). Se "Deploy" i cloud.md.
echo "safe-push.sh er udfaset: brug gren + 'git add <sti>' + PR, se cloud.md" >&2
exit 1
