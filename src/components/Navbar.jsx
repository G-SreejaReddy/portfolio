import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo"><i>G Sreeja</i></h2>
      <ul className="nav-links">
        <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500}>About Me</Link></li>
        <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
        <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
        <li><Link to="internships" smooth={true} duration={500}>Internships</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact Me</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

