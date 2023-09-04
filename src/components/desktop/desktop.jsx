import React, { useRef, useEffect, useState } from 'react'
import "./desktop.css"
import { DraggableCore } from 'react-draggable'

//import { useNavigate } from 'react-router-dom';

const Desktop = (props) => {
  const nodeRef1 = useRef(null); // Unique nodeRef for the first folder
  const nodeRef2 = useRef(null); // Unique nodeRef for the second folder
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
   const handleCallAbout =()=>{
    props.handleAbout(true); 
   }
   const handleCallback =()=>{
    props.handleWork(true);
   }
   

  return (
    <div>
      <div className="folders">
        {isMounted && (
          <DraggableCore nodeRef={nodeRef1} allowAnyClick={true}>
            <div className="file" ref={nodeRef1} onClick={handleCallAbout}>
              <i className="bx bxs-folder"></i>
              <i className="bx bxs-folder-open"></i>
              <p>About</p>
            </div>
          </DraggableCore>
        )}
        {isMounted && (
          <DraggableCore nodeRef={nodeRef2}>
            <div className="file" ref={nodeRef2}  onClick={handleCallback} >
              <i className="bx bxs-folder"></i>
              <i className="bx bxs-folder-open"></i>
              <p>Works</p>
            </div>
          </DraggableCore>
        )}
         {isMounted && (
          <DraggableCore nodeRef={nodeRef2}>
            <div className="file" ref={nodeRef2}  onClick={handleCallback} >
              <i className="bx bxs-folder"></i>
              <i className="bx bxs-folder-open"></i>
              <p>Works</p>
            </div>
          </DraggableCore>
        )}
         {isMounted && (
          <DraggableCore nodeRef={nodeRef2}>
            <div className="file" ref={nodeRef2}  onClick={handleCallback} >
              <i className='bx bxs-file-pdf'></i>
              <p>CV</p>
            </div>
          </DraggableCore>
        )}
      </div>
    </div>
    
  )
}

export default Desktop
