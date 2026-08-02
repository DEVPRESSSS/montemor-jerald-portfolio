
import './App.css'
import { Certifications } from './components/Certfications'
import { Home } from './components/Home'
import { NavBar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Stack } from './components/Stack'
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {

  return (
   <>
     <BrowserRouter> 
         <NavBar/>  
         <main className= "max-w-7xl mx-auto px-6" >
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
