
import './App.css'
import { Certifications } from './components/Certfications'
import { Home } from './components/Home'
import { NavBar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Stack } from './components/Stack'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import confetti from "canvas-confetti";


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

  return (
   <>
     <BrowserRouter> 
         <NavBar/>  
         <main className= "max-w-7xl mx-auto px-6" onClick={handleClick} >
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
