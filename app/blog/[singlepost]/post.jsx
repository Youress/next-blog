import FeaturedImage from "@/app/components/FeaturedImage";
import parse from "html-react-parser";
const Post = ({post}) => {
  return (
    <main className="md:py-14 py-8 px-6 md:px-0  ">
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
        <div >{post?.content ? parse(post.content) : <p>no content</p>}</div>
      </section>
    </main>
  )
}

export default Post
export const dynamic = 'force-static'
