// app/blog/page.tsx
"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface Post {
  id: string;
  title: string;
  slug: string;
  brief: string;
  publishedAt: string;
  coverImage?: {
    url: string;
  };
  tags?: Array<{
    name: string;
  }>;
}

const BlogPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const getHashnodePosts = async () => {
    try {
      const response = await fetch('https://gql.hashnode.com/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'f9e55b9c-5bee-41c2-8eff-32a8d050e9a4',
        },
        body: JSON.stringify({
          query: `
            query Publication {
              publication(host: "gaurangjadoun.hashnode.dev") {
                posts(first: 10) {
                  edges {
                    node {
                      id
                      title
                      slug
                      brief
                      publishedAt
                      coverImage {
                        url
                      }
                      tags {
                        name
                      }
                    }
                  }
                }
              }
            }
          `,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
      }

      const data = await response.json();

      if (data.errors) {
        throw new Error(data.errors[0].message);
      }

      const postsData = data.data?.publication?.posts?.edges?.map((edge: any) => edge.node) || [];
      setPosts(postsData);
    } catch (err: any) {
      console.error('Failed to fetch blog posts:', err);
      setError(`Failed to fetch blog posts: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getHashnodePosts();
  }, []);

  if (loading) {
    return (
      <div className="container py-12 animate-fade-in">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Blog</h1>
          <p className="text-muted-foreground">Loading posts...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-12 animate-fade-in">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Blog</h1>
          <p className="text-red-500">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-12 animate-fade-in">
      <div className="space-y-2 mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
        <p className="text-xl text-muted-foreground">
          My thoughts on technology, development, and more.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="text-muted-foreground">No blog posts found.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Card key={post.id} className="hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="line-clamp-2">
                  <Link
                    href={`https://gaurangjadoun.hashnode.dev/${post.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription>
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-3 mb-4">
                  {post.brief}
                </p>
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag.name} variant="secondary">
                        {tag.name}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogPage;

