import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request, {params}) {
    const referencia = await prisma.referencias.findUnique({
        where:{
            id: parseInt(params.id),
        }
    })
    return NextResponse.json(referencia)
}

export async function PUT(request, {params}) {
    const data = await request.json()
    const referenciaUpdate = await prisma.referencias.update({
        where:{
            id: parseInt(params.id),
        },
        data: data
    })
    return NextResponse.json(referenciaUpdate)
}

export async function DELETE(request, {params}) {
    try {
        const referenciaDelete = await prisma.referencias.delete({
            where:{
                id: parseInt(params.id),
            }
        })
        return NextResponse.json(referenciaDelete)
    } catch (error) {
        return NextResponse.json("Error referencia no se encuntra para la operación",error.message)
    }
}