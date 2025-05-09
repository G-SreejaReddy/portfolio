import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (Form submission logic to be implemented)');
    // Add your backend/API integration here
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>

      <div className="contact-content">
        {/* Contact Info */}
        <div className="contact-info">
          <p><strong>Email:</strong> sreejareddi2402@gmail.com</p>
          <p><strong>Phone:</strong> +91 7801076295</p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/sreejareddy2402/?trk=PROFILE_DROP_DOWN" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

