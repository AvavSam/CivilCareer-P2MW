import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title } = body;
    if (!title) {
      return new NextResponse(JSON.stringify({ message: "Invalid request body" }), { status: 400 });
    }
    const dataVideo = await prisma.video.findFirst({
      where: {
        title: title,
      },
    });
    if (!dataVideo) {
      return new NextResponse(JSON.stringify({ message: "Video Not Found" }), { status: 404 });
    }
    return new NextResponse(JSON.stringify(dataVideo), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: `Internal Server Error ${error}` }), { status: 500 });
  }
}
