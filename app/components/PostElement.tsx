import { PostMetaDataType } from '@/logicComp/interfaces'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


// import pholder from '/public/images/pholder.jpg'
// import pholder from "/images/download.png"

// type Props = {props: PostMetaDataType}


const PostElement = (props: PostMetaDataType) => {
    return (
        <div id='post-element' className="grid-custom pt-4 bg-[#3e8de3] min-w-[300px] text-white justify-items-center opacity-70 hover:opacity-100 transition-opacity duration-200">
            {/* <div className="post-element pt-4 bg-cyan-800 min-w-[300px] grid grid-flow-row auto-rows-max"> */}

            <div className='self-start'>
                <Link href={`/posts/${props.slug}`} >
                    <h1 className="text-cyan-100 text-2xl hover:underline cursor-pointer">{props.title}</h1>
                </Link>
            </div>
            <div className='self-center'>
                {(props.image === undefined) ? <Image src="/images/pholder.jpg" alt="placeholder image" width={50} height={50} /> : <Image src={props.image} alt={`Cover Image for ${props.title}`} width={50} height={50} />}
            </div>
            <div className='self-center'>
                <p className=' h-10 text-white'>{props.subtitle}</p>
            </div>
            <div className='self-center'>
                <p className='h-10 text-white'>{props.date}</p>
            </div>
            <div className='self-center'>
                <p className=' h-10 text-white'>{props.slug}</p>
            </div>
            

        </div>
    )
}

export default PostElement