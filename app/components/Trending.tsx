"use client"
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
// import { animated, useSpring } from 'react-spring'
import { useInView } from 'react-intersection-observer';




const Trending = () => {
    // const styles = useSpring({
    //     from: { opacity: "0" },
    //     to: { opacity: "1" },
    //     config: { duration: 2500 },
    //   })

    // const createdRef = useRef()
    const { ref: createdRef, inView: elementVisibility } = useInView();

    // const createdRef = useRef<HTMLDivElement>(null)
    // useEffect(() => {
    //     // console.log("refValue", createdRef.current)
    //     const observer = new IntersectionObserver(
    //         () =>
    // }, [])

    return (
        <div id='trending' className="flex justify-around items-center p-20 gap-[2vw] bg-[#abc3cd] h-screen">

            <div className="basis-1/3 bg-blue-950 min-w-[150px] max-w-[300px] rounded-lg shadow-lg w-full md:w-1/2 transform duration-500 hover:translate-x-5 hover:-translate-y-5 pointer-events-none relative z-10">
                <Image className="w-full rounded-lg shadow-lg transform duration-500 hover:-translate-x-10 hover:translate-y-10 pointer-events-auto my-0 mx-auto"
                    src='/images/aiimage.jpg'
                    width={400}
                    height={400}
                    alt='my profile pic'
                    priority={true}>
                </Image>
            </div>
            {/* <h1>{ elementVisibility ? 'Yes! 🥳' : 'No 🙈' }</h1> */}
            {/* <h1 className={` ${elementVisibility ? 'animate-fadeInFromRight' : ''}`}></h1> */}


            {/* <div>
                <h1>top 5 trending ai technologies this month</h1>
                <ul>
                    <li>gpt-3</li>
                    <li>openai</li>
                    <li>gpt-3</li>
                    <li>openai</li>
                </ul>
            </div> */}
            {/* rewrite above comented div and add appropriate styles */}
            <div className="text-center basis-2/3 md:text-left relative z-20">
            {/* <div className="text-center basis-2/3 md:text-left relative z-20"> */}
                <h1 className="text-4xl font-bold text-[#143aa2]">Top 5 trending AI technologies this month</h1>
                {/* <ul className="text-2xl font-semibold text-[#04060D]"> */}
                <ul ref={createdRef} className={` ${elementVisibility ? 'animate-fadeInFromRight' : ''} text-2xl font-semibold text-[#04060D]`}>
                    <li>GPT-3</li>
                    <li>OpenAI</li>
                    <li>DeepMind</li>
                    <li>Google Brain</li>
                    <li>Deep Learning</li>

                </ul>
            </div>

        </div>
    )
}

export default Trending