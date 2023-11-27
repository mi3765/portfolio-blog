import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function main() {
	try {
		await prisma.$connect();
	} catch (err) {
		return Error("Fail DB connect");
	}
}

// 取得
export const GET = async (req: Request, res: NextResponse) => {
	try {
		await main();
		const posts = await prisma.post.findMany();
		return NextResponse.json({ message: "Success", posts }, { status: 200 });
	} catch (err) {
		return NextResponse.json({ message: "Error", err }, { status: 500 });
	} finally {
		await prisma.$disconnect();
	}
};

// 投稿
export const POST = async (req: Request, res: NextResponse) => {
	try {
		const { title, overview, description, tag } = await req.json();
		await main();
		const post = await prisma.post.create({
			data: { title, description, overview },
		});
		return NextResponse.json({ message: "Success", post }, { status: 201 });
	} catch (err) {
		return NextResponse.json({ message: "Error", err }, { status: 500 });
	} finally {
		await prisma.$disconnect();
	}
};
