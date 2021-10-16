import React from 'react'
import { Element } from 'react-scroll'
import Project from '../Project/Project'
import "./Projectcontent.css"

const Projectcontent = () => {

    const projectDetails=[
        {
            img:"https://images.hdqwalls.com/wallpapers/instagram-4k-vf.jpg",
            title:"Instagram",
            des:"WhatsApp Messenger, or simply WhatsApp, is an American freeware, cross-platform centralized messaging and voice-over-IP service owned by Facebook, Inc",
            link:"https://www.whatsapp.com/"
        },
        {
            img:"https://wallpaperaccess.com/full/2547005.jpg",
            title:"Facebook",
            des:"Facebook, Inc., is an American multinational conglomerate based in Menlo Park, California. It was founded by Mark Zuckerberg",
            link:"https://www.facebook.com/"
        },
        {
            img:"https://wallpaperaccess.com/full/2403655.jpg",
            title:"Snapchat",
            des:"Snapchat is an American multimedia messaging app developed by Snap Inc., originally Snapchat Inc.",
            link:"snapchat.com"
        },
        {
            img:"https://cdn.mos.cms.futurecdn.net/K5G6dxuW2gnjknKyCTAXXP.jpg",
            title:"TikTok",
            des:"Facebook, Inc., is an American multinational conglomerate based in Menlo Park, California. It was founded by Mark Zuckerberg",
            link:"tiktok.com"
        },
        {
            img:"https://wallpaperaccess.com/full/4719129.png",
            title:"Twitter",
            des:"Facebook, Inc., is an American multinational conglomerate based in Menlo Park, California. It was founded by Mark Zuckerberg",
            link:"twitter.com"
        },
        {
            img:"https://wallpapercave.com/wp/wp7702503.jpg",
            title:"Telegram",
            des:"is an American multinational conglomerate based in Menlo Park, California. It was founded by Mark Zuckerberg",
            link:"www.google.com"
        }
    ]
    return (
        <Element className="project_head" id="project">
            <h1>Project</h1>
            <div className="project_body">
{projectDetails.map((project,index)=>{
        return(
            <Project 
            key={index} 
            img={project.img} 
            title={project.title} 
            des={project.des} 
            link={project.link}
            />
        );
    })
}
            </div>            
        </Element>
    )
}

export default Projectcontent; 