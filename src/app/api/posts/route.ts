import { NextResponse } from 'next/server';
import { getPosts } from '@/utils/utils';

export async function GET(request: Request) {
  try {
    const posts = getPosts(['src', 'app', 'work', 'projects']);
    
    // Filtrar posts nulos e ordenar por data de publicação (mais recente primeiro)
    const sortedPosts = posts
      .filter(post => post && post.metadata && post.metadata.publishedAt)
      .sort((a, b) => {
        if (!a || !b || !a.metadata || !b.metadata) return 0;
        return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
      });

    return NextResponse.json(sortedPosts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
} 