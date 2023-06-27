'use client';
import React from 'react';
import Slider from "react-slick";
// needed @types/react-slick package because above module implicitly has an 'any' type. 

type ArrowProps = {
  className?: string,
  style?: React.CSSProperties,
  onClick?: () => void,
}

const NextArrow = (props: ArrowProps) => (
  <div className="nextArrow" onClick={props.onClick}>Next</div>
);

const PrevArrow = ( props: ArrowProps ) => (
  <div className="prevArrow" onClick={props.onClick}>Prev</div>
);

const PostElementsSlider = ({ PostElements }: { PostElements: JSX.Element[] }) => {

          // settings for slick carousel
    const settings = {
        dots: true,
        // infinite: true,
        // speed: 500,
        // slidesToShow: 1,
        // slidesToScroll: 1
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        // centerPadding: "0px",
        //arrows are absolutely positioned in slick, so we need to add a wrapper div to position them relative to the slider div.
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 3,
              // slidesToScroll: 3,
              // infinite: true,
              // dots: true
            }
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
              // slidesToScroll: 2,
              // initialSlide: 2
            }
          },
          {
            breakpoint: 650,
            settings: {
              slidesToShow: 1.5,
              // slidesToScroll: 1
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
            }
          },
        ]
      }

  return (
    <Slider {...settings}>
    {/* <div id="postsTable" className='flex m-10 p-1 w-[80vw] h-full overflow-x-auto gap-2 border border-solid border-white my-0 mx-auto'> */}
    {/* <div id="postsTable" className='grid m-10 p-1 grid-rows-1 gap-2 border border-solid border-white overflow-x-auto'> */}
      {/* <div className='m-2 p-4 border border-solid border-white'> */}
      {PostElements}

    {/* </div> */}
    </Slider>
  )
}

export default PostElementsSlider