import React from 'react';

const ContactForm = () => {
  return (
    <section id="contact" className="contact-form-section">
      <div className="contact-form-container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="form-description">We’d love to hear from you. Please fill out the form below to get in touch with us.</p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required placeholder="Your Email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="6" required placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="cta-button">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
