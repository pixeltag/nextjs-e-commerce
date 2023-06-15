import { NextResponse } from "next/server";

import cart from "@/cart.json"

export async function GET(req: Request) {
    return NextResponse.json(cart)
}