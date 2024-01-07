import { NextResponse } from 'next/server';

export async function GET() {
  try {
    return NextResponse.redirect(
      new URL('https://echogeneracji.pl/dolacz'),
      307
    );
  } catch (e) {
    console.error(e);
    return NextResponse.json({ success: false, error: 'Something went wrong' });
  }
}
