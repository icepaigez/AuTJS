"use strict";

const express = require("express");
const router = express.Router();

const { getJobLinks } = require('./job_links');
const { getJobData } = require('./job_data');
const { get_job_prep } = require('./gpt');



router.post('/', async (req, res) => {
	try {
		if (Object.keys(req.body).length != 0) {
			let resume = req.body.resume;
			let role = req.body.role;

			if (role.length > 0) {
				let data = await getJobLinks(role);
				let urls = data.map(obj => obj.value)
				if (urls) {
					res.status(200).send({ 'urls':urls })
				}
			} else {
				res.status(500).send({ 'error': 'empty role entered' })
			}
		}
	} catch(err) {
		console.error('something went wrong', err)
		next(err)
	}
});

exports.JobSearchRouter = router; 