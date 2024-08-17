import graphRequest from "./graphRequest";

export async function getAllPosts() {
  const query = {
    query: `query getAllPosts {
        posts {
          nodes {
            id
            date
            slug
            title
            excerpt(format: RENDERED)
            featuredImage {
              node {
                mediaDetails {
                  file
                  sizes {
                    sourceUrl
                    width
                    height
                  }
                }
              }
            }
            categories {
              nodes {
                name
                slug
              }
            }
          }
          pageInfo {
            endCursor
            hasNextPage
            hasPreviousPage
            startCursor
          }
        }
      }`,
  };
  try {
     const resJson = await graphRequest(query);
  const allPosts = await  resJson.data.posts;
  return allPosts;
  } catch (error) {
    console.log(error)

  }
  
   

  
}

export async function getSinglePost (slug){
  const query = {
    query :`query SinglePost {
  post(
    id: "${slug}",
    idType: SLUG
  ) {
    id
    content(format: RENDERED)
    slug
    title(format: RENDERED)
    date
    excerpt(format: RENDERED)
    modified
    featuredImage {
      node {
        mediaDetails {
          sizes {
            width
            height
            sourceUrl
          }
        }
      }
    }
    categories {
      nodes {
        name
        slug
      }
    }
  }
}`
  }
  try {
    const resJson = await graphRequest(query);
  const singlePost =await  resJson.data.post;
  return singlePost;
  } catch (error) {
    console.log(error)
  }
  

}
