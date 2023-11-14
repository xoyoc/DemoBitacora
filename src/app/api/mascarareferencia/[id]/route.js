import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request, {params}) {
    const mascareferencia = await prisma.macarareferencia.findUnique({
        where:{
            id: parseInt(params.id),
        }
    })
    return NextResponse.json(mascareferencia)
}