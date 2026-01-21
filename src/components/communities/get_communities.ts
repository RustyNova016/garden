import { db } from "@/database/connection";
import { communities_table } from "@/database/schema/comunity";

export async function getCommunities() {
    "use server";

    return await db.select().from(communities_table);
}