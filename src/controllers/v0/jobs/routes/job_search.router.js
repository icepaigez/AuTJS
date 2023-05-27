"use strict";

const express = require("express");
const router = express.Router();

const { getJobLinks } = require('./job_links');
const { getJobData } = require('./job_data');
const { get_job_prep } = require('./gpt');



router.post('/', (req, res) => {
	try {
		if (Object.keys(req.body).length != 0) {
			let resume = req.body.resume;
			let role = req.body.role
			console.log(role)
		}
		res.status(200).send('Data Received OK!');
	} catch(err) {
		console.err('something went wrong', err)
	}
});

exports.JobSearchRouter = router; 