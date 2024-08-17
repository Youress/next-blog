import { getSinglePage, getPageSlug } from "@/app/lib/pages";
import { notFound } from "next/navigation";

interface Props {
  params: { pagesSlug: string };
}

interface Page {
  title: string;
  date: string;
  content: string;
  slug: string;
}

interface PageId {
  slug: string;
  id: string;
}

const AllPages = async ({ params: { pagesSlug } }: Props) => {
  const idList: PageId[] = await getPageSlug();
  const pageId = idList.find((id) => id.slug === pagesSlug);

  if (!pageId) notFound()

  const page: Page | null = await getSinglePage(pageId.id);


  return (
    <main className="md:py-14 py-8 px-8 md:px-0 ">
      <section className="max-w-[680px] mx-auto">
        <div></div>
        <div></div>
        <h1>{page.title}</h1>
        <p>{page.date}</p>
        <div dangerouslySetInnerHTML={{ __html: page.content }} />
      </section>
    </main>
  );
};

export default AllPages;
