
   
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "../components/about";
import Projects from "../components/project";
import Contact from "../components/contact"; 
import Footer from "@/components/footer";

export default function Home() {
  return (

    <div className="w-full">
      <Navbar />
      <Hero />
      <div id="about">

      <About />
      </div>
      <div id="project">

      <Projects />
      </div>
      <div id="contact">

      <Contact />  
      </div>
      

      <Footer />    
      
    </div>   
  );
}
