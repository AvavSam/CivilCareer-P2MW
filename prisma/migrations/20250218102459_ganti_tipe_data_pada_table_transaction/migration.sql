/*
  Warnings:

  - You are about to drop the column `email` on the `transactions` table. All the data in the column will be lost.
  - Changed the type of `price` on the `transactions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "transactions" DROP COLUMN "email",
DROP COLUMN "price",
ADD COLUMN     "price" INTEGER NOT NULL;
