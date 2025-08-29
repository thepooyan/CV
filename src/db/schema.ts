import { int, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

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

export const blogsTable = sqliteTable("blogs_table", {
  id: int().primaryKey({ autoIncrement: true }),
  title: text().notNull(),
  excerpt: text().notNull(),
  content: text().notNull(),
  date: text().notNull(),
  readTime: int().notNull(),
  image: text(),
  tags: text({ mode: "json" }).$type<string[]>(),
  likeCount: integer().default(0)
})
