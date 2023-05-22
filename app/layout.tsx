import Link from 'next/link'
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
    <html lang="en">
      {/* <body className="bg-gray-900"> */}
      <body>
        <Navbar />
        <ProfileImage />
        <Hero />
        {/* all the children of app directory  */}
        {children}
      </body>
    </html>
  )
}
