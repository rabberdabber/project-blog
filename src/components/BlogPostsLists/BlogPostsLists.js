import React from "react";
import styles from "./BlogPostsLists.module.css";
import BlogSummaryCard from "@/components/BlogSummaryCard";

function BlogPostsLists({ blogPosts }) {
  return (
    <ul className={styles.list}>
      {blogPosts?.map((post) => (
        <li key={post.slug}>
          <BlogSummaryCard
            slug={post.slug}
            title={post.title}
            abstract={post.abstract}
            publishedOn={post.publishedOn}
          />
        </li>
      ))}
    </ul>
  );
}

export default BlogPostsLists;
