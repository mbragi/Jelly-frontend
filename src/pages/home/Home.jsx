import React from 'react';
import NavBar from "../../components/navBar/NavBar";
import intro from "../../assets/intro.mp4";
import "./Home.css";
function Home() {
  return (
    <div>
        <NavBar />
        <video controls autostart autoPlay loop src={intro} type="video/mp4" className='intro' />
    </div>
  )
}

export default Home;