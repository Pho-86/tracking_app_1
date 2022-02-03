const express = require('express');

const ModelCurrentStats = require('../../models/current_stats');

const router = express.Router()

// get all data
router.get('/', (req, res, next) => {

    ModelCurrentStats.current_stat_list((err, result) => {
        if (err) {
            next(err)
        }
        return res.json(
            {
                status: 200,
                data: result
            }
        )
    })
})






module.exports = router