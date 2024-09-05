import { getSinglePost } from "@/app/lib/posts";
import { getAllPosts } from "@/app/lib/posts";
import Post from "@/app/blog/[singlepost]/post"

export const revalidate = 3600 // invalidate every hour
export const dynamicParams = true

const BlogPost = async ({ params }) => {
  const {singlepost} = params
  const post = await getSinglePost(singlepost);

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
