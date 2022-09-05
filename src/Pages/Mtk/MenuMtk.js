import React from 'react'
import Pertambahan from './Pertambahan.js'
import Pengurangan from './Pengurangan.js'

export default function MenuMtk(){
    const [pilih, setPilih] = React.useState(null)
    let cmpnt;
    if(pilih == "pertambahan"){
	cmpnt = <Pertambahan />
    } else if(pilih == "pengurangan"){
	cmpnt = <Pengurangan />
    }

    return (
    <>
        <section id="jumbotron" className="pt-[2rem]">
            <div className="container overflow-hidden">
                <div className="flex flex-wrap relative">
                    <div className="w-full self-center px-4">
                        <h1 className="text-base font-semibold text-primary text-2xl lg:text-3xl">MyKalkulator,  
                           <span className="text-dark"> Sederhana</span>
                        </h1>
                    </div>
		    <div className="w-full px-4">
			<div>
    			    <select className="px-2 py-2 rounded-md bg-secondary text-white" name="pilih" id="pilih">
				<option>Silahkan Pilih</option>
		                <option value="pertambahan">pertambahan</option>
			        <option value="pengurangan">pengurangan</option>
				<option value="subnet-ip">subnet ip address</option>
			    </select>
			    <button className="px-2 py-1 border-2 border-primary text-primary ml-4" onClick={
			       function(){
                                  const nilai = document.getElementById('pilih').value
                                  setPilih(nilai)
                               }
			   }>Konfirmasi</button>
			</div>
		    </div>
                </div>
            </div>
        </section>
        <div>{cmpnt}</div>
    </>
    )
}


















