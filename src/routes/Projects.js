import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImage2 from "../components/HeroImage2";
import Work from "../components/Work";
const Projects = () => {
    return (
        <div>
           <Navbar/>
           <HeroImage2 heading = "PROJECTS." text = "Some of my most recent works are "/>
           <Work/>
           <Footer/>
             </div>
    )
}
export default Projects