import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  const entries = Array.from({ length: 10 }, (_, i) => ({
    name: `Entry ${i}`,
    description: `This is entry ${i}`,
    price: i * 10,
    date: new Date().toISOString(),
    paymentType: i % 2 === 0 ? '8421' : '2294'
  }))
  return NextResponse.json(entries)
}