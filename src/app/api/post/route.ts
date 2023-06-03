import { NextResponse } from 'next/server';
import { getPosts } from 'service/posts';

export async function GET(request: Request) {
  const posts = await getPosts();
  return NextResponse.json({ posts });
}
