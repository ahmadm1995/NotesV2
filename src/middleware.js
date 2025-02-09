// middleware.js
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req) {
  // Get the pathname of the request URL
  const { pathname } = req.nextUrl;
  console.log('[Middleware] Request for:', pathname);
  
  // Check if the pathname starts with "/user"
  if (pathname.startsWith('/user')) {
    // Try to retrieve the token from the request (using your NEXTAUTH_SECRET)
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    console.log('[Middleware] Token:', token);
    
    // If there's no token, redirect the user to the login page
    if (!token) {
      const loginUrl = req.nextUrl.clone();
      loginUrl.pathname = '/login';
      console.log('[Middleware] No token found. Redirecting to', loginUrl.href);
      return NextResponse.redirect(loginUrl);
    }
  }
  
  // If the route isn't protected or the user is authenticated, allow the request to proceed
  return NextResponse.next();
}

// Configure the middleware to only run for the protected route(s)
export const config = {
  matcher: ['/user','/user/:path*']
};
