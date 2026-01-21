import { db } from "@/database/connection";
import { chatrooms_table } from "@/database/schema/chatrooms";
import { communities_table } from "@/database/schema/comunity";
import { eq } from "drizzle-orm";

export async function getChatrooms(community_id: string) {
    "use server";

    return await db
      .select()
      .from(chatrooms_table)
      .where(eq(chatrooms_table.community_id, community_id));
}