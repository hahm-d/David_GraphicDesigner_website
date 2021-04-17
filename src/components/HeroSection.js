import React from 'react';
import '../App.css';
import './HeroSection.css';
import {useSpring, animated} from 'react-spring'

const imagePath = "images/img-home.jpeg";

function HeroSection() {

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { delay: 2000, duration: 2500}
  })

  return (
    <div className='hero-container' style={{
      backgroundImage: `url(${imagePath})`
    }}>
      <animated.h1 style={props}>DAVID KIM</animated.h1>
      <animated.p style={props}>Senior Graphic Packaging Designer</animated.p>
      <div className='hero-btns'>
      </div>
    </div>
  );
}

export default HeroSection;