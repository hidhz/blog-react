import React from 'react'
import Search from './Search.js'
import Breadcrumbs from './Breadcrumbs.js'

export default function Jumbotron(){
    return (
    <>
    <section id="jumbotron" className="pt-[6rem]">
        <div className="container overflow-hidden">
            <div className="flex flex-wrap relative">
                <div className="w-full self-center px-4">
                    <h1 className="text-base font-semibold text-primary md:text-xl lg:text-2xl">Hallo Semua 👋, 
                    <span className="text-dark">I am</span>
                        <span className="block font-bold text-dark text-4xl mt-1">
                            Hidhz'<span className="font-semibold text-primary">デベロッパー</span>
                        </span>
                    </h1>
                    <h2 className="font-medium text-secondary text-lg">Teknik Komputer dan <span className="text-dark">Jaringan</span></h2>
                    <p className="font-bold text-secondary2 leading-relaxed text-2xl">Welcome to my website Blog,</p>
                    <button className="font-semibold text-white bg-primary py-2 px-8 rounded-full hover:bg-sky-600" onclick="klik()">Tutorial | -Blog</button>
                    <button className="font-semibold text-primary py-2 px-8 rounded-full hover:text-white hover:bg-primary">Resume</button>
                </div>
            </div>
	    <div className="px-4 pt-12">
	        { <Search />  }
		<div className="pt-4">{ <Breadcrumbs />  }</div>
	    </div>
        </div>
    </section>
    </>
    )
}
