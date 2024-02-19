import React, { useState } from 'react';
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { BsFillArrowRightSquareFill } from "react-icons/bs";



const CardSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const skills = [
    { name: 'HTML', img: 'portfolio-html-img' },
    { name: 'CSS', img: 'portfolio-css-img' },
    { name: 'JavaScript', img: 'portfolio-js-img' },
    { name: 'React', img: 'portfolio-react-img' },
    { name: 'Figma', img: 'portfolio-figma-img' },
    { name: 'NPM', img: 'portfolio-npm-img' },
    { name: 'Git', img: 'portfolio-git-img' },
    { name: 'GitHub', img: 'portfolio-github-img' },
    { name: 'SASS', img: 'portfolio-sass-img' },
    { name: 'Tailwind', img: 'portfolio-tailwind-img' },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? skills.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === skills.length - 1 ? 0 : prevIndex + 1));
  };

  return (

    
      <div className="card-slider">
        <h2>Skills</h2>
      <button className="arrow left-arrow" onClick={handlePrev}><BsFillArrowLeftSquareFill /></button>
      <div className="cards">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`card ${index === activeIndex ? 'active' : ''}`}
          >
            <img key={skill.name} src={`../public/images/${skill.img}.svg`} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
      <button className="arrow right-arrow" onClick={handleNext}><BsFillArrowRightSquareFill /></button>
    </div>
   
   


    
  );
};

export default CardSlider;


