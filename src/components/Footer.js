import "./Footer.css";
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
const Footer = () => {
    return (
        <div className = "footer">
            <div className = "footer-container">
                <div className = "left">
                    <div className = "location">
                        <FaHome size = {20} style = {{color :"#fff" , marginRight : "2rem"}}/>
                        <div>
                            <p>MM Hall , AMU</p>
                        </div>
                    </div> 
                    <div className = "phone">
                    <h4>
                    <FaPhone size = {20} style = {{color :"#fff" , marginRight : "2rem"}} />
                     7294935784
                    </h4>
                    </div>
                    <div className = "email">
                    <h4>
                    <FaMailBulk size = {20} style = {{color :"#fff" , marginRight : "2rem"}} />
                     falam2025@gmail.com
                    </h4>
                    </div>
                </div>
                <div className = "right"> 
                <p>Hey , Recruiter You can connect me in the below social media apps for further details. </p>
                <div className = "social">
                <a
                href="https://github.com/Faizan1264"
                style={{ color: "white" , margin : "20px" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaGithub  size = {20}/>
              </a>
                        
                        
                <a
                href="https://www.linkedin.com/in/md-faizan-alam-2b3a88215/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedin size = {20} />
              </a>
                        
                    </div> 
                </div>
            </div>

        </div>
    )
}
export default Footer