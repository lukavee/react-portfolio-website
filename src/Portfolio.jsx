import React from 'react';
import {Link} from 'react-router-dom';

const Portfolio = () => {
  return (
    <div className='portfolio-container'>
      <h2>Portfolio</h2>
      <div className="portfolio-cards-wrapper">
        <div className="portfolio-card">
            <img src="../public/images/portfolio-woofwiki-img.svg" alt="quizerio " />
            <div className="portfolio-card-content">
                <h3>Woof Wiki</h3>
                <p>React API app done in React Vite and SASS</p>
                <Link to="https://woofwiki.netlify.app/" target="_blank" rel="noopener noreferrer"><button className='portfolio-btn' >Live</button></Link>
                <Link to="https://github.com/lukavee/woofwiki" target="_blank" rel="noopener noreferrer"><button className='portfolio-btn'>Github</button></Link>
            </div>
            
        </div>
        <div className="portfolio-card">
            <img src="../public/images/portfolio-quizerio-img.svg" alt="quizerio " />
            <div className="portfolio-card-content">
                <h3>Quizerio</h3>
                <p>Simple quiz app done in vanilla JS and vanilla CSS</p>
                <Link to="https://quizerio.netlify.app/" target="_blank" rel="noopener noreferrer"><button className='portfolio-btn' >Live</button></Link>
                <Link to="https://github.com/lukavee/quizerio" target="_blank" rel="noopener noreferrer"><button className='portfolio-btn'>Github</button></Link>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Portfolio
