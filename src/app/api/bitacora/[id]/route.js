import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request, {params}) {
    const bitacora = await prisma.bitacora.findUnique({
        where:{
            id: parseInt(params.id),
        }
    })
    return NextResponse.json(bitacora)
}

export async function PUT(request, {params}) {
    const data = await request.json()
    const bitacoraUpdate = await prisma.bitacora.update({
        where:{
            id: parseInt(params.id),
        },
        data: data
    })
    return NextResponse.json(bitacoraUpdate)
}

export async function DELETE(request, {params}) {
    try {
        const bitacoraDelete = await prisma.bitacora.delete({
            where:{
                id: parseInt(params.id),
            }
        })
        return NextResponse.json(bitacoraDelete)
    } catch (error) {
        return NextResponse.json("Error bitacora no se encuntra para la operación",error.message)
    }
}