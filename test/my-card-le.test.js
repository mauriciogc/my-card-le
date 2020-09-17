/* global describe, it*/
import { html, fixture, expect } from "@open-wc/testing";

import "../my-card-le.js";

describe("has properties and attributes and functions", () => {
	it("has a type properties", async () => {
		const el = await fixture(html` <my-card-le></my-card-le> `);

		expect(el.title).to.be.a("string");
		expect(el.genre).to.be.a("array");
		expect(el.date).to.be.a("string");
		expect(el.vote).to.be.a("number");
		expect(el.description).to.be.a("string");
		expect(el.poster).to.be.a("undefined");
		expect(el.backdrop).to.be.a("undefined");

		expect(el.render).to.be.a("function");
		expect(el.constructor).to.be.a("function");
	});

	it("has a default value properties", async () => {
		const el = await fixture(html` <my-card-le></my-card-le> `);

		expect(el.title).to.equal("");
		expect(el.genre).to.have.empty;
		expect(el.date).to.equal("");
		expect(el.vote).to.equal(0.0);
		expect(el.description).to.equal("");
		expect(el.poster).to.equal(undefined);
		expect(el.backdrop).to.equal(undefined);
	});
});
