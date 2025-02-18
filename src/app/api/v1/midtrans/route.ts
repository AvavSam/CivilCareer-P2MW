import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

type MidtransNotification = {
  transaction_status: string;
  order_id: string;
};

export async function POST(req: Request) {
  const notification: MidtransNotification = await req.json();
  const { transaction_status, order_id } = notification;

  console.log(`Transaction status: ${transaction_status}`);
  console.log(`Order ID: ${order_id}`);

  const response = await prisma.transaction.update({
    where: {
      orderId: order_id,
    },
    data: {
      status: transaction_status,
    },
  });

  updateSubscription(order_id);

  console.log(response);
  return new NextResponse(JSON.stringify({ status: "success", transaction_status, order_id }));
}

const updateSubscription = async (orderId: string) => {
  const transaction = await prisma.transaction.findUnique({
    where: {
      orderId: orderId,
    },
    include: {
      user: true,
    },
  });

  const existingSubscription = await prisma.subscription.findFirst({
    where: {
      userId: transaction?.user.id,
    },
  });

  const newExpiryDate = new Date();

  newExpiryDate.setMonth(newExpiryDate.getMonth() + 1);

  if (existingSubscription) {
    await prisma.subscription.update({
      where: {
        id: existingSubscription.id,
      },
      data: {
        expiresAt: newExpiryDate,
        updatedAt: new Date(),
      },
    });
  } else {
    if (!transaction?.userId) {
      throw new Error("User ID tidak ditemukan dalam transaksi.");
    }
    await prisma.subscription.create({
      data: {
        userId: transaction?.user.id,
        planName: transaction?.planName || "",
        status: "active",
        expiresAt: newExpiryDate,
      },
    });
  }
};
