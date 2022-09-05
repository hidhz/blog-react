import React from 'react'

function Navbar(){
    return (
    <>
        <header className="bg-transparent top-0 left-0 absolute w-full flex items-center z-10" id="header">
            <div className="container">
                <div className="flex items-center justify-beetwen relative">
                    <div className="px-4">
                        <a href="/" className="font-bold text-lg block text-dark py-6">Mj'<span className="text-primary">デベロッパー</span></a>
                    </div>
                    <div className="flex items-center px-4">
                        <button id="hamburger" name="hamburger" className="block absolute right-4">
                            <span className="hamburger-line transition duration-300 origin-top-left aese-in-out"></span>
                            <span className="hamburger-line transition duration-300 aese-in-out"></span>
                            <span className="hamburger-line transition duration-300 origin-bottom-left aese-in-out"></span>
                        </button>
                        <nav id="nav-menu" className="hidden absolute py-6 bg-white rounded-lg shadow-lg max-w-[250px] w-full right-4 top-full">
                            <ul className="block">
                                <li className="group">
                                    <a href="/" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"><i className="fa fa-home"></i><span className="relative bottom-1 left-2">Home</span></a>
                                </li>
                                <li className="group">
                                    <a href="blog/" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"><i className="fas fa-blog"></i><span className="relative bottom-1 left-2">Blog</span></a>
                                </li>
                                <li className="group">
                                    <a href="blog/about" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"><i className="fas fa-user-cog"></i><span className="relative bottom-1 left-2">About</span></a>
                                </li>
                                <li className="group">
                                    <a href="blog/contact" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"><i className="fas fa-envelope-open-text"></i><span className="relative bottom-1 left-2">Contatc</span></a>
                                </li>
                                <li className="group">
                                    <a href="https://hidhz.netlify.app/" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"><i className="fa-solid fa-at"></i><span className="relative bottom-1 left-2">Profil-Author</span></a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    </>
    )
}

export default Navbar
