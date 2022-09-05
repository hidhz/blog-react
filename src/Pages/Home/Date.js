import React from 'react'


export default function Dates(){
let date = new Date();
let hari = date.getDay();
let tanggal = date.getDate();
let bulan = date.getMonth();
let tahun = date.getFullYear();
let arrHari = [
    'Minggu','Senin','Selasa','Rabu','Kamis','jumat','Sabtu'
]
let arrBulan = [
    'Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','Novemver','Desember'
]

    return (
	<div className="pt-2">
	    <h1 className="font-semibold bg-primary px-2 py-1 text-1xl text-white rounded-md">{`${arrHari[hari]}, ${tanggal} ${arrBulan[bulan]} ${tahun}`}</h1>
	<div className="pl-4 flex pt-2">
	    <div>
		<h1 className="text-6xl font-semibold text-secondary">27</h1>
	    </div>
	    <div>
		 <h1 className="text-secondary2 text-xl">Ramadhan 1444H</h1>
		<div className="flex">
		    <p className="text-xl text-secondary">00<span className="text-sm">hours</span></p>
		    <p className="pl-2 text-xl text-secondary">00<span className="text-sm">min</span></p>
		    <p className="text-xl pl-2 text-secondary">00<span className="text-sm">sec</span></p>
		</div>
	    </div>
	</div>
	</div>
    )
}
