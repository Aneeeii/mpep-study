import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
    const cookie = request.cookies.get("doggonaut");
    if (cookie?.value === process.env.AUTH_SECRET) {
        return NextResponse.next();
    }
    else {
        return NextResponse.redirect(new URL('/login', request.url))
    }
}

export const config = {
    matcher: ['/admin']
}