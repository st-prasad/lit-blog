import Image from 'next/image';
import React from 'react';
import AnimatedImage from './AnimatedImage';


type Props = {};

const Hero = (props: Props) => {
    return (
        <section id='HeroSection' className="text-center flex flex-row pt-[10vh] h-[50vh]">

            <div className='relative basis-2/5 lg:basis-1/5'>
                <AnimatedImage />
            </div>
            <div className='basis-3/5 lg:basis-4/5 self-center text-center'>
                <h1 className="text-4xl font-bold text-gray-100">Welcome to lit-blog!</h1>
                <p className="text-2xl font-semibold text-gray-300">This is a blogsite where you can share your thoughts and ideas with the world.</p>
            </div>

        </section>
    )
}

export default Hero