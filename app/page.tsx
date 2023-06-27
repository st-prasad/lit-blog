import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import React from 'react';
import PostElementsTable from './components/PostElementsTable';


const HomePage = () => {
  return (
    <div className='homePage'>
      <PostElementsTable />
    </div>
  )
}

export default HomePage