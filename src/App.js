import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar.js'
import Home from './Pages/Home/Home.js'
import Mtk from './Pages/Mtk/Mtk.js'
import GetApi from './Api.js'

export default function App() {
    return (
        <div className="app">
            <Navbar />
            <Routes>
                <Route path="/" element={ <Home /> } />
		<Route path="matematika" element={ <Mtk />  } />
		<Route path="api" element={ <GetApi /> }  />
            </Routes>
        </div>
    )
}
