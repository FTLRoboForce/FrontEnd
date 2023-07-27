import React from "react";
import './Creator.css';
import sac from './sac.png';
import kahlid from './kahlid.png';
import pennstate from "./pennstate.png";
import oj from "./oj.png";
import fiu from "./fiu.png";
import hassani from "./hassani.png";

export default function Creator() {
  return (
    <section className='Creator-container'>

      <section className="Creator">
        {/* Creator 1 */}
        <div className="Card-container">
          <img className='college-img' src={sac} alt="SAC Image" />
          <img className='avatar' src={kahlid} alt="Khalid Avatar" />
          <p className="creator-name">Khalid Abouelrous</p>
          <p className="creator-major">Computer Science</p>
          <p className="creator-job">Software Engineer</p>
          <a target="_blank" href="https://www.linkedin.com/in/khalidabouelrous/" className="btn btn-linkedin btn-lg">
            <i className="fa fa-linkedin fa-fw"></i> LinkedIn
          </a>
        </div>

        {/* Creator 2 */}
        <div className="Card-container">
          <img className='college-img' src={pennstate} alt="Penn State Image" />
          <img className='avatar' src={oj} alt="Oyindamola Avatar" />
          <p className="creator-name">Oyindamola Akanbi</p>
          <p className="creator-major">Information Science & Technology</p>
          <p className="creator-job">Software Engineer</p>
          <a target="_blank" href="https://www.linkedin.com/in/ojakanbi/" className="btn btn-linkedin btn-lg">
            <i className="fa fa-linkedin fa-fw"></i> LinkedIn
          </a>
        </div>

        {/* Creator 3 */}
        <div className="Card-container">
          <img className='college-img' src={fiu} alt="FIU Image" />
          <img className='avatar' src={hassani} alt="Wissam Avatar" />
          <p className="creator-name">Wissam Hassani</p>
          <p className="creator-major">Computer Science</p>
          <p className="creator-job">Software Engineer</p>
          <a target="_blank" href="https://www.linkedin.com/in/wissam-hassani/" className="btn btn-linkedin btn-lg">
            <i className="fa fa-linkedin fa-fw"></i> LinkedIn
          </a>
        </div>
      </section>
    </section>
  );
}
