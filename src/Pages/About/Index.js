import React from 'react'
import { Link } from 'react-router-dom'
import ToSlide from './../ToSlide.js'

export default function IndexAbout(){
    return (<>
	<div className="container pt-12">
	    <div class="px-4">
	        <img src="https://img.freepik.com/free-vector/communication-flat-icon_1262-18771.jpg?w=740&t=st=1663210480~exp=1663211080~hmac=3ca0537c30c15d92f789e6fc0efb5eb3a527e47a43af0b51c9930ff59956efd1" alt="gb-about1"/>
	    </div>
	    <div class="px-4">
	        <h1 class="text-3xl font-bold text-slate-600">Helping your work in the digital world</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quod dolor, labore? Dicta asperiores.</p>
	    	<div className="flex">
	     	    <div className="avatar-group -space-x-6">
              		<div className="avatar">
                	    <div className="w-12">
                  		<img src="https://placeimg.com/192/192/people" />
                	    </div>
              		</div>
              		<div className="avatar">
                	    <div className="w-12">
                	        <img src="https://placeimg.com/192/192/people" />
                	    </div>
              		</div>
              		<div className="avatar">
                	    <div className="w-12">
                  		<img src="https://placeimg.com/192/192/people" />
                	    </div>
              		</div>
              		<div className="avatar placeholder">
                	    <div className="w-12">
                                <img src="https://placeimg.com/192/192/people" />
                            </div>
              		</div>
            	    </div>
		    <div>
		        <h2 className="mt-2 text-slate-700">4 team for helping</h2>
			<h1 className="font-semibold text-xl text-slate-600">Read more...</h1>
		    </div>
		</div>
                <div className="pt-6">
                    <button className="text-white font-semibold px-6 py-2 bg-primary rounded-full">View more</button>
		    <Link to="/contact" className="text-slate-700 font-semibold px-6 py-2 ml-2 border-2 border-slate-600 rounded-full"><i class="fa-solid fa-envelope"></i> Lets talk</Link>
                </div>
	    </div>
	</div>
	<div>
            <ToSlide back="/" next="/layanan" name="about" id="02" />
        </div>
    </>)
}
