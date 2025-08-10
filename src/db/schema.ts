import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const messagesTable = sqliteTable("messages", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  email: text().notNull(),
  message: text().notNull(),
});

export const adminsTable = sqliteTable("admins_table", {
  id: int().primaryKey({autoIncrement: true}),
  chat_id: text().notNull()
})
