import Image from "next/image";
   
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/project";
import Contact from "@/components/contact";  

export default function Home() {
  return (

    <div className="w-full">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />      
    </div>   
  );
}
