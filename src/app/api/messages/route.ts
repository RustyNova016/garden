import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { messages_table } from "@/database/schema/messages";
import { db } from "@/database/connection";

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  const req_body = await request.json();

  console.log(req_body);

  const message: typeof messages_table.$inferInsert = {
    text: req_body.text,
    user_id: session?.user?.id,
  };

  await db.insert(messages_table).values(message);

  return Response.json({});
}
