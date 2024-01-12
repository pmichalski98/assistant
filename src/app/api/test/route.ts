//@ts-ignore
import requestIp from "request-ip";

export async function POST(req: Request) {
  console.log(requestIp(req));
  //@ts-ignore
  console.log(req.socket.remoteAddress);
}
