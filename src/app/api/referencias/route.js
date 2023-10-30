import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
    const allReferencias = await prisma.referencias.findMany()
    return NextResponse.json(allReferencias)
}

export async function POST(request) {
    const { refernecia, container } = await request.json()
    const newReferencia = await prisma.referencias.create({
        data: {
            refernecia,
            container
        },
    });
    return NextResponse.json(newReferencia)
}