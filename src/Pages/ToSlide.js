import React from 'react'
import {Link} from 'react-router-dom'

const ToSlide = (props) => {
    return (
	<div class="w-full bg-white px-8 py-4 fixed bottom-0">
	<div className="flex flex-wrap fixed bottom-0">
	    <div>
		<h1>{props.id} | {props.name}</h1>
	    </div>
	    <div class="relative left-[12rem] pb-2">
	        <Link class="text-xl px-[9px] py-[4px] border-2 border-slate-600 rounded-full text-base text-slate-600" to={props.back}>
		   <i class="fa-solid fa-angle-left"></i>
	        </Link>
		<Link class="text-xl px-[9px] py-[4px] border-2 border-slate-600 rounded-full relative left-4 text-xl text-base text-slate-600" to={props.next}>
		    <i class="fa-solid fa-angle-right"></i>
		</Link>
	    </div>
	</div>
	</div>
    )
}
export default ToSlide
