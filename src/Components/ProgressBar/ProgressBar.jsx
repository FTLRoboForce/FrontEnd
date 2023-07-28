import React, { useState, useEffect } from 'react';
import './ProgressBar.css';

const steps = ['learn', 'quiz', 'conquer'];

export default function ProgressBar({ progressBar, setProgressBar }) {
  const [activeStep, setActiveStep] = useState('learn');

  useEffect(() => {
    setActiveStep(progressBar);
  }, [progressBar, setActiveStep]);

  const calculateProgressWidth = () => {
    const stepIndex = steps.indexOf(activeStep);
    const widthPercentage = (stepIndex + 1) * (100 / steps.length);
    return `${widthPercentage}%`;
  };

  return (
    <div className='progressBar-container'>
      <div className='progressBar'>
        <ul id='progressbar'>
          {steps.map((step) => (
            <li key={step} className={activeStep === step ? 'active' : ''}>
              {step.charAt(0).toUpperCase() + step.slice(1)}
            </li>
          ))}
        </ul>
        <div className="progress-line-container">
          <div className="progress-line" style={{ width: calculateProgressWidth() }} />
        </div>
      </div>
    </div>
  );
}
