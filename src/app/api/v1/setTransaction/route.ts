import prisma from "@/libs/prisma";
import { User } from "next-auth";
import { NextResponse } from "next/server";

type TransactionProps = {
  orderId: string;
  user: User;
  planName: string;
  price: number;
  status: string;
  email: string;
};

export async function POST(req: Request) {
  const transaction: TransactionProps = await req.json();
  const { orderId, user, planName, price } = transaction;
  console.log(user);

  const formattedPrice = Number(price.toString().replace(".", ""));

  const setTransaction = await prisma.transaction.create({
    data: {
      orderId: orderId,
      userId: user.id,
      planName: planName,
      price: formattedPrice,
    },
  });
  return NextResponse.json(setTransaction);
}
