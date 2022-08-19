export default function ApiPermitionsMiddleware(req, res, next): void {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
}
