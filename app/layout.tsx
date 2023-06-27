import Link from 'next/link';
import AnimatedImage from './components/AnimatedImage';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ProfileImage from './components/ProfileImage';
import Trending from './components/Trending';
import './globals.css';

export const metadata = {
  title: 'my ai blog',
  description: 'a blog about ai tech',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-[#04060D]'>
      {/* <body className="bg-gray-900"> */}
      <body className='text-gray-100 '>
        <div className='body-header'>
          <Navbar />
          {/* <ProfileImage /> */}
          <Hero />
          <Trending />
        </div>
        {/* all the children of app directory  */}
        {children}
        <Footer />
      </body>
    </html>
  )
}
