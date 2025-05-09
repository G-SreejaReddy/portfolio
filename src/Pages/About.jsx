import React from 'react';
import './About.css'; // Make sure to create this CSS file
import profileImg from '../assets/photo.png'; // Replace with your actual image path
//import resumePDF from '../assets/resume.pdf';   // Replace with your actual resume path

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <div className="about-container">
        <div className="about-left">
          <img src={profileImg} alt="Profile" className="about-image" />
          <a href="https://drive.google.com/file/d/1PX06RWJuxhDWTfp3fST1hk7LsL2gS4pk/view?usp=drive_link" >
            <button className="resume-btn">View Resume</button>
          </a>
        </div>
        <div className="about-right">
          <p>
            I am an enthusiastic and driven individual with a strong foundation in Python, JavaScript, React.js, HTML, CSS, SQL, and Data Structures and Algorithms (DSA), I also have hands-on
            experience with Machine Learning.
            <br />
            I am passionate about building user-focused applications, exploring new technologies, and continuously upgrading my technical skillset.
            With strong communication and collaboration abilities, I strive to contribute meaningfully to any team I work with.
            My goal is to grow as a software professional while delivering high-quality solutions that make a real impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

