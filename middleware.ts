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

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Allow access to login page and API routes
  if (pathname.startsWith('/login') || pathname.startsWith('/api/auth')) {
    return NextResponse.next()
  }

  // Check if user is authenticated
  const authCookie = request.cookies.get('capnpay-auth')

  if (!authCookie) {
    // Redirect to login if not authenticated
    return NextResponse.redirect(new URL('/login', request.url))
  }

  try {
    // Verify the auth token (simple base64 decode for demo)
    const authData = JSON.parse(atob(authCookie.value))
    const authorizedUsers = getAuthorizedUsers()
    const isValidUser = authorizedUsers.some(
      (user: { username: string; password: string }) =>
        user.username === authData.username && user.password === authData.password
    )

    if (!isValidUser) {
      // Clear invalid cookie and redirect to login
      const response = NextResponse.redirect(new URL('/login', request.url))
      response.cookies.delete('capnpay-auth')
      return response
    }

    // User is authenticated, allow access
    return NextResponse.next()
  } catch {
    // Invalid cookie format, redirect to login
    const response = NextResponse.redirect(new URL('/login', request.url))
    response.cookies.delete('capnpay-auth')
    return response
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - login (login page)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|login).*)',
  ],
}