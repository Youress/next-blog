import { getSinglePost } from "@/app/lib/posts";
import FeaturedImage from "@/app/components/FeaturedImage";

const BlogPost = async ({ params }) => {
  const post = await getSinglePost(params.singlepost);
  return (
    <main className="md:py-14 py-8  ">
      <section className="max-w-[680px] mx-auto">
        <div className="mb-2">
          <p className="text-purple-600 text-sm font-semibold">{new Date(post?.date).toLocaleString()}</p>
        </div>
        <div className="mb-6">
          <h1 className="font-bold text-3xl">{post?.title}</h1>
        </div>
        <div className="flex justify-center my-5">
          <FeaturedImage post={post}/>
        </div>
        <div dangerouslySetInnerHTML={{__html:post.content}}></div>
      </section>
    </main>
  )
};
export default BlogPost;

export async function generateMetadata({ params }) {
  return {
    title: params.singlepost,
    description: params.singlepost ,
  };
}