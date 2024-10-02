import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Facilities from './pages/facilities/Facilities'

import Footer from './components/footer/Footer'
import Car from './components/cars/Car'
import Driver from './components/driver/Driver'
// import Request from './components/request/Request'
import CarRequests from './components/carRequests/CarRequests'
import JobRequests from './components/jobRequests/JobRequests'

import Admin from './pages/admin/Admin'


function App() {
  

  return (
   <div className="main">
    <Router>
    <Header/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/facilities' element={<Facilities/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/admin/car' element={<Car/>}/>
      <Route path='/admin/driver' element={<Driver/>}/>
      <Route path='/admin/carRequest' element={<CarRequests/>}/>
      <Route path='/admin/jobRequest' element={<JobRequests/>}/>
    </Routes>
    <Footer/>
    </Router>
   </div>
  )
}

export default App
