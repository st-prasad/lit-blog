'use client'
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
// import Image from 'next/image'
import { useRef } from 'react';
import AiAnimation from '../../public/assets/AiAnimation.json';



const AnimatedImage = () => {
    // let kk = '/public/assets/AiAnimation.json'
    // console.log([AiAnimation])
    const animationRef = useRef<LottieRefCurrentProps>(null)
    return (
        <section id='AnimatedImage' className='absolute bottom-0 left-0 h-[50vh]'>
            {/* <Image className='border-2 border-gray-500 rounded-[70%] drop-shadow-xl shadow-white' */}
            <div className='h-full'>
            <Lottie className='lottiecomp h-full' onComplete={() => {
                console.log('animation completed')
                // animationRef.current?.goToAndPlay(0, true)
                animationRef.current?.goToAndStop(82, true)
                // animationRef.current?.play()
                // animationRef.current?.setDirection(-1)
            }} lottieRef={animationRef} initialSegment={[0, 82,]} loop={false} animationData={AiAnimation}>
            {/* }} lottieRef={animationRef} initialSegment={[30, 60,]} loop={2} animationData={AiAnimation}> */}
            </Lottie>
            </div>
        </section>
    )
}

export default AnimatedImage