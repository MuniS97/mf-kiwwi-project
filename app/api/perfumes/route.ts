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
        const data = await req.json()

        const perfume = await Perfume.create(data)

        return NextResponse.json({ message: "perfume added", data: perfume }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 })
    }
}


export async function PATCH(req: NextRequest) {
    await connect();

    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get('id');

    try {
        const data = await req.json();

        const updatedPerfume = await Perfume.findByIdAndUpdate(id, data, {
            new: true,
        });

        if (!updatedPerfume) {
            return NextResponse.json({ message: "perfume not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "perfume updated", data: updatedPerfume }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 });
    }
}



export async function DELETE(req: NextRequest) {
    await connect()

    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get('id');

    try {
        const data = await Perfume.findByIdAndDelete(id)

        return NextResponse.json({ message: "perfume deleted", data }, { status: 201 });

    } catch (e) {
        return NextResponse.json({ message: e }, { status: 500 });
    }
}
