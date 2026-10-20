export default async function handler(req, res) {
  const mod = await import('../dist/nosetha-africa-reads/server/server.mjs');
  const fn = mod.reqHandler || mod.default || mod.app;

  if (typeof fn !== 'function') {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain');
    return res.end('Exports found: ' + Object.keys(mod).join(', '));
  }
  return fn(req, res);
}
