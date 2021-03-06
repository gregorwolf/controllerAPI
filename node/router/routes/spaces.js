/*eslint no-console: 0, no-unused-vars: 0, no-shadow: 0, new-cap: 0*/
/*eslint-env node, es6 */
"use strict";
const express = require("express");
const request = require("request-promise-native");

module.exports = function() {
	var app = express.Router();

	app.get("/", async(req, res) => {
		let options = {
			method: "GET",
			json: true,
			url: global.__controller + "/v2/spaces",
			auth: {}
		};
		options.auth.bearer = require(global.__base + "utils/auth").getAccessToken(req);
		try {
			let body = await request.get(options);
			return res.type("application/json").status(200).send(body);
		} catch (err) {
			console.log(err.toString());
			return res.type("text/html").status(500).send(err.toString());
		}
	});

	app.get("/:guid", async(req, res) => {
		let options = {
			method: "GET",
			json: true,
			url: global.__controller + "/v2/spaces/" + req.params.guid,
			auth: {}
		};
		options.auth.bearer = require(global.__base + "utils/auth").getAccessToken(req);
		try {
			let body = await request.get(options);
			return res.type("application/json").status(200).send(body);
		} catch (err) {
			console.log(err.toString());
			return res.type("text/html").status(500).send(err.toString());
		}
	});

	app.get("/:guid/content", async(req, res) => {
		let options = {
			method: "GET",
			json: true,
			url: global.__controller + "/v2/spaces/" + req.params.guid + "/content",
			auth: {}
		};
		options.auth.bearer = require(global.__base + "utils/auth").getAccessToken(req);
		try {
			let body = await request.get(options);
			return res.type("application/json").status(200).send(body);
		} catch (err) {
			console.log(err.toString());
			return res.type("text/html").status(500).send(err.toString());
		}
	});

	app.get("/:guid/apps", async(req, res) => {
		let options = {
			method: "GET",
			json: true,
			url: global.__controller + "/v2/spaces/" + req.params.guid + "/apps",
			auth: {}
		};
		options.auth.bearer = require(global.__base + "utils/auth").getAccessToken(req);
		try {
			let body = await request.get(options);
			return res.type("application/json").status(200).send(body);
		} catch (err) {
			console.log(err.toString());
			return res.type("text/html").status(500).send(err.toString());
		}
	});

	app.get("/:guid/services", async(req, res) => {
		let options = {
			method: "GET",
			json: true,
			url: global.__controller + "/v2/spaces/" + req.params.guid + "/services",
			auth: {}
		};
		options.auth.bearer = require(global.__base + "utils/auth").getAccessToken(req);
		try {
			let body = await request.get(options);
			return res.type("application/json").status(200).send(body);
		} catch (err) {
			console.log(err.toString());
			return res.type("text/html").status(500).send(err.toString());
		}
	});

	app.get("/:guid/service_instances", async(req, res) => {
		let options = {
			method: "GET",
			json: true,
			url: global.__controller + "/v2/spaces/" + req.params.guid + "/service_instances",
			auth: {}
		};
		options.auth.bearer = require(global.__base + "utils/auth").getAccessToken(req);
		try {
			let body = await request.get(options);
			return res.type("application/json").status(200).send(body);
		} catch (err) {
			console.log(err.toString());
			return res.type("text/html").status(500).send(err.toString());
		}
	});
	
	app.get("/:guid/managers", async(req, res) => {
		let options = {
			method: "GET",
			json: true,
			url: global.__controller + "/v2/spaces/" + req.params.guid + "/managers",
			auth: {}
		};
		options.auth.bearer = require(global.__base + "utils/auth").getAccessToken(req);
		try {
			let body = await request.get(options);
			return res.type("application/json").status(200).send(body);
		} catch (err) {
			console.log(err.toString());
			return res.type("text/html").status(500).send(err.toString());
		}
	});

/*	app.get("/:guid/managers/:user_guid", async(req, res) => {
		let options = {
			method: "GET",
			json: true,
			url: global.__controller + "/v2/sapces/" + req.params.guid + "/managers/"+ req.params.user_guid,
			auth: {}
		};
		options.auth.bearer = require(global.__base + "utils/auth").getAccessToken(req);
		try {
			let body = await request.get(options);
			return res.type("application/json").status(200).send(body);
		} catch (err) {
			console.log(err.toString());
			return res.type("text/html").status(500).send(err.toString());
		}
	});*/
	
	app.get("/:guid/auditors", async(req, res) => {
		let options = {
			method: "GET",
			json: true,
			url: global.__controller + "/v2/spaces/" + req.params.guid + "/auditors",
			auth: {}
		};
		options.auth.bearer = require(global.__base + "utils/auth").getAccessToken(req);
		try {
			let body = await request.get(options);
			return res.type("application/json").status(200).send(body);
		} catch (err) {
			console.log(err.toString());
			return res.type("text/html").status(500).send(err.toString());
		}
	});	

/*	app.get("/:guid/auditors/:user_guid", async(req, res) => {
		let options = {
			method: "GET",
			json: true,
			url: global.__controller + "/v2/spaces/" + req.params.guid + "/auditors/"+ req.params.user_guid,
			auth: {}
		};
		options.auth.bearer = require(global.__base + "utils/auth").getAccessToken(req);
		try {
			let body = await request.get(options);
			return res.type("application/json").status(200).send(body);
		} catch (err) {
			console.log(err.toString());
			return res.type("text/html").status(500).send(err.toString());
		}
	});*/

	app.get("/:guid/developers", async(req, res) => {
		let options = {
			method: "GET",
			json: true,
			url: global.__controller + "/v2/spaces/" + req.params.guid + "/developers",
			auth: {}
		};
		options.auth.bearer = require(global.__base + "utils/auth").getAccessToken(req);
		try {
			let body = await request.get(options);
			return res.type("application/json").status(200).send(body);
		} catch (err) {
			console.log(err.toString());
			return res.type("text/html").status(500).send(err.toString());
		}
	});	

/*	app.get("/:guid/developers/:user_guid", async(req, res) => {
		let options = {
			method: "GET",
			json: true,
			url: global.__controller + "/v2/spaces/" + req.params.guid + "/developers/"+ req.params.user_guid,
			auth: {}
		};
		options.auth.bearer = require(global.__base + "utils/auth").getAccessToken(req);
		try {
			let body = await request.get(options);
			return res.type("application/json").status(200).send(body);
		} catch (err) {
			console.log(err.toString());
			return res.type("text/html").status(500).send(err.toString());
		}
	});*/
	
	return app;
};	