import { NextResponse } from "next/server";

export async function middleware(request) {
  let session = null;

  const path = request.nextUrl.pathname;

  const sessionCookie = request.cookies.get("Authentication")?.value || "";

  // Check if the path is public and user is authenticated
  if (isPublicPath(path) && sessionCookie) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  // If the path is not public, ensure user is authenticated
  if (!isPublicPath(path) && !sessionCookie) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }

  // Continue to the next middleware or handler
  return NextResponse.next();
}

// Function to check if the path is public
const isPublicPath = (path) => {
  return path.startsWith("/login") || path === "/register";
};

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
