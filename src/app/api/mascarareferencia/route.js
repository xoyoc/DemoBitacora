import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
    const allClient = await prisma.MascaraReferencia.findMany()
    return NextResponse.json(allClient)
}

export async function POST(request) {
    const { antreferencia, desreferencia } = await request.json()
    const newMascaraReferencia = await prisma.MascaraReferencia.create({
        data: {
            antreferencia,
            desreferencia
        },
    });
    return NextResponse.json(newMascaraReferencia)
}