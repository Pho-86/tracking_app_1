var express = require('express');
var router = express.Router();

const twitter_stats_route = require('../controllers/twitter_stats');
router.use('/twitter_stats', twitter_stats_route)

const facebook_stats_route = require('../controllers/facebook_stats');
router.use('/facebook_stats', facebook_stats_route)


const cmc_stats_route = require('../controllers/cmc_stats');
router.use('/cmc_stats', cmc_stats_route)

const current_stats_route = require('../controllers/current_stats');
router.use('/current_stats', current_stats_route)

module.exports = router;
