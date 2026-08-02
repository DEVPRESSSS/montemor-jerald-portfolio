
import './App.css'
import { Certifications } from './components/Certfications'
import { Home } from './components/Home'
import { NavBar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Stack } from './components/Stack'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import confetti from "canvas-confetti";
import { useEffect, useState } from 'react'


function App() {

   const handleClick =  (e) => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      },
    });
  };

  const[darkMode, setDarkMode] = useState(()=>{
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(()=>{
    if(darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme","dark");
    }else{
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme","light"); 
    }

  },[darkMode]);
  
  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };


  return (
   <>
     <BrowserRouter> 
         <NavBar darkmode = {darkMode} toggleTheme = {toggleTheme}/>  
          <main className="bg-white dark:bg-black max-w-7xl mx-auto px-6 min-h-screen" onClick={handleClick}>
              <Routes>
                  <Route path= "/" element ={<Home/>}/>
                  <Route path= "/projects" element ={<Projects/>}/>
                  <Route path= "/techstacks" element ={<Stack/>}/>
                  <Route path= "/certifications" element ={<Certifications/>}/>
            </Routes>
         </main>    
     </BrowserRouter>
   </>
   

  )
}

export default App
