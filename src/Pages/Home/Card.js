import React from 'react'

export default function Card(){
  let element  = (<div className="pt-8 relative">
            <div className="pb-2" id="avatar">
                <div class="flex">
                   <div>
                        <img className="rounded-full border-2 border-primary w-10" src="https://placeimg.com/192/192/people" />
                   </div>
                   <div>
                        <h1 className="pl-1 text-lg text-secondary font-semibold mt-2">Hidhz Dev</h1>
                   </div>
                </div>
            </div>
            <img src="https://images.unsplash.com/photo-1558368782-f5301dcfb9bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80" />
	</div>)
    let elements = [];
    for(let i=1;i<=7;i++){elements.push(element)}
    return (
	<>
	   {elements}
	</>
    )
}
