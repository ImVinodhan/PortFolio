import React from 'react';
import {Element} from "react-scroll";
import skillls from "./skillls.jpg"
import "./Skillcontent.css";
import LinearProgress from '@material-ui/core/LinearProgress';

const Skillcontent = () => {
    return (
        <Element className="Skill skill2" id="SC">

            <div className="Skill_image">
             <img src={skillls} alt="Not Available"></img>
            </div>
            <div className="Skill_text">
               {/* <h2>SKILLSET</h2>  */}
              <div className="Skill1">
                 <h5>HTML</h5>
                 <div className="Skill_slide1 Skillbgcolor">
                 <LinearProgress variant='determinate' value={98}></LinearProgress> 
                 </div>
              </div>
              <div className="Skill1">
                 <h5>CSS</h5>
                 <div className="Skill_slide2 Skillbgcolor">
                 <LinearProgress  variant="determinate" value={90}></LinearProgress>
                 </div>
              </div>
              <div className="Skill1">
                 <h5>BOOTSTRAP</h5>
                 <div className="Skill_slide3 Skillbgcolor">
                 <LinearProgress variant="determinate"  value={85}></LinearProgress>
                 </div>
              </div>
              <div className="Skill1">
                 <h5>JAVASCRIPT</h5>
                 <div className="Skill_slide4 Skillbgcolor">
                 <LinearProgress variant="determinate" value={60}></LinearProgress>
                 </div>
              </div>
              <div className="Skill1">
                 <h5>REACT JS</h5>
                 <div className="Skill_slide5 Skillbgcolor">
                 <LinearProgress variant="determinate" value={80}></LinearProgress>
                 </div>
              </div>
              <div className="Skill1">
                 <h5>NODE JS</h5>
                 <div className="Skill_slide6 Skillbgcolor">
                 <LinearProgress variant="determinate" value={20}></LinearProgress>
                 </div>
              </div>
            </div>
            </Element>
            
    )
}

export default Skillcontent;