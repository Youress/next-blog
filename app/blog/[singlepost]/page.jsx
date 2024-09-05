import { getSinglePost } from "@/app/lib/posts";
import { getAllPosts } from "@/app/lib/posts";
import Post from "@/app/blog/[singlepost]/post"
import { notFound } from "next/navigation";

export const dynamicParams = true

const BlogPost = async ({ params }) => {
  const {singlepost} = params
  const post = await getSinglePost(singlepost);
if(!post) return notFound()
  return (
    <>
    <Post post={post}/>
    </>
    
  )
};
export default BlogPost;

export async function generateMetadata({ params }) {
  return {
    title: params.singlepost,
    description: params.singlepost ,
  };
}
export async function generateStaticParams() {
  const allPosts = await getAllPosts();
 
  return allPosts?.nodes?.map((post) => ({
    slug: post.slug,
  }))
}
