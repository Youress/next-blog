import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Skeleton  from "@/app/components/Skeleton";


export default async function FeaturedImage({ post }) {

  let img = "";

  const defaultWidth = "400";
  const defaultHeight = "500";

  if (post.featuredImage) {
        let size = post.featuredImage?.node.mediaDetails.sizes[0];
    img = {
      src: size.sourceUrl,
      width: size.width,
      height: size.height,
    };
  } else {
    img = {
      src: "",
      width: defaultWidth,
      height: defaultHeight,
    };
  }

  return (
    <Suspense fallback={<Skeleton width='24rem' height='24rem'/>}>
      <Link href={`/blog/${post.slug}`}>
        <Image
          src={img.src}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "620px"}}
          alt={post.title}
          className="h-full object-cover rounded-xl"
        />
      </Link>
    </Suspense>
  );
}
