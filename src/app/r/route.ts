import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const { origin } = new URL(request.url);
    const redirectUrl = new URL('/resume?mode=view', origin);
    return NextResponse.redirect(redirectUrl.toString());
}
