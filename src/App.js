import React from "react";
import Header from "./Components/Header";
import "./Components/header.css";
import TopContainer from "./Components/TopContentainer/TopContainer";
import Skillcontent from "./Components/Skillcontent/Skillcontent";
import Projectcontent from "./Components/Projectcontent/Projectcontent";
const App =()=>{
  return(
    <div>
      <Header/>
      <TopContainer/>
      <Skillcontent/>
      <Projectcontent/> 
    </div>
  )
}


export default App;