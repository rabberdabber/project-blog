import React from "react";

import styles from "./homepage.module.css";
import { getBlogPostList } from "@/helpers/file-helpers";
import BlogPostsLists from "@/components/BlogPostsLists";

async function Home() {
  const blogPosts = await getBlogPostList();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Latest Content:</h1>
      <BlogPostsLists blogPosts={blogPosts} />
    </div>
  );
}

export default Home;
