/*
  Warnings:

  - You are about to drop the column `hasQuizAccess` on the `subscriptions` table. All the data in the column will be lost.
  - You are about to drop the column `quizAccessEnd` on the `subscriptions` table. All the data in the column will be lost.
  - You are about to drop the column `quizAccessStart` on the `subscriptions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "subscriptions" DROP COLUMN "hasQuizAccess",
DROP COLUMN "quizAccessEnd",
DROP COLUMN "quizAccessStart";

-- CreateTable
CREATE TABLE "quiz_subscriptions" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "midtrans_order_id" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'active',
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "quiz_subscriptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transactions" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "order_id" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "price" TEXT NOT NULL,
    "planName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "quiz_subscriptions" ADD CONSTRAINT "quiz_subscriptions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
