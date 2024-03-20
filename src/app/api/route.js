import { NextResponse } from "next/server"

export async function GET() {
  const res = await fetch('https://fakestoreapi.com/products', {
    headers: {
      'Content-Type': 'application/json',
      // 'API-Key': process.env.DATA_API_KEY,
    },
  })
  const data = await res.json()
  // console.table({data})
  return NextResponse.json({ data })
}