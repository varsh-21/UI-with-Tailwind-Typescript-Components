import type { Post } from '../types';

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=4';

export async function fetchPosts(): Promise<Post[]> {
  const response = await fetch(POSTS_URL);

  if (!response.ok) {
    throw new Error('Unable to load posts. Please try again.');
  }

  return response.json() as Promise<Post[]>;
}
