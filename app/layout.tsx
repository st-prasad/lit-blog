import Link from 'next/link'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ProfileImage from './components/ProfileImage'
import './globals.css'

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
    <html lang="en" className='bg-gray-900'>
      {/* <body className="bg-gray-900"> */}
      <body className='text-gray-100 '>
        <div className='body-header'>
          <Navbar />
          <ProfileImage />
          <Hero />
        </div>
        {/* all the children of app directory  */}
        {children}
        <Footer />
      </body>
    </html>
  )
}
