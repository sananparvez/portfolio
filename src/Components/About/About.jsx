import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
    return (
        <div id='about' className='about'>

            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                {/* <div className="about-left">
                    <img src={profile_img} alt="" />
                </div> */}
                <div className="about-right">
                    <div className="about-para">
                        <p> I am an Enthusiastic Software Engineer with a B.Tech in Computer Science, skilled in full-stack development,  and problem-solving. </p>
                        <p>Motivated Software Engineering fresher with expertise in full-stack development and machine learning. Passionate about coding and innovation.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>Python & Flask </p><hr style={{ width: "80%" }} /></div>
                        <div className="about-skill"><p>React JS </p><hr style={{ width: "40%" }} /></div>
                        <div className="about-skill"><p>JavaScript </p><hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>Express JS </p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>git & Github </p><hr style={{ width: "90%" }} /></div>
                        <div className="about-skill"><p>Mysql & DBMS</p><hr style={{ width: "80%" }} /></div>
                    </div>
                </div>
            </div>

            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>6</h1>
                    <p>Months of SDE Internship Experience</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>4+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>

            </div>
        </div>
    )
}

export default About