import React from "react";
import {Link} from "react-scroll";


const Header=()=>{
    return(
         <div className="header">
           <div className="header_left">
               <h1>
                De<span>v</span>eloper
               </h1>
           </div>
           <div className="header_right">
               <Link to="about" smooth={true} duration={600}>
                   <h4>
                       About Me
                   </h4> 
               </Link>
               <Link to="SC" smooth={true} duration={600}>
                   <h4>
                       Skills
                   </h4> 
               </Link>
               <Link to="project" smooth={true} duration={600}>
                   <h4>
                       Projects
                   </h4> 
               </Link>
               <Link to="exp" smooth={true} duration={600}>
                   <h4>
                       Experience
                   </h4> 
               </Link>
               <Link to="cont" smooth={true} duration={600}>
                   <h4>
                       Contact
                   </h4> 
               </Link>
               <h4 className="join">Join With Me</h4>
           </div>
         </div>
    );
}


export default Header;