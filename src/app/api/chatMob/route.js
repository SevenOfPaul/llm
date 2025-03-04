export const runtime = "edge";
import sql from "@/lib/db";
const account_Id = process.env.account_Id;
const token = process.env.token;
export async function GET(req, res) {
  const { method, body } = req;
  if (method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return Response.json({ message: "Method Not Allowed" },{status:405});
  }else{
    const {token} = req.headers.authorization;
    const userData = await sql` SELECT id FROM users WHERE token = ${token}`;
        if (userData.length === 0) {
          return Response.json({ message: "请先登陆" },{status:401});
        }else{
          const data =
            await sql`SELECT content FROM Sessions WHERE userid = ${userData[0]}`;
          return Response.json(data,{status:200});
        }
  }
}

