import { db } from "@/database/connection";
import { chatrooms_table } from "@/database/schema/chatrooms";
import { communities_table } from "@/database/schema/comunity";
import { messages_table } from "@/database/schema/messages";
import { eq } from "drizzle-orm";

export async function getMessages(chatroom_id: string) {
    "use server";

    return await db
      .select()
      .from(messages_table)
      .where(eq(messages_table.chatroom_id, chatroom_id));
}