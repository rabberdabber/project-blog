import dynamic from "next/dynamic";
import React from "react";

import BlogHero from "@/components/BlogHero";
import Spinner from "@/components/Spinner";
import CodeSnippet from "@/components/CodeSnippet";

import styles from "./postSlug.module.css";
import { loadBlogPost } from "@/helpers/file-helpers";
import { MDXRemote } from "next-mdx-remote/rsc";

const DivisionGroupsDemo = dynamic(
  () => import("@/components/DivisionGroupsDemo"),
  { loading: Spinner }
);

const CircularColorsDemo = dynamic(
  () => import("@/components/CircularColorsDemo"),
  { loading: Spinner }
);

async function getBlog(slug) {
  const { frontmatter, content } = await loadBlogPost(slug);

  return { frontmatter, content };
}

export async function generateMetadata({ params: { postSlug } }) {
  const { frontmatter } = await getBlog(postSlug);
  if (!frontmatter) {
    return {};
  }

  return {
    title: frontmatter.title,
    description: frontmatter.abstract,
  };
}

async function BlogPost({ params: { postSlug } }) {
  const { frontmatter, content } = await getBlog(postSlug);
  const { title, publishedOn } = frontmatter;

  return (
    <article className={styles.wrapper}>
      <BlogHero title={title} publishedOn={publishedOn} />
      <div className={styles.page}>
        <MDXRemote
          source={content}
          components={{
            pre: CodeSnippet,
            DivisionGroupsDemo,
            CircularColorsDemo,
          }}
        />
      </div>
    </article>
  );
}

export default BlogPost;
