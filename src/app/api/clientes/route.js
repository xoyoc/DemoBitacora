import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
    const allClient = await prisma.clientes.findMany()
    return NextResponse.json(allClient)
}

export async function POST(request) {
    const { name, rfc, email } = await request.json()
    const newClient = await prisma.clientes.create({
        data: {
            name,
            rfc,
            email
        },
    });
    return NextResponse.json(newClient)
}