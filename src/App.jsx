
import './App.css'
import { Home } from './components/Home'
import { NavBar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Stack } from './components/Stack'

function App() {

  return (
   <>
     <NavBar/>
     <main className= "max-w-7xl mx-auto px-2 md:px-6" >
        <section id='home'>
           <Home/>
        </section>

        <section id='projects'>
           <Projects/>
        </section>

        <section id='techstack'>
            <Stack/>
        </section>

        <section id='certifications'>

        </section>

     </main>
  
   </>
   

  )
}

export default App
