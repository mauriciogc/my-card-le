/* global document*/
import { html, render } from "lit-html";

import "../my-card-le.js";

const data = [
	{
		title: "Mulan",
		genre: ["Action", "Adventure", "Drama", "Fantasy", "War"],
		date: "2020",
		vote: 7.6,
		description:
			"When the Emperor of China issues a decree that one man per family must serve in the Imperial Chinese Army to defend the country from Huns, Hua Mulan, the eldest daughter of an honored warrior, steps in to take the place of her ailing father. She is spirited, determined and quick on her feet. Disguised as a man by the name of Hua Jun, she is tested every step of the way and must harness her innermost strength and embrace her true potential.",
		poster:
			"//image.tmdb.org/t/p/w220_and_h330_face/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
		backdrop:
			"//image.tmdb.org/t/p/w1920_and_h800_multi_faces/zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
	},
	{
		title: "Money Plane",
		genre: ["Action"],
		date: "2020",
		vote: 0.0,
		description:
			"A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.",
		poster:
			"//image.tmdb.org/t/p/w220_and_h330_face/6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
		backdrop:
			"//image.tmdb.org/t/p/w1920_and_h800_multi_faces/pq0JSpwyT2URytdFG0euztQPAyR.jpg",
	},
	{
		title: "Hard Kill",
		genre: ["Action", "Thriller"],
		date: "2020",
		vote: 5.5,
		description:
			"The work of billionaire tech CEO Donovan Chalmers is so valuable that he hires mercenaries to protect it, and a terrorist group kidnaps his daughter just to get it.",
		poster:
			"//image.tmdb.org/t/p/w220_and_h330_face/9Rj8l6gElLpRL7Kj17iZhrT5Zuw.jpg",
		backdrop:
			"//image.tmdb.org/t/p/w1920_and_h800_multi_faces/7fvdg211A2L0mHddvzyArRuRalp.jpg",
	},
];

render(
	html` ${data.map(
		({
			title,
			genre,
			date,
			vote,
			description,
			poster,
			backdrop,
		}) => html` <my-card-le
			.title=${title}
			.genre=${genre}
			.date=${date}
			.vote=${vote}
			.description=${description}
			.poster=${poster}
			.backdrop=${backdrop}
		>
		</my-card-le>`
	)}`,
	document.querySelector("#demo")
);
