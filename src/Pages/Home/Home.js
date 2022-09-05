import React from 'react'
import Jumbotron from './Jumbotron.js'
import Konten from './../../Components/Konten.js'
import MainKonten from './Main.js'
export default function Home(){
    return (
	<>
	    <React.StrictMode>
		<Jumbotron />
		<div className="container px-4">
		    <MainKonten />
		</div>
		<Konten />
	    </React.StrictMode>
	</>
    )
}
