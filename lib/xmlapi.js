console.log("xmlapi")

async function fetchAPI(query = '', { variables } = {}) {
    const headers = { 'Content-Type': 'application/json' }
  
    if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
      headers[
        'Authorization'
      ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
    }
  
    // WPGraphQL Plugin must be enabled
    const res = await fetch(`${API_URL}/graphql`, {
      headers,
      method: 'POST',
      body: JSON.stringify({
        query,
        variables,
      }),
    })
  
    const json = await res.json()
    if (json.errors) {
      console.error(json.errors)
      throw new Error('Failed to fetch API')
    }
    return json.data
  }

  export async function getAllPostsForHome(preview) {
    const data = await fetchAPI(
      `
      query AllPosts {
        posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
          edges {
            node {
              title
              excerpt
              slug
              date
              featuredImage {
                node {
                  sourceUrl
                }
              }
              author {
                node {
                  name
                  firstName
                  lastName
                  avatar {
                    url
                  }
                }
              }
            }
          }
        }
      }
    `,
      {
        variables: {
          onlyEnabled: !preview,
          preview,
        },
      }
    )
  
    return data?.posts
  }