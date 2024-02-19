import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Hero = () => {
  const [animationFinished, setAnimationFinished] = useState(false);

  useEffect(() => {
   
    const timeout = setTimeout(() => {
      setAnimationFinished(true);
    }, 500); 

    return () => clearTimeout(timeout); 
  }, []);

  return (
    <div className={`hero ${animationFinished ? 'animation-finished' : ''}`}>
      <div className={`hero-text-left ${animationFinished ? 'fade-in-left' : ''}`}>
        <h1>I am <span>Luka</span></h1>
        <p>Frontend developer and <br /> Web designer </p>
        <button><Link className='hire-link' to={'mailto:lukaposlovni23@gmail.com'}>Hire me</Link></button>
      </div>
      <div className={`hero-img-right ${animationFinished ? 'fade-in-right' : ''}`}>
        <img src="../public/images/portfolio-hero-img.svg" alt="anime ai image" />
      </div>
    </div>
  );
};

export default Hero;