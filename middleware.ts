import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isHiddenBlogPath } from "./app/lib/posts";

export function middleware(request: NextRequest) {
  if (!isHiddenBlogPath(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/__hidden_blog__";
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    "/blog",
    "/blog/:path*",
    "/category/blog",
    "/category/blog/:path*",
    "/category/regenerative-medicine",
    "/category/regenerative-medicine/:path*",
    "/:slug",
  ],
};
