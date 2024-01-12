//@ts-ignore
import requestIp from "request-ip";

export async function POST(req: Request) {
  const ip = requestIp(req);
  //@ts-ignore
  const ip2 = req.socket.remoteAddress;
  return Response.json({ ip2, ip });
}
