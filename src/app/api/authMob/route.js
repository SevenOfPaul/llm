export const runtime = "edge";
import sql from "@/lib/db";
import Query from "@/lib/query";
import { v4 as uuidv4 } from "uuid";
export async function POST(req, res) {
  const { method, body } = req;
 const {name,password} =await req.json();
  if (method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${method} Not Allowed`);
  } else {
        const token = uuidv4();
    await sql`INSERT INTO users (id,name,password,token) VALUES (${uuidv4()},${
      name
    },${password},${token})`;
    return Response.json({ message: "注册成功",token },{status:200});
  }
}
export async function GET(req, res) {
  const { method } = req;
  if (method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return Response.json({ message: "Method Not Allowed" },{status:405});
  } else {
    const { name, password } = Query(req,["name","password"]);
    // 
    if(name && password){
        const userData =
          await sql` SELECT id FROM users WHERE name = ${name} AND password = ${password}`;
        console.log(userData)
        if(userData.length === 0){
            return Response.json({ message: "账号密码错误" },{status:401});
        }else{
            const token = uuidv4();
            await sql`UPDATE users SET token = ${token} WHERE id = ${userData[0].id}`;
            return Response.json({ message: "登录成功",token },{status:200});
        }
    }else{
     return Response.json({ message: "账号密码错误" },{status:403});
  }
  }  
}
export async function DELETE(req, res) {
  const { method } = req;
  if (method !== "DELETE") {
    res.setHeader("Allow", ["DELETE"]);
    return Response.json({ message: "Method Not Allowed" }, { status: 405 });
  } else {
    const { token } = Query(req, ["token"]);
    //
    if (token) {
        await sql` DELETE token FROM users WHERE token = ${token}`;
        return Response.json({ message: "退出成功" }, { status: 200 });
    } else {
      return Response.json({ message: "错误，请稍后重试" }, { status: 403 });
    }
  }
}
