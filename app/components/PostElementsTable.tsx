import { PostMetaDataType } from "@/logicComp/Interfaces";
import getPostMetaData from "@/logicComp/getPostMetadata";
// import { useEffect, useRef } from "react";
// import Slider from "react-slick";
//needed @types/react-slick package because above module implicitly has an 'any' type. 
import PostElement from "./PostElement";
import PostElementsSlider from "./PostElementsSlider";


const PostElementsTable = () => {
  // const myRef = useRef<HTMLDivElement | null>(null);
  // useEffect(() => {
  //   console.log("my ref", myRef.current);
  // }, []);
  const postMetaData = getPostMetaData();

    // Map over metadata and create PostElement components
  const PostElements = postMetaData.map((metaDataObj: PostMetaDataType) => { //mapping the slugs to the posts
    return (
      <PostElement key={metaDataObj.slug} {...metaDataObj} />
      // <PostElement key="metaDataObj.slug" date='metaDataObj.date' title='metaDataObj.title'/>
    )
  });



  return (
    // <div id="postsTable" className='flex m-10 p-1 w-[80vw] h-full overflow-x-auto gap-2 border border-solid border-white my-0 mx-auto'>
    <div id="postsTable">
      {/* <Slider {...settings}> */}
    {/* <div id="postsTable" className='grid m-10 p-1 grid-rows-1 gap-2 border border-solid border-white overflow-x-auto'> */}
      {/* <div className='m-2 p-4 border border-solid border-white'> */}
      {/* {PostElements} */}
      <PostElementsSlider PostElements={PostElements} />

      {/* {PostElements}
      {PostElements}
      {PostElements} */}
    {/* </Slider> */}
    </div>
  )
}

export default PostElementsTable