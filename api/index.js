export default async function handler(req, res) {
  const { reqHandler } = await import('../dist/nosetha-africa-reads/server/server.mjs');
  return reqHandler(req, res);
}
