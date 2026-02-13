import { NextResponse } from "next/server"

const HASHNODE_API = "https://api.hashnode.com"
const HASHNODE_USERNAME = "your-hashnode-username" // Replace with your Hashnode username

async function fetchHashnodePosts() {
  const query = `
    query GetUserArticles($page: Int!) {
      user(username: "${HASHNODE_USERNAME}") {
        publication {
          posts(page: $page) {
            title
            brief
            slug
            dateAdded
            coverImage
          }
        }
      }
    }
  `

  const response = await fetch(HASHNODE_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables: { page: 1 } }),
  })

  const { data } = await response.json()
  return data.user.publication.posts
}

export async function GET() {
  try {
    const posts = await fetchHashnodePosts()
    return NextResponse.json(posts)
  } catch (error) {
    console.error("Error fetching Hashnode posts:", error)
    return NextResponse.json({ error: "Failed to fetch blog posts" }, { status: 500 })
  }
}

