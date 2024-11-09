import React from 'react'

const Contact = () => {
  return (
    <div className='py-16 px-8 md:px-20'>
        <h2 className='text-[32px] font-extrabold mb-12 text-center '>
           Contact me
        </h2>
        <form action="" className='bg-white p-4 rounded-lg' >
            <div>
                <label htmlFor="name" className='block font-medium mb-2'>Name:</label>
                <input type="text" id='name' className='w-full border border-black rounded-lg p-3 focus:outline-none mb-4 ' placeholder=' Enter Your Name' required/>
            </div>
            <div>
                <label htmlFor="email" className='block font-medium mb-2'>Email:</label>
                <input type="email" id='email' className='w-full border border-black rounded-lg p-3 focus:outline-none mb-4' placeholder=' Enter Your Email Address' required/>
            </div>
            <div>
                <label htmlFor="message" className='block font-medium mb-2'>Message:</label>
                <textarea  id='message' className='w-full border border-black rounded-lg p-3 focus:outline-none mb-4' placeholder='Write Your Message' rows={6} cols={30} required/>
            </div>
            <div>
                <button className='bg-[#f65353] text-white py-4 px-5 rounded-lg mx-auto mb-2'>Send Message</button>
            </div>
        </form>
    </div>
  )
}

export default Contact