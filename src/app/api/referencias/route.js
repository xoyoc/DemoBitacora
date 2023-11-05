import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
    const allReferencias = await prisma.referencias.findMany()
    return NextResponse.json(allReferencias)
}

export async function POST(request) {
    const { referencia, container } = await request.json()
    const newReferencia = await prisma.referencias.create({
        data: {
            referencia,
            container
        },
    });
    return NextResponse.json(newReferencia)
}