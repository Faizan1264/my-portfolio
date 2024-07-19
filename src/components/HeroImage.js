import './HeroImage.css';
import {Link} from "react-router-dom";
const HeroImage = () => {
    return(
        <div className = "hero">
            <div className = "mask">
            <img className='intro-img'
            src = "https://images.unsplash.com/photo-1606530095145-185c1cfd3363?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
             alt = "IntroImg"/>
             </div>
            <div className = "content">
                <p>HI, I'M A FULLSTACK DEVELOPER</p>
           <div> 
            <Link to = "/projects" className = "btn">Projects</Link>
            <Link to = "/contact" className='btn btn-light'>Contact</Link>
            </div>
          </div>
        </div>
    )
}

export default HeroImage