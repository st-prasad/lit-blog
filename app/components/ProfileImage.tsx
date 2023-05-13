import Image from 'next/image'

const ProfileImage = () => {
    return (
        <section>
            {/* <Image className='border-2 border-gray-500 rounded-[70%] drop-shadow-xl shadow-white' */}
            <Image className='border-2 border-gray-500 rounded-full drop-shadow-xl shadow-white h-[200px] w-[200px] object-cover mx-auto'
                src='/images/myavatar.jpg'
                width={200}
                height={200}
                alt='my profile pic'
                priority={true}>
            </Image>
        </section>
    )
}

export default ProfileImage