import React from 'react'
import './Hero.css'
// import profile_img from '../../assets/profile_img.svg'
// import AnchorLink from 'react-anchor-link-smooth-scroll'

function Hero() {
    return (
        <div id='home' className='hero'>
            {/* <img src={profile_img} alt="" /> */}
            <h1><span>I am Sanan Parvez</span>, Computer Science Engineer</h1>
            <p>A dedicated and proficient Software Engineer with a B.Tech in Computer Science Engineering  from Kashmir University. Proven experience in full-stack development, AI integration, and software project management. Adept at leveraging a variety of programming languages and tools to deliver robust and scalable solutions. Passionate about continuous learning and applying innovative technologies to solve complex problems.</p>
            {/* <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me </AnchorLink></div>
                <div className="hero-resume">My resume</div>
            </div> */}

        </div>
    )
}

export default Hero