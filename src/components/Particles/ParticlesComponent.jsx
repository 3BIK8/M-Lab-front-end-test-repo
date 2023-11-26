import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./Particles.css";

const ParticlesComponent = () => {
	const particlesInit = async (main) => {
		await loadFull(main);
	};
	const particlesLoaded = (container) => {
		// console.log(container);
	};
	const options = {
		fullScreen: { enable: false },
		background: {
			color: "rgb(10,10,25)",
		},
		fpsLimit: 30,
		particles: {
			number: {
				value: 100,
				density: {
					enable: true,
					value_area: 800,
				},
			},
			color: {
				value: "#290fae",
			},
			shape: {
				type: "circle",
				stroke: {
					width: 0,
					color: "#000000",
				},
				polygon: {
					nb_sides: 5,
				},
				image: {
					src: "img/github.svg",
					width: 100,
					height: 100,
				},
			},
			opacity: {
				value: 0.5,
				random: false,
				anim: {
					enable: false,
					speed: 1,
					opacity_min: 0.1,
					sync: false,
				},
			},
			size: {
				value: 3,
				random: true,
				anim: {
					enable: false,
					speed: 10,
					size_min: 0.1,
					sync: false,
				},
			},
			line_linked: {
				enable: true,
				distance: 150,
				color: "#290fae",
				opacity: 0.4,
				width: 1,
			},
			move: {
				enable: true,
				speed: 2,
				direction: "none",
				random: false,
				straight: false,
				out_mode: "out",
				bounce: false,
				attract: {
					enable: false,
					rotateX: 600,
					rotateY: 1200,
				},
			},
		},
		interactivity: {
			detectsOn: "canvas",
			events: {
				onhover: {
					enable: false,
					mode: "repulse",
				},
				onclick: {
					enable: false,
					mode: "push",
				},
				resize: true,
			},
			modes: {
				grab: {
					distance: 400,
					line_linked: {
						opacity: 1,
					},
				},
				bubble: {
					distance: 400,
					size: 40,
					duration: 2,
					opacity: 8,
					speed: 3,
				},
				repulse: {
					distance: 200,
					duration: 0.4,
				},
				push: {
					particles_nb: 4,
				},
				remove: {
					particles_nb: 2,
				},
			},
		},
		retina_detect: false,
	};
	return (
		<Particles
			id="tsparticles"
			init={particlesInit}
			loaded={particlesLoaded}
			options={options}
		/>
	);
};

export default ParticlesComponent;
