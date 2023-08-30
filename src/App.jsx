import { Routes, Route } from "react-router-dom";
//pages
import Home from './pages/Home'
import Logement from './pages/Logement'
import Error from './pages/Error'
import About from './pages/About'
// composant statique
import Header from './components/Header'
import Footer from './components/Footer'
//composant 


function App(){
  return(
    <div className='App'>
      <Header />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Logement/:id" element={<Logement />} />
        <Route path="*" element={<Error />} /> 
        <Route path="/About" element={<About />} /> 
      </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App
