//add comments to every code block to explain what it does
import fs from 'fs'; //importing fs module from node.js to read files from the file system
import matter from "gray-matter";
import Link from 'next/link';
import { PostMetaData } from '../logic/Interfaces';

//after running markdown through gray-matter, you would get an object with a data property containing the metadata (the front matter), and a content property containing the rest of the markdown file.

const getPostMetaData = (): PostMetaData[] => { //function to get the metadata of the post
  // const folder = "blogPosts/";
  const files = fs.readdirSync("blogPosts/");//read the files in the folder and store in files

  //filter to only get markdown files
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const postsData = markdownPosts.map((fileName) => {
    const fullPath = `blogPosts/${fileName}`; //get the full path of the file
    const fileContents = fs.readFileSync(fullPath, "utf8"); //read the file contents
    const matterData = matter(fileContents); //get the metadata of the file
    return {
      title: matterData.data.title,
      // description: matterData.data.description,
      date: matterData.data.date,
      subtitle: matterData.data.subtitle,
      slug: fileName.replace(".md", ""),
    };
  });
  // const slugs = markdownPosts.map((post) =>  post.replace(".md", "") ); //slugs are the names of the files without the .md extension
  // return slugs;
  return postsData;
}

export default function HomePage() {
  const postMetaData = getPostMetaData();
  const postPreviews = postMetaData.map((metaDataObj) => { //mapping the slugs to the posts
    return (
      <div key={metaDataObj.date} className="mb-4">
        <Link href={`/posts/${metaDataObj.slug}`} >
          <h1 className="text-white text-2xl hover:underline cursor-pointer">{metaDataObj.title}</h1>
        </Link>
          <p>{metaDataObj.subtitle}</p>
          <p>{metaDataObj.date}</p>
          <p>{metaDataObj.slug}</p>
      </div>
    )
  });


  return (
    <div className='p-4'>{postPreviews}</div>
  )
}
