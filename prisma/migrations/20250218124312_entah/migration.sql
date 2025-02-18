/*
  Warnings:

  - A unique constraint covering the columns `[user_id]` on the table `transactions` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "transactions_user_id_key" ON "transactions"("user_id");
