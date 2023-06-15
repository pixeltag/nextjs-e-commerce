import { NextResponse } from "next/server";

import categories from "@/categories.json"

export async function GET(req: Request) {
    return NextResponse.json(categories)
}