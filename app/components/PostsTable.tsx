// import Link from 'next/link';
// import { PostMetaDataType } from '../../logicComp/Interfaces';

import { PostMetaDataType } from "@/logicComp/Interfaces";
import getPostMetaData from "@/logicComp/getPostMetadata";
import PostsTableElement from "./PostsTableElement";


// // type Props = {props: PostMetaDataType}

// const PostsTable = (props: PostMetaDataType) => {
//   return (
//     <div className="mb-4">
//         <Link href={`/posts/${props.slug}`} >
//           <h1 className="text-white text-2xl hover:underline cursor-pointer">{props.title}</h1>
//         </Link>
//           <p>{props.subtitle}</p>
//           <p>{props.date}</p>
//           <p>{props.slug}</p>
//       </div>
//   )
// }

// export default PostsTable


const PostsTable = () => {

    const postMetaData = getPostMetaData();
  const postTableElements = postMetaData.map((metaDataObj: PostMetaDataType) => { //mapping the slugs to the posts
    return (
      <PostsTableElement key={metaDataObj.slug} {...metaDataObj} />
      // <PostsTable key="metaDataObj.slug" date='metaDataObj.date' title='metaDataObj.title' subtitle='metaDataObj.subtitle' slug='metaDataObj.slug' />
    )
  });

  return (
    <div className='m-2 p-4 border border-solid border-white'>
      {postTableElements}
    </div>
  )
}

export default PostsTable