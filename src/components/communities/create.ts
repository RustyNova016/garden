"use server";
import { db } from "@/database/connection";
import { communities_table } from "@/database/schema/comunity";
import { refresh } from "next/cache";

export async function insertCommunity(data: string) {
  await db.insert(communities_table).values({ name: data });

  refresh();
}
