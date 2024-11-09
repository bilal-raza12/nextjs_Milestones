import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='py-12 px-8 md:px-24'>
      <div className='w-full mx-auto flex flex-col md:flex-row items-center gap-12'>
        <div className='w-full md:w-[50%]'>
            <Image src="/images/aboutpic.jpeg" alt=""
            width={500} height={500} className='rounded-lg shadow-lg w-full h-auto object-cover'/>
        </div>
        <div className='w-full'>
          <h1 className='text-4xl font-bold pl-10 md:pl-0 mb-4'>
            About Me
          </h1>
          <p className='text-[20px] leading-relaxed'>
            Hi! I am <span className="text-[#f65353] font-semibold">Muhammad Bilal Raza</span> a Front End Developer who loves bilding userfriedly and responsive websites.I work with modern tools like React, Nextjs and Tailwind CSS to turn ideas into functional use functional and interactive web pages. I also have agood command on buildingan interactive UI. 
            <p className='text-[20px] leading-relaxed mt-2'>
              My goal is to ceate web experience that are not good looking but also easy to use. I am always learning new techniques to imprive my skills and deliver the best result that meets the dsired requirements.
              </p>
              <p className='text-[20px] leadning-relaxed mt-2'>
                Lets work together to build a great websites and have godd expereince with UI/UX!
              </p>
          </p>
        </div>

      </div>
    </div>
  )
}

export default About