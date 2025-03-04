export const runtime = "edge";
import axios from "axios";
const account_Id = process.env.account_Id;
const token = process.env.token;
export async function POST(req, res) {
  const { method, body } = req;

  if (method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return Response.json({ message: "Method Not Allowed" },{status:405});
  }
  try {
    const body = await req.json();
    const path = body.url;
    delete body.url;
    // 目标API的URL
    const targetUrl = `https://api.cloudflare.com/client/v4/accounts/${account_Id}/ai/run/${path}`;
    console.log(targetUrl);
    // 转发POST请求
    const response = await axios.post(targetUrl, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    // 将目标API的响应返回给客户端
    return new Response(JSON.stringify(response.data), {
      status: response.status,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
      },
    });
  } catch (error) {
    // 处理错误并返回错误响应
    return new Response(error, {
      status: "500",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
      },
    });
  }
}
