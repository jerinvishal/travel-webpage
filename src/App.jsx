import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/NavBar'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import About from './components/About'

const App = () => { 
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/gallery" element={<Gallery />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App