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
			let role = req.body.role
			if (role.length > 0) {
				let job_urls = await getJobLinks(role);
				res.status(200).send({ "url":job_urls });
			} else {
				res.status(500).send({ 'error': 'something blew up' })
			}
		}
	} catch(err) {
		console.err('something went wrong', err)
		next(err)
	}
});

exports.JobSearchRouter = router; 