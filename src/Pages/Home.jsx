import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Home.css';
import SampleImage from '../assets/about.png';
import githubIcon from '../assets/github.png';
import Linkdin from '../assets/Linkdin.png'
import Hackerrank from '../assets/Hrank.png'
import Leetcode from '../assets/Lcode.png'
const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-container">
        
        {/* Left Side: Text */}
        <div className="home-text">
          <h1>HELLO, IT'S ME<br></br> <span className="highlight">G Sreeja</span></h1>
          <h2>
            I'm a Engineering Student who is<br></br> passionate{' '}
            <span className="typewriter">
              <Typewriter
                words={['Frontend Development', 'Software Development', 'Machine Learning', 'Web Development']}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
          <div className='icon'>
            <a href='https://github.com/G-SreejaReddy'><img src={githubIcon} className='icon_img'/></a>
            <a href='https://www.linkedin.com/in/sreeja-reddy-52316b247/'><img src={Linkdin} className='icon_img'/></a>
            <a href='https://www.hackerrank.com/profile/sreejareddi2402'><img src={Hackerrank} className='icon_img'/></a>
            <a href='https://leetcode.com/u/SreejaReddy02/'><img src={Leetcode} className='icon_img'/></a>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="home-image">
          <img src={SampleImage} alt="Profile" />
        </div>

      </div>
    </section>
  );
};

export default Home;

