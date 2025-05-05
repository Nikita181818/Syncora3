import React from 'react';// Assuming you have some CSS for the navbar

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="brand-name">Syncora</div>
      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#cta">Call to Action</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
