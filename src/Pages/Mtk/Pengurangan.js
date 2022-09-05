import React from 'react'

export default function Pengurangan(){
    return (
    <>
    <div className="container px-8 pt-4">
    <div className="border-primary rounded-md border-2 py-4 px-2">
        <h4 className="font-semibold text-xl">Operasi Aritmatika | Pengurangan</h4>
        <div className="flex items-center">
            <div>
                <input type="text" id="angka1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
            </div>
            <div>
                <h1 className="font-bold text-2xl">-</h1>
            </div>
            <div>
                <input type="text" id="angka2" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
            </div>
            <button className="p-2.5 ml-2 text-sm font-medium text-white bg-primary rounded-lg border border-primary hover:bg-sky-900 focus:ring-4 focus:outline-none focus:ring-sky-500 dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary">Kurangkan</button>
        </div>
         <div className="bg-primary px-4 py-4 mt-4 rounded-md">
             <h1 className="text-2xl text-white">Hasilnya Adalah <span>2+2=1</span></h1>
        </div>
    </div>
    </div>
    </>
    )
}
