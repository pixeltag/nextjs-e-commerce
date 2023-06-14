import { NextResponse } from "next/server";

import product from "@/data.json"

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    const title = searchParams.get("title")
    const productData = product.filter((p) => p.title.toLowerCase().includes(title?.toLowerCase() ?? ""));
    return NextResponse.json(productData)
}