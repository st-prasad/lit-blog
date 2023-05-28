import { PostMetaDataType } from "@/logicComp/Interfaces";
import getPostMetaData from "@/logicComp/getPostMetadata";
// import { useEffect, useRef } from "react";
import PostsTableElement from "./PostsTableElement";



const PostsTable = () => {
  // const myRef = useRef<HTMLDivElement | null>(null);
  // useEffect(() => {
  //   console.log("my ref", myRef.current);
  // }, []);
  const postMetaData = getPostMetaData();
  const postTableElements = postMetaData.map((metaDataObj: PostMetaDataType) => { //mapping the slugs to the posts
    return (
      <PostsTableElement key={metaDataObj.slug} {...metaDataObj} />
      // <PostsTableElement key="metaDataObj.slug" date='metaDataObj.date' title='metaDataObj.title'/>
    )
  });

  return (
    <div className='postsTable grid h-[264px] m-10 p-1 grid-cols-2 gap-2 border border-solid border-white overflow-y-auto'>
      {/* <div className='m-2 p-4 border border-solid border-white'> */}
      {postTableElements}
      {postTableElements}
      {postTableElements}
      {postTableElements}
    </div>
  )
}

export default PostsTable