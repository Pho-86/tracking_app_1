const express = require('express');

const ModelCMCStats = require('../../models/cmc_stats');

const ModelCurrentStats =require('../../models/current_stats')

const router = express.Router()

// get all data
router.get('/', (req, res, next) => {

    ModelCMCStats.cmc_stat_list((err, result) => {
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



//add new data & update current stat
router.post('/create', function(req, res, next) {

    if (
        req.body.cmc_tvl_count != "" &&
        req.body.key_value&&
        req.body.record_time

    ) {
        ModelCMCStats.create_cmc_stat(req.body, (err, result) => {
            if (err) {
                next(err)
            } else {
                try {
                    ModelCurrentStats.update_current_cmc_stat({
                        key_value: req.body.key_value,
                        record_time: req.body.record_time,
                        id: req.params.id,
                    }, (err, result) => {
                        if (err) {
                            next(err)
                        } else {
            
                            return res.json({
                                status: 200,
                                message: 'OK'
                            })
                            
                        }
                    })
                } catch (error) {
                    next(error)
                }
         
            }
            
        })
    } else {
        return res.status(400).json({
            status: 400,
            message: 'Bad Request'
        })
    }
    
});





module.exports = router