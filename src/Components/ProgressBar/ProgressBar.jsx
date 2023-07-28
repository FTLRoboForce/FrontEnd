import React, { useState, useEffect } from 'react';
import './ProgressBar.css';

export default function ProgressBar({ progressBar, setProgressBar }) {
  const [activeStep, setActiveStep] = useState('learn');

  useEffect(() => {
    // Update the active step based on the prop 'ProgressBar'
    // 'learn', 'quiz', 'conquer'
    setActiveStep(progressBar);
  }, [progressBar, setActiveStep]);

  return (
    <div className='progressBar-container'>
      <div className='progressBar'>
        <form id='msform'>
          <ul id='progressbar'>
            <li className={activeStep === 'learn' ? 'active' : ''}>Learn</li>
            <li className={activeStep === 'quiz' ? 'active' : ''}>Quiz</li>
            <li className={activeStep === 'conquer' ? 'active' : ''}>Conquer</li>
          </ul>
          <div className="progress-line-container">
            <div className={`progress-line ${activeStep}`} />
          </div>
        </form>

       
      </div>
    </div>
  );
}
