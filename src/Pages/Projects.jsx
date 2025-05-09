import React from 'react';
import './Projects.css';

import FED from '../assets/Project2.png';
import leafImg from '../assets/project1.png';
import Game from '../assets/Project3.png';

const projects = [
  {
    title: 'Face Emotion Detection',
    description: 'Built a deep learning model using TensorFlow to classify facial emotions (happiness, sadness, anger, surprise) in real-time using OpenCV. Trained the model on a dataset of facial images.',
    image: FED,
    github: 'https://github.com/G-SreejaReddy/FACE_EMOTION_DETECTION',
    skills: ['TensorFlow', 'Keras', 'OpenCV', 'Python'],
  },
  {
    title: 'Plant Leaf Disease Detection',
    description: 'Developed a project using image processing and machine learning to detect plant leaf diseases, enabling early diagnosis and improving accuracy over traditional methods.',
    image: leafImg,
    github: 'https://github.com/G-SreejaReddy/Plant-Leaf-Disease-Detection',
    skills: ['Python', 'OpenCV', 'Machine Learning', 'Image Processing'],
  },
  {
    title: 'Tic-Tac-Toe Game',
    description: 'The game allows two players to play alternately with real-time updates and a win/draw detection system. Implemented logic for move validation, game state management, and winner calculation.',
    image: Game,
    github: 'https://github.com/G-SreejaReddy/Tic-Tac-Toe-Game',
    skills: ['HTML', 'CSS', 'JavaScript'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <p className="project-skills"><strong>Skills Used:</strong> {project.skills.join(', ')}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <button className="github-btn">View on GitHub</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

