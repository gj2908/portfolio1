// app/blog/page.tsx
"use client";  // Marking the component as a Client Component

import React, { useEffect, useState } from 'react';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getHashnodePosts = async () => {
    try {
      const response = await fetch('https://api.hashnode.com/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            query {
              user(username: "gaurangjadoun") {
                publication {
                  posts {
                    title
                    slug
                    dateAdded
                  }
                }
              }
            }
          `,
        }),
      });

      // Check if the response is ok
      if (!response.ok) {
        const errorText = await response.text(); // Get the error response text
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
      }

      const data = await response.json();
      const posts = data.data.user.publication.posts;
      setPosts(posts);
    } catch (err) {
      console.error('Failed to fetch blog posts:', err);
      setError(`Failed to fetch blog posts: ${err.message}`);  // Improved error message
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getHashnodePosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <a href={`https://gaurangjadoun.hashnode.dev/${post.slug}`}>
              {post.title}
            </a>
            <p>{new Date(post.dateAdded).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;

