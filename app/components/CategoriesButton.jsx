import React from "react";
import { Flex, Button } from "@radix-ui/themes";
import Link from "next/link";

const CategoriesButton = ({ post }) => {
  return (
    <Flex gap="3" className="">
      {post.categories.nodes.map((categorie) => {
        const colorMapping = {
          travel: "indigo",
          morocco: "green",
        };
        const color = colorMapping[categorie.name] || "gray";
        return (
          <Button
            key={categorie.name}
            color={color}
            radius="full"
            variant="soft"
          >
            <Link href={`/categories/${categorie.name}`}>
              {categorie.name}
            </Link>
          </Button>
        );
      })}
    </Flex>
  );
};

export default CategoriesButton;
