import React from "react";
import Title from "../home/Title";
import { blogImgOne, blogImgTwo, blogImgThree, workImgOne, workImgTwo, workImgThree } from "../../assets";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div>
      <Title title="Latest" subTitle="Posts" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <a href="https://asian-mario.github.io/Logging" target="_blank" rel="noopener noreferrer">
          <BlogCard
            image={workImgThree}
            title="June 19, 2024"
            subTitle="ROUGE2"
            category="High-Performance Engine"
          />
          </a>
        </div>
        <div className="px-6">
          <BlogCard
            image={workImgOne}
            title="Coming Soon!"
            subTitle="Coming Soon!"
            category="Coming Soon!"
          />

        </div>
      </div>
    </div>
  );
};

export default Blog;
