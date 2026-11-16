#!/usr/bin/env bash
CF="$(command -v cloudflared || echo "$HOME/.local/bin/cloudflared")"

trap 'kill 0' EXIT INT TERM

npm run start &

until curl -s -o /dev/null http://localhost:4200; do sleep 1; done

echo "Servidor pronto. Abrindo túnel..."
"$CF" tunnel --url http://localhost:4200 --no-autoupdate 2>&1 \
  | grep --line-buffered -E "https://.*trycloudflare.com|ERR"

wait