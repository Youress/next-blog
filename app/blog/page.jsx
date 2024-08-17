import CategoriesButton from "@/app/components/CategoriesButton";
import FeaturedImage from "@/app/components/FeaturedImage";
import { getAllPosts } from "../lib/posts";
import OnePost from "@/app/blog/OnePost"
import Link from "next/link";
const BlogHome = async () => {
  const allPosts = await getAllPosts();
  return (
    <main className="grid md:grid-cols-3  py-14 ">
      <aside className="col-span-1 lg:px-0 md:px-2 px-6">
        <div className="mb-4 ">
          <h3 className="font-semibold text-2xl">Recent Blog Posts</h3>
        </div>
        <div className="space-y-4 md:max-w-80 ">
          {allPosts?.nodes?.map((post) => (
            <div className="space-y-2 " key={post.slug}>
              <div className=" w-full h-[240px]">
                <FeaturedImage post={post} />
              </div>
              <div>
                <p className="font-semibold text-xs text-purple-700">
                  {new Date(post.date).toDateString()}
                </p>
              </div>
              <div className="">
                <Link
                  className="text-blue-700 font-medium hover:text-blue-800 "
                  href={`/blog/${post.slug}`}
                >
                  {post.title}
                </Link>
              </div>

              <div
                className=""
                dangerouslySetInnerHTML={{
                  __html: post.excerpt.substring(3, 120) + "...",
                }}
              ></div>

              <CategoriesButton post={post} />
            </div>
          ))}
        </div>
      </aside>
      <section className="col-span-2 hidden md:block">
        <OnePost allposts={allPosts} />
      </section>
    </main>
  );
};

export default BlogHome;


