import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function POST(req: Request) {
  const body = await req.json();
  console.log("ini body : ", body);
  const { userId } = body;
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      subscriptions: true,
    },
  });

  return NextResponse.json(user);
}
