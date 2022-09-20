import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar.js'
import Home from './Pages/Home/Home.js'
import HomeAbout from './Pages/About/Index.js'
import Contact from './Pages/Contact/Contact.js'
import Layanan from './Pages/Layanan/Layanan.js'

export default function App() {
    return (
        <div>
            <Navbar />
	    <Routes>
		<Route path="/" element={<Home />} />
		<Route path="about" element={<HomeAbout />} />
		<Route path="contact" element={<Contact />} />
		<Route path="layanan" element={<Layanan />} />
	    </Routes>
        </div>
    )
}
