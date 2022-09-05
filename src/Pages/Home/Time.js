import React from 'react'

export default function Time(){
    let [jam, setJam] = React.useState(null)
    let [menit, setMenit] = React.useState(null)
    let [detik, setDetik] = React.useState(null)
    setInterval(() => {
        let time = new Date().toLocaleString('en-us', {timeZone: 'Asia/Jakarta'})
        time = new Date(time)
	let detik = time.getSeconds()
        let menit = time.getMinutes()
        let jam = time.getHours()
        if(detik < 10) detik = `0${detik}`
	if(menit < 10) menit = `0${menit}`
        if(jam < 10) jam = `0${jam}`
        setJam(jam)
	setMenit(menit)
	setDetik(detik)
    },1000)
    return (
	<div>
	    <h1 className="text-6xl text-secondary font-bold">{jam}</h1>
	    <div className="flex">
  	        <h1 className="text-5xl font-bold text-secondary">{menit}</h1>
		<h1 className="text-2xl font-bold text-primary mt-4">{detik}</h1>
	    </div>
        </div>
    )
}
