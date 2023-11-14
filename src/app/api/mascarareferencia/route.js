import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function POST(request) {
    const { antreferencia, desreferencia } = await request.json()
    const newMascaraReferencia = await prisma.mascarareferencia.create({
        data: {
            antreferencia,
            desreferencia
        },
    });
    return NextResponse.json(newMascaraReferencia)
}