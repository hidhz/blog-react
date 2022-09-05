import React from 'react'

export default function Pertambahan(){
    const [hasil, setHasil] = React.useState(null)
    return (
    <>
    <div className="container pt-4 px-8">
    <div className="border-primary rounded-md border-2 py-4 px-2">
        <h4 className="font-semibold text-2xl">Aritmatika | Pertambahan</h4>
        <div className="flex items-center">
            <div>
                <input type="text" id="angka1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-1 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
	    </div>
	    <div>
                <h1 className="font-bold text-2xl text-secondary">+</h1>
	    </div>
	    <div>
                <input type="text" id="angka2" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
            </div>
            <button className="p-2.5 ml-2 text-sm font-medium text-white bg-primary rounded-lg border border-primary hover:bg-sky-900 focus:ring-4 focus:outline-none focus:ring-sky-500 dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary" onClick={
		function(){
		    const angka1 = parseInt(document.getElementById('angka1').value)
		    const angka2 = parseInt(document.getElementById('angka2').value)

		    setHasil(angka1+angka2)
		}
	    }>Jumlahkan</button>
        </div>
        <div className="bg-primary px-4 py-4 rounded-md mt-4">
            <h1 className="text-2xl text-white">Hasilnya Adalah <span>{hasil}</span></h1>
	</div>
    </div>
    </div>
    </>
    )
}
