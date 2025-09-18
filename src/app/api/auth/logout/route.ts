import { NextResponse } from 'next/server'

export async function POST() {
  // Create response
  const response = NextResponse.json(
    { message: 'Logout successful' },
    { status: 200 }
  )

  // Clear auth cookie
  response.cookies.delete('capnpay-auth')

  return response
}