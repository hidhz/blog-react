import React from 'react'
import Swal from 'sweetalert2'
import ToSlide from './../ToSlide.js'

export default function Layanan(){
    return (<>
	<div className="container px-8 pt-24 overflow-hidden">
	    <h1 className="text-4xl font-bold text-slate-600">Layanan Kami
	        <span className="text-2xl"> KOMPUTER</span>
	        <span className="font-normal text-primary"> PROBLEMS!!!</span>
	    </h1>
            <div class="pt-12 overflow-hidden pb-2">
              <div class="animasiku rounded-md flex">
                <div>
                  <h1 data-aos="zoom-in" class="font-bold text-3xl">Jasa <span class="text-emerald-600">Installasi</span></h1>
                  <h1 data-aos="fade-left" class="font-bold text-3xl">OS <span class="text-4xl text-teal-500">Windows</span></h1>
                  <button onClick={() => {
		    alert("halo")
		  }} data-aos="fade-left" class="mt-12 px-4 py-1 bg-teal-500 rounded-full font-bold text-white">Selengkapnya</button>
                </div>
                <div>
                  <img data-aos="zoom-out" class="w-40" src="https://img.freepik.com/free-vector/operating-system-concept-illustration_114360-1915.jpg?w=740&t=st=1662464620~exp=1662465220~hmac=3346ead7438088a6e6876da573506b271d608311e34adc4c233c87a3de2c62ba" alt=""  />
                </div>
              </div>
	      <div class="mt-1 mb-4 bg-slate-500 px-[100%] py-[1px]"></div>
              <div class="animasiku rounded-md flex pb-2">
                <div>
                  <h1 data-aos="zoom-in" class="font-bold text-2xl">Jasa <span class="text-primary">Installasi</span></h1>
                  <h1 data-aos="fade-left" class="font-bold text-2xl">dan Aktivasi <span class="text-4xl text-primary">Software</span></h1>
                  <button onclick="kliklapp()" data-aos="fade-left" class="mt-6 px-4 py-1 bg-primary rounded-full font-bold text-white">pesan jasa</button>
                </div>
                <div>
                  <img data-aos="zoom-out" class="w-64" src="https://img.freepik.com/free-vector/system-administrator-technical-work-with-server-software-installation-configuration-computer-systems-networks-flat-vector-illustration_613284-1460.jpg?w=740&t=st=1662468202~exp=1662468802~hmac=626e2e3e503b8801ed1ba847658010473b3b4a6c32099d15c5bf6609d3090886" alt="" />
                </div>
              </div>
	      <div class="mb-4 bg-slate-500 px-[100%] py-[1px]"></div>
              <div class="animasiku rounded-md flex">
                <div>
                  <h1 data-aos="zoom-in" class="font-bold text-rose-600 text-4xl">Website</h1>
                  <h1 data-aos="fade-left" class="font-bold text-md">Landing <span class="text-2xl text-rose-700">Page</span></h1>
                  <button data-aos="fade-left" onclick="kliklweb()" class="mt-6 px-4 py-1 bg-rose-700 rounded-full font-bold text-white">pesan jasa</button>
                </div>
                <div>
                  <img data-aos="zoom-out" class="w-64" src="https://img.freepik.com/free-vector/javascript-frameworks-concept-illustration_114360-743.jpg?w=740&t=st=1662469308~exp=1662469908~hmac=d1e86e92ed986f7eca35dddec53fec74ffb1e151911ca01c986ed15a239bc520" alt="" />
                </div>
              </div>
            </div>
	</div>
	<ToSlide back="/about" next="/contact" name="layanan" id="03" />
    </>)
}
