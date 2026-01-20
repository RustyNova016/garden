import { db } from "@/database/connection";
import { messages_table } from "@/database/schema/messages";

export async function GET() {
  const messages = await db.select().from(messages_table);

  return Response.json({ messages: messages });
}
