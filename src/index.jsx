import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./styles/main.scss"
//pages
import Home from './pages/Home'
import Logement from './pages/Logement'
import Error from './components/Error'
// composant statique
import Header from './components/Header'
import Footer from './components/Footer'
//composant 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Logement" element={<Logement />} />
        <Route path="*" element={<Error />} /> 
      </Routes>

      <Footer/>

    </Router>
  </React.StrictMode>,
  
)
