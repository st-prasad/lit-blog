import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {};

const Navbar = (props: Props) => {
    return (
        <nav className="navbar fixed w-full max-w-screen-md left-0 right-0 mx-auto top-0 z-50 drop-shadow-xl flex items-center justify-between flex-wrap bg-gradient-to-r from-indigo-950 to-[#3E8DE3] sm:py-6 px-6 py-0 text-lg lg:text-xl">


            <div className="flex text-gray-100 mr-6 group-rotate">
                <span className="font-semibold text-xl lg:text-2xl tracking-tight rotate-animation">lit-blog</span>
            </div>
            {/* <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto prose prose-xl"> */}
            <div className="navLinks flex flex-col sm:flex-row justify-between mx-0 sm:mx-auto prose prose-xl sm:prose-base">

                {/* <div className='flex justify-center items-center min-h-screen relative'>
                    <Image className="object-contain" src="/robot_image.png" alt="Brain"
                        fill />
                </div> */}

                <Link href="#responsive-header" className=" navLink mx-4 group-glow">
                    <span className="animate-hoverGlow">Home</span>
                </Link>
                <Link href="#responsive-header" className="navLink mx-4 group-glow">
                    <span className="animate-hoverGlow">Blog</span>
                </Link>
                <Link href="#responsive-header" className="navLink mx-4 group-glow">
                    <span className="animate-hoverGlow">About</span>
                </Link>
                <Link href="#responsive-header" className="navLink mx-4 group-glow">
                    <span className="animate-hoverGlow">Contact</span>
                </Link>
                {/* {<div className='navLink mx-3'> */}

                    {/* <a href="#" className=" px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-900 hover:bg-white mt-4 lg:mt-0">Login</a> */}
                    {/* <a href="#" className=" px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-900 hover:bg-blue-300 mt-4 lg:mt-0">Login</a>
                </div>} */}

            </div>
        </nav>
    );
}

export default Navbar;
