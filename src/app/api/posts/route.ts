import { NextResponse } from 'next/server';
import { getPosts } from '@/utils/utils';

export async function GET() {
  try {
    const posts = getPosts(['src', 'app', 'work', 'projects']);
    
    // Ordenar por data de publicação (mais recente primeiro)
    const sortedPosts = posts.sort((a, b) => {
      return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
    });

    return NextResponse.json(sortedPosts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
} 