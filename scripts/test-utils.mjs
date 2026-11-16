import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { createServer } from 'node:http';
import { extname, join, normalize } from 'node:path';

const DIST = 'dist/leticia-nutricionista/browser';
const MIME = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.json': 'application/json',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

async function reachable(url) {
  try {
    const r = await fetch(url, { signal: AbortSignal.timeout(2000) });
    return r.ok;
  } catch {
    return false;
  }
}

// Serves dist/.../browser statically when the target isn't already running.
// Returns the http.Server (caller must close it) or null if the URL was live.
export async function ensureServer(url) {
  if (await reachable(url)) return null;
  if (!existsSync(DIST)) {
    throw new Error(`Build output not found at ${DIST}. Run 'npm run build' first.`);
  }
  const port = Number(new URL(url).port) || 4000;
  const server = createServer(async (req, res) => {
    try {
      let pathname = decodeURIComponent(new URL(req.url, url).pathname);
      if (pathname === '/') pathname = '/index.html';
      const file = normalize(join(DIST, pathname));
      const data = await readFile(file);
      res.writeHead(200, { 'Content-Type': MIME[extname(file)] || 'application/octet-stream' });
      res.end(data);
    } catch {
      res.writeHead(404);
      res.end('not found');
    }
  });
  await new Promise((resolve) => server.listen(port, resolve));
  console.log(`Static server started: ${DIST} -> ${url}`);
  return server;
}

export function parseTestArgs(argv) {
  const args = { headed: false, url: 'http://localhost:4000/' };
  for (const a of argv) {
    if (a === '--headed') args.headed = true;
    else if (a.startsWith('--url=')) args.url = a.slice(6);
  }
  return args;
}
