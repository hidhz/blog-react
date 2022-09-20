import React from 'react'
import Particles from 'react-particles-js';

export default function ParticlesReady() {
    return (
	<>
        <Particles height="40vh" height="100vh"
            params={{
            	particles: {
		    color: {
			value: "#0066FF"
		    },
		    line_linked: {
			color: "#00A9FF",
                    },
		    number: {
                        value: 30,
                        density: {
                            enable: true,
			    value_area: 800
                        }
		    }
                },
		"retina_detect": true
            }}
        />
	</>
    )
}
