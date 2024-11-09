
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
const Hero = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row items-center justify-between min-h-screen px-8 md:px-24   md:mt-0 bg-black text-white'>
        <div className='md:w-[50%] md:mb-9 space-y-6 text-center md:text-left leading-tigh '>
          
            <p className='text-4xl md:text-5xl font-bold leading-tight '>
              Hi I'm
            </p>
            <h1 className='text-5xl md:text-[58px] font-extrabold '>
              Muhammad Bilal Raza
            </h1>
            <p className='text-[20px] md:text-[25px]'>
              A passionate Front-End-Developer creating beautiful and functional web experiences.
            </p>
            <ul className='flex justify-center md:justify-start gap-6 mt-6'>
              <li className='text-2xl hover:text-[#f65353]'><Link href={"https://www.linkedin.com/in/bilal-raza-83086025a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}><FaLinkedin/></Link></li>
              <li className='text-2xl hover:text-[#f65353]'><Link href={"https://www.facebook.com/profile.php?id=100027854330341&mibextid=ZbWKwL"}><FaFacebook/></Link></li>
              <li className='text-2xl hover:text-[#f65353]'><Link href={"https://github.com/bilal-raza12"}><FaGithubSquare/></Link></li>
              <li className='text-2xl hover:text-[#f65353]'><Link href={"mailto:ibilalra@gmail.com"}><IoMdMail/></Link></li>

            </ul>

          <Link href={"/"}>
            <button className='bg-[#f65353] hover:bg-[#fd4949] px-6 py-3 mt-4 mb-5'>
              Hire Me
            </button>
          </Link>
        </div>
        <div className='md:w-[50%] flex justify-center md:justify-end mt-8 md:mb-6 md:mt-0'>
            <div className='w-48 h-48 mb-7 md:mb-0 md:w-[250px] md:h-[256px] rounded-full overflow-hidden border-4 md:mr-[150px]'>
                 <Image src={"/images/profilepic.jpeg"} alt="" width={300} height={310} className='md:mr-7  '></Image>
            </div>
        </div>
    </div>
  )
}

export default Hero