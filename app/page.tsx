// import Link from 'next/link';
// import { PostMetaDataType } from '../logicComp/Interfaces';
// import getPostMetaData from '../logicComp/getPostMetadata';
// import PostsTable from './components/PostsTable';

// export default function HomePage() {
//   const postMetaData = getPostMetaData();
//   const postPreviews = postMetaData.map((metaDataObj: PostMetaDataType) => { //mapping the slugs to the posts
//     return (
//       <PostsTable key={metaDataObj.slug} {...metaDataObj} />
//       // <PostsTable key="metaDataObj.slug" date='metaDataObj.date' title='metaDataObj.title' subtitle='metaDataObj.subtitle' slug='metaDataObj.slug' />
//     )
//   });


//   return (
//     <div className='p-4'>{postPreviews}</div>
//   )
// }

import React from 'react'
import PostsTable from './components/PostsTable'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div>
      <PostsTable />
    </div>
  )
}

export default HomePage