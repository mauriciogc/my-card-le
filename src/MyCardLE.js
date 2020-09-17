/*global customElements*/
import { LitElement, html, css } from "lit-element";
import { styleMap } from "lit-html/directives/style-map.js";
import { ifDefined } from "lit-html/directives/if-defined";

const tagName = "my-card-le";

export class MyCardLE extends LitElement {
	static get styles() {
		return css`
			* {
				box-sizing: border-box;
				margin: 0;
				--global-font-size: var(--mcle-global-font-size);
				--primary-color: var(--mcle-primary-color, #fff);
				--secondary-color: var(--mcle-secondary-color, #dadada);
				--tertiary-color: var(--mcle-tertiary-color, #545454);
				--background-linear-gradient-1: var(
					--mcle-bg-linear-gradient-1,
					#e5e6e6
				);
				--background-linear-gradient-2: var(
					--mcle-bg-linear-gradient-2,
					transparent
				);
			}
			:host {
				background: white;
				font-family: "Montserrat", helvetica, arial, sans-serif;
				font-size: var(--global-font-size, 12px);
				font-weight: 400;
				display: inline-block;
			}

			.movie_card {
				border-radius: 5px;
				box-shadow: rgba(0, 0, 0, 0.5) 0px 10px 41px -17px;
				display: block;
				height: 100%;
				margin: 15px;
				min-height: 300px;
				overflow: hidden;
				position: relative;
				transition: all 0.4s;
				width: 450px;
			}
			.info_section {
				background: linear-gradient(
					to top,
					var(--background-linear-gradient-1) 20%,
					var(--background-linear-gradient-2) 100%
				);
				display: inline-block;
				height: 100%;
				position: relative;
				width: 100%;
				z-index: 2;
			}
			.movie_header {
				padding: 25px;
				letter-spacing: 0.1em;
				margin-top: 5px;
			}
			.movie_header h1 {
				color: var(--primary-color);
				font-size: 2.3em;
				font-weight: 400;
			}
			.movie_header h4 {
				color: var(--secondary-color);
				font-size: 1.5em;
				font-weight: 400;
			}
			.movie_header .rating {
				display: inline-block;
				margin-top: 15px;
				color: var(--secondary-color);
				padding: 5px;
				border: 1px solid rgba(255, 255, 255, 0.5);
			}
			.movie_header .type {
				margin-top: 10px;
				display: block;
				color: var(--secondary-color);
				font-size: 0.8em;
			}
			.movie_header .locandina {
				box-shadow: 0 2px 10px -1px rgba(0, 0, 0, 0.5);
				float: left;
				height: 120px;
				margin-right: 20px;
				position: relative;
			}
			.movie_desc {
				font-size: 1.1em;
				letter-spacing: 0.5px;
				line-height: 20px;
				padding: 25px;
				width: 100%;
				color: var(--tertiary-color);
			}
			.blur_back {
				background-position: 50% 50%;
				background-size: cover;
				filter: blur(0.5em);
				height: 100%;
				position: absolute;
				right: 0;
				top: 0;
				width: 100%;
				z-index: 1;
				transition: all 0.4s;
			}
			.movie_card:hover .blur_back {
				filter: blur(0em);
			}

			@media screen and (max-width: 780px) {
				.movie_card {
					width: 100%;
					border-radius: 0px;
					margin: 0;
					box-shadow: 0 0 0 0;
				}
				.info_section {
					border-radius: 0px;
				}
				.blur_back {
					border-radius: 0px;
				}
			}
		`;
	}
	static get properties() {
		return {
			title: { type: String },
			genre: { type: Array },
			date: { type: String },
			vote: { type: Number },
			description: { type: String },
			poster: { type: String },
			backdrop: { type: String },
		};
	}
	constructor() {
		super();
		this.title = "";
		this.genre = [];
		this.date = "";
		this.vote = 0.0;
		this.description = "";
		this.poster = undefined;
		this.backdrop = undefined;
	}

	render() {
		const { title, genre, date, vote, description, poster, backdrop } = this;
		return html`
			<div class="movie_card">
				<div class="info_section">
					<div class="movie_header">
						<img class="locandina" src=${ifDefined(poster)} />
						<h1>${title}</h1>
						<h4>${date}</h4>
						<span class="rating">Rating: ${vote}</span>
						<p class="type">${genre.join(", ")}</p>
					</div>
					<div class="movie_desc">
						<p class="text">${description}</p>
					</div>
				</div>
				<div
					class="blur_back"
					style=${styleMap({ backgroundImage: `url(${backdrop})` })}
				></div>
			</div>
		`;
	}
}
customElements.define(tagName, MyCardLE);
