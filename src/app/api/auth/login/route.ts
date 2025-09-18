import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Parse authorized users from environment variable
function getAuthorizedUsers() {
  const authUsers = process.env.AUTH_USERS || 'admin:capnpay2024'
  return authUsers.split(',').map(userStr => {
    const [username, password] = userStr.split(':')
    return { username: username.trim(), password: password.trim() }
  })
}

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json()

    // Validate input
    if (!username || !password) {
      return NextResponse.json(
        { message: 'Username and password are required' },
        { status: 400 }
      )
    }

    // Check credentials
    const authorizedUsers = getAuthorizedUsers()
    const user = authorizedUsers.find(
      (u: { username: string; password: string }) =>
        u.username === username && u.password === password
    )

    if (!user) {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // Create auth token (simple base64 encoding for demo)
    const authToken = btoa(JSON.stringify({ username, password }))

    // Create response with success
    const response = NextResponse.json(
      { message: 'Login successful', user: { username } },
      { status: 200 }
    )

    // Set auth cookie
    response.cookies.set('capnpay-auth', authToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    })

    return response
  } catch {
    return NextResponse.json(
      { message: 'Invalid request' },
      { status: 400 }
    )
  }
}