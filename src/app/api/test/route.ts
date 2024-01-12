export async function POST(req: Request) {
  // @ts-ignore
  let ip = req.headers["x-forwarded-for"];
  return Response.json({ ip });
}
