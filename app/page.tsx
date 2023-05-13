//add comments to every code block to explain what it does
import fs from 'fs'; //importing fs module from node.js to read files from the file system
import Link from 'next/link';

const getPostMetaData = ( ) => { //function to get the metadata of the post
  const folder = "posts/";
  const files = fs.readdirSync(folder);//read the files in the folder and store in files

  //filter to only get markdown files
  const markdownPosts = files.filter((file) => file.endsWith(".md") );
  const slugs = markdownPosts.map((post) =>  post.replace(".md", "") ); //slugs are the names of the files without the .md extension
  return slugs;
}

export default function Home() {
  const postMetaData = getPostMetaData(); 
  const postPreviews = postMetaData.map((slug) => { //mapping the slugs to the posts
    return (
      <div key={slug}>
        <Link href={`/posts/${slug}` } >
        <h1>{slug}</h1>
        </Link>
      </div>
    )
  });
  

  return (
    <div>{postPreviews}</div>
  )
}
