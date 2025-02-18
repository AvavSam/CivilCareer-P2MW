/*
  Warnings:

  - You are about to drop the column `plan_id` on the `subscriptions` table. All the data in the column will be lost.
  - Added the required column `plan_name` to the `subscriptions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "subscriptions" DROP CONSTRAINT "subscriptions_plan_id_fkey";

-- AlterTable
ALTER TABLE "subscriptions" DROP COLUMN "plan_id",
ADD COLUMN     "plan_name" TEXT NOT NULL;
