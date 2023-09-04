import React from 'react'
import "./about.css"
import profile from "../../asset/profile.jpg"
import Draggable  from 'react-draggable'
const About = (props) => {
    return (
       
         <Draggable>
            <div className="a-container">
                 <i className='bx bx-x' onClick={()=>props.handleAbout(false)}></i>
                 <i className='bx bx-square' ></i>
                 <i className='bx bx-minus' ></i>
                 
                <div className="a-wraper">
                    <h1>Most Wanted</h1>
                    <div className="img">
                        <img src={profile} alt="" />
                    </div>
                    <div className="detail">
                        <h2>Bio-data</h2>
                        <h3><b>Name :</b> SREESHANTH T </h3>
                        <h3><b>Age :</b>  19 </h3>
                        <h3><b>Email :</b> sreeshanthubr999@gmail.com</h3>
                        <h3><b>fav-lang:</b>  React</h3>
                        <h3><b>Exp :</b>  2 year </h3>
                        <h3><b>STATE:</b>  KERALA </h3>
                    </div>
                </div>
            </div>
        </Draggable>
    
    )
}

export default About