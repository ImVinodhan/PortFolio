import React,{useState} from 'react'
import "./Project.css"
const Project = ({img,title,des,link}) => {
    const [show,setShow] = useState(false);
    return (
        <a className="colorForLink" href={link}>
            <div className="project" 
            onMouseEnter={()=>setShow(true)} 
            onMouseLeave={()=>setShow(false)}
            >
                {show?(
                        <div className="project_des">
                            <h4>{title}</h4>
                            <p>{des}</p>
                        </div>
                    ):(
                    <img src={img} alt="Not Available"></img>
                    )               
                }
            </div>
        </a>
    )
}

export default Project
