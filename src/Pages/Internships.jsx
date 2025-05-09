import React from 'react';
import './Internships.css';

const internships = [
  {
    company: 'InternDev Pvt Ltd',
    role: 'AI & Machine Learning Intern',
    duration: ' Nov 18, 2024 – Feb  18, 2025',
    description:
      'Focused on hands-on learning and gaining deeper understanding of AI/ML through real-time projects like stock price prediction and facial emotion detection.',
    skills: 'Artificial Intelligence, Machine Learning',
    certificate: 'https://drive.google.com/file/d/1GdMRBXtczqQNMCtNCHexy02m9IsrQLoh/view?usp=drive_link',
  },
  {
    company: 'Prodigy Info Tech',
    role: 'Web Development Intern',
    duration: 'May 15, 2024 – June 15, 2024',
    description:
      'Applied web development skills in real-world tasks, gaining valuable experience and improving technical and problem-solving abilities.',
    skills: 'HTML, CSS, JavaScript',
    certificate: 'https://drive.google.com/file/d/181folQ7nEzCMgYfJUFwelcjfM7DhryCk/view?usp=drive_link',
  },
];

const Internships = () => {
  return (
    <section id="internships" className="internships-section">
      <h2 className="internships-heading">Internships</h2>
      <div className="internships-container">
        {internships.map((internship, index) => (
          <div className="internship-card" key={index}>
            <h3>{internship.company}</h3>
            <p><strong>{internship.role}</strong></p>
            <p><strong>Duration:</strong> {internship.duration}</p>
            <p>{internship.description}</p>
            <p><strong>Skills:</strong> {internship.skills}</p>
            <a href={internship.certificate} target="_blank" rel="noopener noreferrer">
              <button className="certificate-btn">View Certificate</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Internships;


