import { getSinglePost } from "@/app/lib/posts";
import { getAllPosts } from "@/app/lib/posts";
import Post from "@/app/blog/[singlepost]/post"
import { notFound } from "next/navigation";


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
  const post = await getSinglePost(params.singlepost);
  
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt ? post.excerpt.replace(/<[^>]*>?/gm, '').substring(0, 160) : '',
    openGraph: {
      title: post.title,
      description: post.excerpt ? post.excerpt.replace(/<[^>]*>?/gm, '').substring(0, 160) : '',
      type: 'article',
      images: post.featuredImage?.node?.sourceUrl ? [post.featuredImage.node.sourceUrl] : [],
    },
    alternates: {
      canonical: `/blog/${params.singlepost}`,
    },
  };
}
export async function generateStaticParams() {
  const allPosts = await getAllPosts();
 
  return allPosts?.nodes?.map((post) => ({
    slug: post.slug,
  }))
}
