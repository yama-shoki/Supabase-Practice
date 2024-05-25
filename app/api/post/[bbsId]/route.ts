import { NextResponse } from "next/server";
import prisma from "../../../../lib/prismaClient";

export async function GET(
  req: Request,
  { params }: { params: { bbsId: string } }
) {
  const bbsId = params.bbsId;
  console.log("Received bbsId:", bbsId); // デバッグ用のログ

  const parsedId = parseInt(bbsId);
  if (isNaN(parsedId)) {
    console.error("Invalid bbsId:", bbsId);
    return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });
  }

  const bbsDetailData = await prisma.post.findUnique({
    where: {
      id: parsedId,
    },
  });

  console.log("Fetched bbsDetailData:", bbsDetailData); // デバッグ用のログ

  if (!bbsDetailData) {
    console.error("Post not found for ID:", parsedId);
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  return NextResponse.json(bbsDetailData);
}
