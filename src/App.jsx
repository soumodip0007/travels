import React from 'react'
import Navbar from './components/Navbar'
import HeroSlider from './components/HeroSlider'
import FeatureCards from './components/FeatureCards'
import TourSection from './components/TourSection'
import PackageDetails from './pages/PackageDetails'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'
import ScrollTop from './components/ScrollTop'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact/>} />
        <Route
          path="/packages/:slug"
          element={<PackageDetails />}
        />
      </Routes>
      <Footer/>
      <ScrollTop/>
    </div>
  )
}

export default App