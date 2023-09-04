import React, { useState } from 'react';
import logo from "../asset/logo.png";
import './page.css';
import Footer from '../components/footer/footer';
import Desktop from '../components/desktop/desktop';
import Work from '../components/Work/Work';
import{FullScreen,useFullScreenHandle} from "react-full-screen"
import About from '../components/about/about';
import Call from '../components/Call/Call';
const Home = () => {
   const handle= useFullScreenHandle();
   const [screen,setScreen] =useState(false);
   const [about,setAbout] =useState(false);
   const [work,setWork] =useState(false);
      const handleFullscreen =() =>{
        setScreen(true) 
      }

      const handleAbout=(about)=>{
        setAbout(about);
      }
      const handleWork=(work)=>{
        setWork(work);
      }
   
   
   console.log(about,work)
    return (
        <FullScreen handle={handle}>

            <div className="container">
             

                <div className="logo"  >
                    <img className="img" src={logo} alt="" />
                </div  >
                <div className="wraper">
                {screen ===false &&<div className="welcom">
                   <h1 >Wellcome</h1>
                   <div className="btn" onClick={handleFullscreen}>
                   <button onClick={handle.enter}>start</button>
                   </div>
               </div>}
                <Desktop className="fol" handleAbout={handleAbout} handleWork={handleWork}/>
                <Footer className="foo"/>
                {about===true&&<About handleAbout={handleAbout}/>}
                {work===true &&<Work handleWork={handleWork}/>}
                <Call/>
                </div>
            </div>
        </FullScreen>
    )
}

export default Home