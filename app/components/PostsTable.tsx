import { PostMetaDataType } from "@/logicComp/Interfaces";
import getPostMetaData from "@/logicComp/getPostMetadata";
import PostsTableElement from "./PostsTableElement";



const PostsTable = () => {

    const postMetaData = getPostMetaData();
  const postTableElements = postMetaData.map((metaDataObj: PostMetaDataType) => { //mapping the slugs to the posts
    return (
      <PostsTableElement key={metaDataObj.slug} {...metaDataObj} />
      // <PostsTableElement key="metaDataObj.slug" date='metaDataObj.date' title='metaDataObj.title'/>
    )
  });

  return (
    <div className='grid m-10 p-1 grid-cols-2 gap-2 border border-solid border-white'>
    {/* <div className='m-2 p-4 border border-solid border-white'> */}
      {postTableElements}
    </div>
  )
}

export default PostsTable