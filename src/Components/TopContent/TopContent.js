import React from 'react';
import {Link} from "react-scroll";
import "./TopContent.css";

 const TopContent = () => {
    return (
        <div className="topcontent">
            <div className="topcontent_details">
                <h1>G.Vinodhan</h1>
                <p>A Professional Web Developer</p>
                <a href="/">
                    <button className="downbtn">Download CV</button>
                </a>
                <Link to="projects" smooth={true} duration={500}>
                    <button className="workbtn">My Work</button>
                </Link>
            </div>
        </div>
    )
}
export default TopContent;