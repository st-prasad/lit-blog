import getPostMetaData from "@/logicComp/GetPostMetadata";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import ReactMarkdown from 'react-markdown';

//Interfaces in TypeScript are a way to define custom types. 
//An interface defines the shape of an object, specifying what properties the object should have and what type those properties should be.

//PageProps interface describes the shape of an object that has one property: params.
interface PageProps {
  params: {
    slug: string;
  };
}

// type PageProps = {
//   params: {
//     slug: string;
//   };
// };

const getPostContent = (slug: string) => {
  // const folder = "blogPosts/";
  const file = `blogPosts/${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  // return content;
  const matterData = matter(content);
  return matterData;
}

export async function generateStaticParams() {
  const postsMetaData = getPostMetaData();
  return postsMetaData.map((metaDataObj) => ({
    slug: metaDataObj.slug,
  }));
}

//In Next.js, when  creating dynamic routes (for example /pages/posts/[slug].tsx), Next.js will pass a params object as part of the props to page component. This params object includes the dynamic parts of the route.
const PostsPage = (props: PageProps) => {
  const slug = props.params.slug;
  const postContent = getPostContent(slug);
  return (
    <div>
      <Link href="/">HOME</Link>
      <h1 className="text-orange-300">testin page title - {postContent.data.title}</h1>
      <h1 className="text-orange-300">testin page - {slug}</h1>
      <ReactMarkdown>{postContent.content}</ReactMarkdown>
    </div>
  )
}

export default PostsPage