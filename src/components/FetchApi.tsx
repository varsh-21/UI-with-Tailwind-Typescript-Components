import { useEffect, useState } from 'react';
import { fetchPosts } from '../services/posts';
import type { Post } from '../types';

export function FetchApi() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    fetchPosts()
      .then((data) => {
        if (isMounted) {
          setPosts(data);
          setError('');
        }
      })
      .catch((caughtError: Error) => {
        if (isMounted) {
          setError(caughtError.message);
        }
      })
      .finally(() => {
        if (isMounted) {
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-slate-200">
      <p className="text-sm font-semibold uppercase tracking-wide text-sky-600">Fetch API</p>
      <h2 className="mt-2 text-2xl font-bold text-slate-900">Remote data cards</h2>
      {isLoading && <p className="mt-5 animate-pulse text-slate-500">Loading posts...</p>}
      {error && <p className="mt-5 rounded-2xl bg-red-50 p-4 text-sm font-medium text-red-700">{error}</p>}
      <div className="mt-5 grid gap-3">
        {posts.map((post) => (
          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-4" key={post.id}>
            <h3 className="font-semibold capitalize text-slate-900">{post.title}</h3>
            <p className="mt-2 line-clamp-2 text-sm text-slate-600">{post.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
