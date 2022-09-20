import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
    <header className="bg-transparent top-0 left-0 absolute w-full flex items-center z-10">
        <div className="container">
            <div className="flex items-center justify-beetwen relative">
		<div className="px-4">
                    <a href="/" className="font-bold text-lg block text-dark py-6">
			<span className="font-bold text-xl text-slate-600">{"<"}</span>
                        Mj'<span className="text-primary">デベロッパー</span>
		        <span className="font-bold text-xl text-slate-600">{"/>"}</span>
		    </a>
                </div>
                <div className="flex items-center px-4">
                    <button id="hamburger" name="hamburger" className="block absolute right-4" onClick={() => {
			document.getElementById('nav-menu').classList.toggle('hidden')
			document.getElementById("line-atas").classList.toggle("hamburger-line-klik")
			document.getElementById("line-bawah").classList.toggle("hamburger-line-klik")
			hamburger.classList.toggle('hamburger-active');
		    }}>
                        <span className="w-[40px] h-[2.1px] my-2 block bg-dark transition duration-300 origin-top-left aese-in-out" id="line-atas"></span>
                        <span className="w-[25px] h-[2.1px] my-2 block bg-dark transition duration-300 aese-in-out"></span>
                        <span className="w-[32px] h-[2.1px] my-2 block bg-dark transition duration-300 origin-bottom-left aese-in-out" id="line-bawah"></span>
                    </button>
                    <nav id="nav-menu" className="hidden absolute py-6 bg-white rounded-lg shadow-lg max-w-[250px] w-full right-4 top-full">
                        <ul className="block">
                            <li className="group">
                                <Link to="/" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"><i className="fa fa-home"></i><span className="relative bottom-1 left-2">Home</span></Link>
                            </li>
                            <li className="group">
                                <Link to="blog" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"><i className="fas fa-blog"></i><span className="relative bottom-1 left-2">Blog</span></Link>
                            </li>
                            <li className="group">
                                <Link to="about" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"><i className="fas fa-user-cog"></i><span className="relative bottom-1 left-2">About</span></Link>
                            </li>
                            <li className="group">
                                <Link to="contact" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"><i className="fas fa-envelope-open-text"></i><span className="relative bottom-1 left-2">Contatc</span></Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    )
}

export default Navbar
