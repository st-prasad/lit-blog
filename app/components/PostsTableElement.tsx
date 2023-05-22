import { PostMetaDataType } from '@/logicComp/Interfaces'
import Link from 'next/link'
import React from 'react'

// type Props = {props: PostMetaDataType}


const PostsTableElement = (props: PostMetaDataType) => {
    return (
        <div className="mb-4">
            <Link href={`/posts/${props.slug}`} >
                <h1 className="text-white text-2xl hover:underline cursor-pointer">{props.title}</h1>
            </Link>
            <p>{props.subtitle}</p>
            <p>{props.date}</p>
            <p>{props.slug}</p>
        </div>
    )
}

export default PostsTableElement