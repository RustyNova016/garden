"use server";
import { db } from "@/database/connection";
import { chatrooms_table } from "@/database/schema/chatrooms";
import { refresh } from "next/cache";

export async function insertChatroom(name: string, community_id: string) {
  await db
    .insert(chatrooms_table)
    .values({ name: name, community_id: community_id });

  refresh();
}
