
import { FaEnvelope, FaGithub } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className='py-5 bg-black text-white  md:px-20'>
            <div className='w-full mx-auto flex flex-col md:flex-row justify-between items-center'>
                <div className='mb-4 md:mb-0 '>
                    <h2 className='text-[24px] font-semibold text-[#fd4949]'>
                         Muhammad Bilal Raza
                    </h2>
                    <div className='flex item-center gap-4 mt-2'>
                            <Link href={"mailto:ibilalraz@gmail.com"}>
                               <FaEnvelope className='mt-1'/>
                            </Link>
                            <p className='mb-2'>ibilalraz@gmail.com</p>
                    </div>
                    <div className='flex item-center gap-4 mt-2'>
                            <Link href={"/"}>
                               <FaPhone className='mt-1'/>
                            </Link>
                            <p className='mb-2'>+92 347177 9991</p>
                    </div>
                    <div className='flex item-center gap-4 mt-2'>
                            <Link href={"/"}>
                               <FaMapMarkerAlt className='mt-1'/>
                            </Link>
                            <p className='mb-2'>House no# 16//15 sheet#17 model colony Karachi, Pakistan</p>
                    </div>
                </div>
                <div className='flex flex-col mb-4'>

                <div className='mb-2 font-bold text-[#fd4949]'>Social Media Handles</div>
                <div className='flex space-x-6 mb-4 md:mb-0'>
                        <Link href={"https://www.linkedin.com/in/bilal-raza-83086025a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} className='hover:text-[#fd4949]'>
                            <FaLinkedin />
                        </Link>
                        <Link href={"https://www.facebook.com/profile.php?id=100027854330341&mibextid=ZbWKwL"} className='hover:text-[#fd4949]'>
                            <FaFacebook />
                        </Link>
                        <Link href={"https://github.com/bilal-raza12"} className='hover:text-[#fd4949]'>
                            <FaGithub />
                        </Link>
                        <Link href={"mailto:ibilalraz@gmail.com"} className='hover:text-[#fd4949]'>
                            <IoMdMail />
                        </Link>
                </div>
                </div>

                <div className='flex  md:flex-col gap-6 mt-7'>
                    <Link href={"/"} className='hover:text-[#fd4949]'>
                    Home
                    </Link>
                    <Link href={"/"} className='hover:text-[#fd4949]'>
                    About
                    </Link>
                    <Link href={"/"} className='hover:text-[#fd4949]'>
                    Projects
                    </Link>
                    <Link href={"/"} className='hover:text-[#fd4949]'>
                    Contact
                    </Link >
                </div>

            </div>
                <div className='mt-6 text-center'>
                    &copy; Muhammad Bilal Raza | All Rights Reserved.
                </div>
    </footer>
  )
}

export default Footer