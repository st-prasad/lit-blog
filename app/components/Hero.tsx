import React from 'react'

type Props = {}

const Hero = (props: Props) => {
    return (
        <section className="text-slate-100 text-center">
            {/* welcome message and blogsite introduction with tailwind styles of unique text color for a dark body background */}
            <h1 className="text-4xl font-bold">Welcome to lit-blog!</h1>
            <p className="text-2xl font-semibold">This is a blogsite where you can share your thoughts and ideas with the world.</p>
        </section>
    )
}

export default Hero