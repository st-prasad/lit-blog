import { PostMetaDataType } from '@/logicComp/Interfaces'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// type Props = {props: PostMetaDataType}


const PostElement = (props: PostMetaDataType) => {
    return (
        <div className="post-element pt-4 bg-cyan-800">
            <Link href={`/posts/${props.slug}`} >
                <h1 className="text-white text-2xl hover:underline cursor-pointer">{props.title}</h1>
            </Link>
            <p>{props.subtitle}</p>
            <p>{props.date}</p>
            <p>{props.slug}</p>
            {/* {props.image !== undefined && <Image src={props.image} alt={`Cover Image for ${props.title}`} width={200} height={200} />} */}
            {props.image && <Image src={props.image} alt={`Cover Image for ${props.title}`} width={200} height={200} />}
        </div>
    )
}

export default PostElement