import React from 'react'
import { Link } from 'react-router-dom'
import anime from 'animejs/lib/anime.es.js'
import ParticlesReady from './../../Components/Particles.js'

const Home = () => {
    let animationRef = React.useRef(null)
    React.useEffect(() => {
    animationRef.current = anime({
	targets: ".panahHome",
	translateX: 30,
	duration: 1000,
	easing: "linear",
	direction: "alternate",
        loop: true,
    });
    }, []);
    return (<>
        <div class="absolute overflow-hidden">
	    <ParticlesReady />
	</div>
	<div class="w-full pt-16">
	    <img src="https://img.freepik.com/free-vector/tiny-people-testing-quality-assurance-software-isolated-flat-vector-illustration-cartoon-character-fixing-bugs-hardware-device-application-test-it-service-concept_74855-10172.jpg?w=740&t=st=1663549028~exp=1663549628~hmac=055666f6c0367c6e9fd3b0d8c6f50714b717a7a8682a81bb2080c23725ec6fa7" alt="" />
	</div>
	<div class="container px-8">
	    <img class="w-[60%] absolute left-[10rem] top-[12rem]" src="https://freepngimg.com/thumb/anime/13-2-anime-png-image.png" alt="" />
	    <div class="flex musik">
		<div>
		    <img class="w-24" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQDKhlOQ-vsJevSaWNQTXwbkPIKaRXPl_zpg&usqp=CAU" alt="" />
		</div>
		<div class="ml-2">
		    <p class="text-[10px]">music.<span class="text-green-600">this</span>.live()</p>
		    <h1 class="mt-[-.3rem] text-slate-600">Alan walker</h1>
		    <p class="mt-[-.3rem] font-bold text-slate-700">Alone</p>
		</div>
		<div class="pt-4 pl-8">
		<audio id="player" src="https://www.computerhope.com/jargon/m/example.mp3"></audio>
		<button onClick={() => {
                    document.getElementById('player')
                    }}><i class="fa-solid fa-backward"></i>
		</button>
		<button class="px-4" onClick={() => {
                    document.getElementById('player').play()
                    }}><i class="fa-solid fa-play"></i>
		</button>
		<button onClick={() => {
		    document.getElementById('player')
		    }}><i class="fa-solid fa-forward"></i>
		</button>
		</div>
	    </div>
	    <h1 class="text-slate-800 text-5xl absolute left-[22rem] top-[22rem]"><i class="fa-solid fa-headset"></i></h1>
	</div>
	<div className="container relative top-[-1.6rem]">
        <div class="overflow-hidden">
           <div class="flex flex-wrap relative pt-[5.5rem]">
                <div class="w-full self-center px-4">
                    <h1 data-aos="fade-left" class="text-base font-semibold text-primary md:text-xl lg:text-2xl">Hello welcome 👋, 
                    <span class="text-dark"> i'm is a </span>
                        <span data-aos="fade-up" class="block text-dark text-5xl mt-1 font-normal">
                            FullStack<span data-aos="zoom-in" class="font-semibold text-primary"> Web <span><i class="fa-brands fa-windows"></i></span> <span class="text-6xl"> Developer</span></span>
                        </span>
                    </h1>
                    <h2 data-aos="fade-up" class="font-medium text-secondary text-lg mb-2">Teknik Komputer <span class="text-dark">Jaringan</span></h2>
                    <p data-aos="zoom-in" class="font-medium text-secondary2 mb-6 leading-relaxed max-w-">I hope you will get to know a little about me and can work with me.</p>
		    <div class="mb-2 bg-slate-500 h-[2px] w-full"></div>
		    <div class="pt-4 flex justify-content-bertween">
                        <Link to="layanan" data-aos="fade-right" class="font-semibold text-white bg-primary py-3 px-8 rounded-full hover:bg-sky-600">
			    <i class="fa-solid fa-download"></i> Download CV
		        </Link>
		        <Link to="about" class="text-2xl pl-[8rem] pt-2 text-slate-500 font-bold panahHome"><i class="fa-solid fa-arrow-right"></i></Link>
		    </div>
                </div>
            </div>
        </div>
	</div>
    </>)
}
export default Home



