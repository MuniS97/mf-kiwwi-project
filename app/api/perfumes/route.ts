import connect from "@/lib/mongodb";
import Perfume from "@/models/perfume";
import { NextRequest, NextResponse } from "next/server";


export async function GET() {
    await connect()
    try {

        const perfumes = await Perfume.find({})

        return NextResponse.json({ message: "ok", data: perfumes }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 })
    }
}


export async function POST(req: NextRequest) {
    await connect()
    try {
        console.log(req);

        const data = await req.json()
        const perfume = await Perfume.create(data)

        return NextResponse.json({ message: "ok", data: perfume }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 })
    }
}