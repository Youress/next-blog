import { getSinglePage, getPageSlug } from "@/app/lib/pages";
import { notFound } from "next/navigation";
import parse from "html-react-parser";

interface Props {
  params: { pagesSlug: string };
}

interface Page {
  title: string;
  date: string;
  content: string;
  slug: string;
}

type PageId = {
  slug: string;
  id: string;
}

const AllPages = async ({ params: { pagesSlug } }: Props) => {
  // Fetch the list of page slugs and IDs
  const idList: PageId[] = await getPageSlug();
  
  // Find the page ID corresponding to the slug
  const pageId = idList.find((id) => id.slug === pagesSlug);

  // If pageId is not found, return a 404 error
  if (!pageId) return notFound();

  // Fetch the page content using the found ID
  const page = await getSinglePage(pageId.id);

  // Handle the case where page data might not be available
  if (!page) return notFound();

  return (
    <main className="md:py-14 py-8 px-8 md:px-0">
      <section className="max-w-[680px] mx-auto">
        <div></div>
        <div></div>
        <h1>{page.title}</h1>
        <p>{page.date}</p>
        <div>{parse(page.content)}</div>
      </section>
    </main>
  );
};

export default AllPages;
