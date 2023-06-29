import { getParsedMatter } from "@/logicComp/getParsedMatter";
import getPostMetaData from "@/logicComp/getPostMetadata";
import Link from "next/link";
import ReactMarkdown from 'react-markdown';

//interfaces in TypeScript are a way to define custom types. 
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
  const filePath = `blogPosts/${slug}.md`;
  const parsedMatter = getParsedMatter(filePath);
  return parsedMatter;
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
    <div id="postsPage" className="p-[2vw] text-center">
      <Link href="/">HOME</Link>
      <h1 className="text-orange-300">{postContent.data.title}</h1>
      {/* <h1 className="text-orange-300">testin page - {slug}</h1> */}
      <article className="prose prose-invert lg:prose-xl prose-yellow my-0 mx-auto">
      <ReactMarkdown className="markdown text-amber-400 bg-slate-500 font-merriweatherfont text-lg leading-relaxed my-6 mx-auto max-w-2xl">{postContent.content}</ReactMarkdown>
      {/* <ReactMarkdown className="markdown text-amber-400 bg-slate-500 font-merriweatherfont text-lg leading-relaxed my-6 mx-auto max-w-2xl">{postContent.content}</ReactMarkdown> */}
      </article>
    </div>
  )
}

export default PostsPage