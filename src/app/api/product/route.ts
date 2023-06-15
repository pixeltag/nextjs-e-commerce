import { NextResponse } from "next/server";

import product from "@/data.json"

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get("id")
    if (id) {
        const index = product.findIndex((p) => p.id == parseInt(id));
        const productData = product[index];
        return NextResponse.json(productData)
    } else {
        return NextResponse.json(null)
    }
    // r
}