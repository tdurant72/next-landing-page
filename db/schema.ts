import { integer, text, uuid, pgTable, timestamp } from "drizzle-orm/pg-core";
export const waitingList = pgTable("waiting_list", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: text("email").notNull(),
  createdAt:timestamp("created_at").defaultNow().notNull(),
  updatedAt:timestamp("updated_at"),
});