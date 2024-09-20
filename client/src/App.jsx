import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Facilities from './pages/facilities/Facilities'

import Footer from './components/footer/Footer'


function App() {
  

  return (
   <div className="main">
    <Header/>
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/facilities' element={<Facilities/>}/>
    </Routes>
    <Footer/>
    </Router>
   </div>
  )
}

export default App
