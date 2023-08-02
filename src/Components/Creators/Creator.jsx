import React, { useState } from "react";
import "./Creator.css";
import sac from "./sac.png";
import kahlid from "./kahlid.png";
import pennstate from "./pennstate.png";
import oj from "./oj.png";
import fiu from "./fiu.png";
import hassani from "./hassani.png";
import ParticleBackground from "../../ParticleBackground/ParticleBackground";
import { IconCheck, IconBrandLinkedin } from "@tabler/icons-react";

const Card = () => {
  const [activeSection, setActiveSection] = useState("#about");

  const handleButtonClick = (targetSection) => {
    setActiveSection(targetSection);
  };

  return (
    <>

    <ParticleBackground />
    
    <div className="card-container">

   
   
    <div className="card" data-state={activeSection}>
      <div className="card-header">
        <div
          className="card-cover"
          style={{
            backgroundImage:
              "url('https://play-lh.googleusercontent.com/tP1lwh_oLWW3XuX9qBKdKKNIBUNfQ_chTM_1GxuTxhnNb_fXYtMzB4gKBoVJx7RviSk')",
          }}
        ></div>
        <img
          className="card-avatar"
          src="https://media.licdn.com/dms/image/D4E03AQFeh3JOjHO7eQ/profile-displayphoto-shrink_400_400/0/1689808542545?e=1696464000&v=beta&t=sa9cAbUKEHR7mcqLCRGLI6Lp6u86R2VD2rIqEDpv9vM"
          alt="avatar"
        />
        <h1 className="card-fullname">Oyindamola J Akanbi</h1>
        <h2 className="card-jobtitle">Software Engineer</h2>
      </div>
      <div className="card-main">
        <div
          className={`card-section ${
            activeSection === "#about" ? "is-active" : ""
          }`}
          id="about"
        >
          <div className="card-content">
            <div className="card-subtitle">ABOUT</div>
            <p className="card-desc">
              I am a junior at The pennsylvania State University majoring in Information Science and Technology
            </p>
          </div>
          <div className="card-social">
            <a href ="https://www.linkedin.com/in/ojakanbi/" target="_blank">   <i href="www.github.com" class="fa-brands fa-linkedin fa-"></i></a>
            <a id="github" href = "https:www.github.com/ojakanbi" target="_blank"><i class="fa-brands fa-square-github"></i></a>
         
       
      
          </div>
        </div>
        <div
          className={`card-section ${
            activeSection === "#experience" ? "is-active" : ""
          }`}
          id="experience"
        >
          {/* Experience section content here */}
          <div className="card-content">
            <div className="card-subtitle">WORK EXPERIENCE</div>
            <div className="card-timeline">
              <div className="card-item" data-year="2024">
                <div className="card-item-title">
                Returning Software Engineer Intern <span> @ Salesforce</span>
                </div>
                <div className="card-item-desc">
                 
                </div>
              </div>
              <div className="card-item" data-year="2023">
                <div className="card-item-title">
                  Future Tech Launchpad   <span> @ SalesForce</span>
                </div>
                <div className="card-item-desc">
                Full Stack Web Development PERN stack!
                </div>
              </div>
            
             
            </div>
          </div>
        </div>
        <div
          className={`card-section ${
            activeSection === "#contact" ? "is-active" : ""
          }`}
          id="contact"
        >
          {/* Contact section content here */}
          <div className="card-content">
            <div className="card-subtitle">CONTACT</div>
            <div className="card-contact-wrapper">
              <div className="card-contact">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                415 Mission St California City, CA 94105
              </div>
              <div className="card-contact">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 19v-6M12 8c0-2.2 3.6-4 8-4s8 1.8 8 4-3.6 4-8 4-8-1.8-8-4z" />
                </svg>
                oakanbi13@gmail.com
              </div>
              <div className="card-contact">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 2l-10 9L2 2" />
                  <path d="M22 2l-1 6 7 7-9 9 1 6 10-9 9 9 1-6-7-7 9-9z" />
                </svg>
                (267) 709-5092
              </div>
            </div>
          </div>
        </div>
        <div className="card-buttons">
          <button
            onClick={() => handleButtonClick("#about")}
            data-section="#about"
            className={activeSection === "#about" ? "is-active" : ""}
          >
            ABOUT
          </button>
          <button
            onClick={() => handleButtonClick("#experience")}
            data-section="#experience"
            className={activeSection === "#experience" ? "is-active" : ""}
          >
            EXPERIENCE
          </button>
          <button
            onClick={() => handleButtonClick("#contact")}
            data-section="#contact"
            className={activeSection === "#contact" ? "is-active" : ""}
          >
            CONTACT
          </button>
        </div>
      </div>
    </div>

  {/* khalid  */}

    <div className="card" data-state={activeSection}>
    <div className="card-header">
      <div
        className="card-cover"
        style={{
          backgroundImage:
            "url('https://play-lh.googleusercontent.com/tP1lwh_oLWW3XuX9qBKdKKNIBUNfQ_chTM_1GxuTxhnNb_fXYtMzB4gKBoVJx7RviSk')",
        }}
      ></div>  
      <img
        className="card-avatar"
        src="https://media.licdn.com/dms/image/D5603AQFuXePpwAmKTw/profile-displayphoto-shrink_400_400/0/1688008440450?e=1696464000&v=beta&t=C9HQhgOqvWr3Byc-75SN3ozT7jPyA3s9QVUvG38cGcE"
        alt="avatar"
      />
      <h1 className="card-fullname">Khalid Abouelrous</h1>
      <h2 className="card-jobtitle">Software Engineer</h2>
    </div>
    <div className="card-main">
      <div
        className={`card-section ${
          activeSection === "#about" ? "is-active" : ""
        }`}
        id="about"
      >
        <div className="card-content">
          <div className="card-subtitle">ABOUT</div>
          <p className="card-desc">
            I am a Junior  at Sacramento State University majoring in Computer Science
          </p>
        </div>
        <div className="card-social">
        <a href = "https://www.linkedin.com/in/khalidabouelrous/" target="_blank">   <i href="www.github.com" class="fa-brands fa-linkedin fa-"></i></a>
        <a id="github" href = "https:www.github.com/khalidh7" target="_blank"><i class="fa-brands fa-square-github"></i></a>
        </div>
      </div>
      <div
        className={`card-section ${
          activeSection === "#experience" ? "is-active" : ""
        }`}
        id="experience"
      >
        {/* Experience section content here */}
        <div className="card-content">
          <div className="card-subtitle">WORK EXPERIENCE</div>
          <div className="card-timeline">
            <div className="card-item" data-year="2024">
              <div className="card-item-title">
              Returning Software Engineer Intern <span> @ Salesforce</span>
              </div>
              <div className="card-item-desc">
               
              </div>
            </div>
            <div className="card-item" data-year="2023">
              <div className="card-item-title">
                Future Tech Launchpad  <span> @ SalesForce</span>
              </div>
              <div className="card-item-desc">
              Full Stack Web Development PERN stack!
              </div>
            </div>
          
           
          </div>
        </div>
      </div>
      <div
        className={`card-section ${
          activeSection === "#contact" ? "is-active" : ""
        }`}
        id="contact"
      >
        {/* Contact section content here */}
        <div className="card-content">
          <div className="card-subtitle">CONTACT</div>
          <div className="card-contact-wrapper">
            <div className="card-contact">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              415 Mission St California City, CA 94105
            </div>
            <div className="card-contact">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 19v-6M12 8c0-2.2 3.6-4 8-4s8 1.8 8 4-3.6 4-8 4-8-1.8-8-4z" />
              </svg>
              kabouelrous@gmail.com
            </div>
            <div className="card-contact">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 2l-10 9L2 2" />
                <path d="M22 2l-1 6 7 7-9 9 1 6 10-9 9 9 1-6-7-7 9-9z" />
              </svg>
              (267) 709-5092
            </div>
          </div>
        </div>
      </div>
      <div className="card-buttons">
        <button
          onClick={() => handleButtonClick("#about")}
          data-section="#about"
          className={activeSection === "#about" ? "is-active" : ""}
        >
          ABOUT
        </button>
        <button
          onClick={() => handleButtonClick("#experience")}
          data-section="#experience"
          className={activeSection === "#experience" ? "is-active" : ""}
        >
          EXPERIENCE
        </button>
        <button
          onClick={() => handleButtonClick("#contact")}
          data-section="#contact"
          className={activeSection === "#contact" ? "is-active" : ""}
        >
          CONTACT
        </button>
      </div>
    </div>
  </div>


  {/* hassani */}

  <div className="card" data-state={activeSection}>
  <div className="card-header">
    <div
      className="card-cover"
      style={{
        backgroundImage:
          "url('https://play-lh.googleusercontent.com/tP1lwh_oLWW3XuX9qBKdKKNIBUNfQ_chTM_1GxuTxhnNb_fXYtMzB4gKBoVJx7RviSk')",
      }}
    ></div>
    <img
      className="card-avatar"
      src="https://media.licdn.com/dms/image/C5603AQEDePpp2IJ6DQ/profile-displayphoto-shrink_400_400/0/1630001125401?e=1696464000&v=beta&t=SrmNuA8deBFa3pGNCgWiqBV-jew9wApJ08pWaDsJ4iQ"
      alt="avatar"
    />
    <h1 className="card-fullname">Wissam Hassani</h1>
    <h2 className="card-jobtitle">Software Engineer</h2>
  </div>
  <div className="card-main">
    <div
      className={`card-section ${
        activeSection === "#about" ? "is-active" : ""
      }`}
      id="about"
    >
      <div className="card-content">
        <div className="card-subtitle">ABOUT</div>
        <p className="card-desc">
          I am a senior at Florida International University majoring in Computer Science. 
        </p>
      </div>
      <div className="card-social">
      <a href ="https://www.linkedin.com/in/wissam-hassani/" target="_blank">   <i href="www.github.com" class="fa-brands fa-linkedin fa-"></i></a>
      <a id="github" href = "https:www.github.com/khalidh7" target="_blank"><i class="fa-brands fa-square-github"></i></a>
      </div>
    </div>
    <div
      className={`card-section ${
        activeSection === "#experience" ? "is-active" : ""
      }`}
      id="experience"
    >
      {/* Experience section content here */}
      <div className="card-content">
        <div className="card-subtitle">WORK EXPERIENCE</div>
        <div className="card-timeline">
          <div className="card-item" data-year="2024">
            <div className="card-item-title">
            Returning Software Engineer Intern <span> @ Salesforce</span>
            </div>
            <div className="card-item-desc">
             
            </div>
          </div>
          <div className="card-item" data-year="2023">
            <div className="card-item-title">
              Future Tech Launchpad   <span> @ SalesForce</span>
            </div>
            <div className="card-item-desc">
            Full Stack Web Development PERN stack!
            </div>
          </div>
        
         
        </div>
      </div>
    </div>
    <div
      className={`card-section ${
        activeSection === "#contact" ? "is-active" : ""
      }`}
      id="contact"
    >
      {/* Contact section content here */}
      <div className="card-content">
        <div className="card-subtitle">CONTACT</div>
        <div className="card-contact-wrapper">
          <div className="card-contact">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            415 Mission St California City, CA 94105
          </div>
          <div className="card-contact">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 19v-6M12 8c0-2.2 3.6-4 8-4s8 1.8 8 4-3.6 4-8 4-8-1.8-8-4z" />
            </svg>
            wissamhassani15@gmail.com
          </div>
          <div className="card-contact">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 2l-10 9L2 2" />
              <path d="M22 2l-1 6 7 7-9 9 1 6 10-9 9 9 1-6-7-7 9-9z" />
            </svg>
            (267) 709-5092
          </div>
        </div>
      </div>
    </div>
    <div className="card-buttons">
      <button
        onClick={() => handleButtonClick("#about")}
        data-section="#about"
        className={activeSection === "#about" ? "is-active" : ""}
      >
        ABOUT
      </button>
      <button
        onClick={() => handleButtonClick("#experience")}
        data-section="#experience"
        className={activeSection === "#experience" ? "is-active" : ""}
      >
        EXPERIENCE
      </button>
      <button
        onClick={() => handleButtonClick("#contact")}
        data-section="#contact"
        className={activeSection === "#contact" ? "is-active" : ""}
      >
        CONTACT
      </button>
    </div>
  </div>
</div>
</div>

</>


  
  );
};

export default Card;
