import React from 'react';
import './Skills.css';

// Replace these paths with your own icons in /assets/
import reactIcon from '../assets/react.svg';
import jsIcon from '../assets/js.png';
import nodeIcon from '../assets/nodejs.png';
import pythonIcon from '../assets/python.png';
import dbIcon from '../assets/mongodb.png';
import htmlIcon from '../assets/html-5.png';
import cssIcon from "../assets/css-3.png";
import mlIcon from "../assets/ml.png";
import sqlIcon from "../assets/mysql.png";
import dsa from "../assets/DSA.png";
import githubIcon from "../assets/github.png";
import javaIcon from '../assets/java.png';
import vscodeIcon from '../assets/vscode.png';

const skills = [
  { name: 'HTML', icon: htmlIcon },
  { name: 'CSS', icon: cssIcon },
  { name: 'ReactJS', icon: reactIcon },
  { name: 'JavaScript', icon: jsIcon },
  { name: 'Node.js', icon: nodeIcon },
  { name: 'Python', icon: pythonIcon },
  { name: 'MongoDB', icon: dbIcon },
  { name: 'Mysql', icon: sqlIcon },
  { name: 'ML', icon: mlIcon },
  { name: 'DSA', icon: dsa },
  { name: 'Github', icon: githubIcon },
  { name: 'Java', icon: javaIcon },
  { name: 'Vscode', icon: vscodeIcon },
  
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-heading">Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

