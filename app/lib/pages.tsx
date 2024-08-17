import graphRequest from "./graphRequest";

// Define TypeScript interfaces for the expected data
interface PageNode {
  id: string;
  slug: string;
}

interface PageDetails {
  slug: string;
  content: string;
  date: string;
  modified: string;
  title: string;
}

// Fetches all page slugs
export async function getPageSlug(): Promise<PageNode[]> {
  const query = {
    query: `query PageSlug {
      pages {
        nodes {
          id
          slug
        }
      }
    }`,
  };

  try {
    const resJson = await graphRequest(query);
    const data = await resJson?.data?.pages?.nodes || [];
    return data;
  } catch (error) {
    console.error("Failed to fetch page slugs:", error);
    return [];
  }
}

// Fetches a single page by id
export async function getSinglePage(id:string): Promise<PageDetails> {
  const query = {
    query: `query SinglePage {
  page(id: "${id}", idType: ID) {
    id
    title(format: RENDERED)
    slug
    modified
    content(format: RENDERED)
  }
}`,
  };

    const resJson = await graphRequest(query);
    const pageData = await resJson?.data?.page
    return pageData;
}
