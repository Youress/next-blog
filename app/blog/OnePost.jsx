import { getSinglePost } from "../lib/posts";
import FeaturedImage from "@/app/components/FeaturedImage";
import parse from "html-react-parser";

const OnePost = async ({ allposts }) => {
  const singlePost = allposts?.nodes[0]; // Directly access the first post
  const slug = singlePost?.slug; // Get the slug directly
  const post = await getSinglePost(slug);

  return (
    <>
      <div className="mb-2">
        <p className="text-purple-600 text-sm font-semibold">
          {new Date(post?.date).toLocaleString()}
        </p>
      </div>
      <div className="mb-6">
        <h1 className="font-bold text-3xl">{post?.title}</h1>
      </div>
      <div className="flex justify-center my-5">
        <FeaturedImage post={post} />
      </div>
      <div >{parse(post?.content)}</div>
    </>
  );
};

export default OnePost;
