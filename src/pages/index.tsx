import subhamImage from '../assets/hero.jpeg';
import '../styles/index.css'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaFacebookSquare, FaNodeJs,FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";


const index = () => {
  return (

    <div className="container">
      <div className="navbar">
        <div className="logo">
          <span className="logo-name">Subham</span>
        </div>
        <div className="navigation">
        <ul>
          <li><a href="">Service</a></li>
          <li><a href="">Work</a></li>
          <li><a href="">Resume</a></li>
          <li><a href="">Skills</a></li>
          <li><a href="">Testimonials</a></li>
          <li><a href="">Contact</a></li>
          <button className="hire-me">hire me</button>
        </ul>
        </div>
      </div>
      <div className="info-container">
        <div className="info">
          <div className="left">
            <span className='work-progress'>Available Only in Desktop View .Working On Mobile View.....</span>
            <span className="subham">I am Subham Joshi</span>
            <span className="web">Software Engineer</span>
            <span className="ux">Full Stack Developer</span>
            <p className="para">
              I break down complex user experinece problems to
              <br/> 
              create integritiy
              focussed solutions that connect <br/>billions of people
            </p>
            <div className="link">
              <button className="cv">Download CV</button>
                <CiLinkedin className='linkedin'/>     
              <FaGithub className='github'/>
              <FaFacebookSquare className='facebook'/>
            </div>
            <div className="skill">
                 <div className="node">
                <FaNodeJs className='FaNodeJs'/>
                <span className='node-percent'>80%</span>
                <span className='nodeName'>Nodejs</span>
                </div>
                <div className="node">
                <RiJavascriptFill className='RiJavascriptFill'/>
                <span className='node-percent'>90%</span>
                <span className='nodeName'>Javascript</span>
                </div>
                <div className="node">
                <SiMongodb className='SiMongodb'/>
                <span className='node-percent'>70%</span>
                <span className='nodeName'>MongoDB</span>
                </div>
                <div className="node">
                <FaReact className='react'/>
                <span className='node-percent'>50%</span>
                <span className='nodeName'>React</span>
                </div>
            </div>
          </div>
          <div className="right">
            <img src={subhamImage} alt="" />
          </div>
        </div>
      </div>

    </div>

  )
}

export default index