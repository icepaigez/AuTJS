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
				let url_array = await getJobLinks(role);
				if (url_array) {
					let job_desc_array = await getJobData(url_array);
					if (job_desc_array) {
						let resume_array = await get_job_prep(job_desc_array, resume, role)
						if (resume_array) {
							console.log('from the router', resume_array)
							res.status(200).send({ 'resumes':resume_array })
						}
					}
				}
			} else {
				res.status(500).send({ 'error': 'empty role entered' })
			}
		}
	} catch(err) {
		console.error('something went wrong', err)
	}
});

exports.JobSearchRouter = router; 