import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
    const allBitacora = await prisma.bitacora.findMany()
    return NextResponse.json(allBitacora)
}

export async function POST(request) {
    const { tipooperaqcion,
        referencia,
        client,
        user,
        revalidacion,
        eta,
        previo,
        glosa,
        datepay,
        datemodu,
        folioinvoice,
        cuentagastos } = await request.json()
    const newBitacora = await prisma.bitacora.create({
        data: {
            tipooperaqcion,
            referencia,
            client,
            user,
            revalidacion,
            eta,
            previo,
            glosa,
            datepay,
            datemodu,
            folioinvoice,
            cuentagastos
        },
    });
    return NextResponse.json(newBitacora)
}