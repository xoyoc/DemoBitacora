import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request, {params}) {
    const client = await prisma.clientes.findUnique({
        where:{
            id: parseInt(params.id),
        }
    })
    return NextResponse.json(client)
}

export async function PUT(request, {params}) {
    const data = await request.json()
    const clienteUpdate = await prisma.clientes.update({
        where:{
            id: parseInt(params.id),
        },
        data: data
    })
    return NextResponse.json(clienteUpdate)
}

export async function DELETE(request, {params}) {
    try {
        const clientDelete = await prisma.clientes.delete({
            where:{
                id: parseInt(params.id),
            }
        })
        return NextResponse.json(clientDelete)
    } catch (error) {
        return NextResponse.json("Error cliente no se encuntra para la operación",error.message)
    }
}