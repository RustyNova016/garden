"use server";
import { get_user_id } from "@/auth/user_id";
import { db } from "@/database/connection";
import { messages_table } from "@/database/schema/messages";
import { refresh } from "next/cache";

export async function insertMessage(text: string, chatroom_id: string) {
  const user_id = await get_user_id();

  if (user_id === null) {
    throw new Error("User isn't logged in");
  }

  await db
    .insert(messages_table)
    .values({ text: text, chatroom_id: chatroom_id, user_id: user_id });

  refresh();
}
