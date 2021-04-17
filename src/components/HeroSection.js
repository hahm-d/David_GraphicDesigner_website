import React from 'react';
import '../App.css';
import './HeroSection.css';

const imagePath = "images/img-home.jpeg";

function HeroSection() {
  return (
    <div className='hero-container' style={{
      backgroundImage: `url(${imagePath})`
    }}>
      <h1>DAVID KIM</h1>
      <p>Senior Graphic Packaging Designer</p>
      <div className='hero-btns'>
      </div>
    </div>
  );
}

export default HeroSection;