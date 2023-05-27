"use strict";

const express = require("express");
const router = express.Router();


const { JobSearchRouter } = require('./v0/jobs/routes/job_search.router');


router.use('/job_search', JobSearchRouter);



router.get('/', (req, res) => {
	res.send('v0')
})
 
exports.IndexRouter = router;