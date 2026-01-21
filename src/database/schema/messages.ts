import {
  boolean,
  timestamp,
  pgTable,
  text,
  primaryKey,
  integer,
} from "drizzle-orm/pg-core";

export const messages_table = pgTable("messages", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  text: text("text").notNull(),
  created_at: timestamp("timestamp1").notNull().defaultNow(),

  user_id: text("user_id").notNull(),
  chatroom_id: text("chatroom_id").notNull(),
});
