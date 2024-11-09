
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const project= [
    {
     title: 'Dynamic Resume Builder',
     description:"A responsive application that allows user to build their resume.",
     technologies: ['HTML','CSS','Typescript'],
     image: '/images/dynamicresume.jpeg', 
     link:"https://shareable-resume-builder-omega.vercel.app/",
    },
    {
        title: 'Random Joke Genrator',
        description:"An application to freshen and lighten the mood of the user by generating hilarious and funny jokes.",
        technologies: ['Next.js','React','Tailwind CSS','Typescript'],
        image: '/images/rjg.jpeg', 
        link:"https://shareable-resume-builder-omega.vercel.app/",
       },
       {
        title: 'Coffee Bliss: Coffee shop',
        description:"A coffe shop website where user can order the coffeee of their choice .",
        technologies: ['HTML','CSS','Javascript'],
        image: '/images/coffeebliss.jpeg', 
        link:"https://shareable-resume-builder-omega.vercel.app/",
       },
      
]
const Projects = () => {
  return (
    <div className=' py-16 px-8'>
        <h2 className='text-4xl font-extrabold text-center mb-12'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                project.map((p) => (
                    <div key={p.title} className=' rounded-lg shadow-lg overflow-hidden transition hover:scale-90 duration-300 p-4 bg-black text-white hover:bg-white hover:text-black'>
                       <div className='w-full h-[240px]'>
                           <Image src={p.image} alt={p.title} className='rounded-lg object-cover h-full w-full' width={600} height={240} ></Image>
                       </div>                       
                       <div className='p-2'>
                         <h2 className='text-2xl font-bold mb-2 text-[#e23737]'>
                            {p.title}
                         </h2>
                         <p className='mb-4'>
                              {p.description}
                         </p>
                         <p className='mb-4'>
                            <span className='text-[#e23737]'>Technologies:</span>{p.technologies.join(', ')}
                         </p>
                         <Link href={p.link} className='font-semibold text-[#e23737] hover:underline cursor-pointer'>View Project</Link>

                       </div>
                    </div>
                ))
            }

        </div>
    </div>
  )
}

export default Projects