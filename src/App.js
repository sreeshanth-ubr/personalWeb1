import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from "./components/about/about"
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Home />}>  </Route>
         <Route path='/about' element={<About/>}> </Route>
    
    </Routes>
  </BrowserRouter>
  )
}

export default App