import React from 'react'
import Jumbotron from './Jumbotron.js'
import MenuMtk from './MenuMtk.js'
import Aritmatika from './Aritmatika.js'

export default function Mtk(){
    return (
	<>
	    <React.StrictMode>
		<Jumbotron />
		<MenuMtk />
		<Aritmatika />
	    </React.StrictMode>
	</>
    )
}
