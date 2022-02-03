const express = require('express');

const ModelFacebookStats = require('../../models/facebook_stats');
const ModelCurrentStats = require('../../models/current_stats')

const router = express.Router()

// get all data
router.get('/', (req, res, next) => {

    ModelFacebookStats.facebook_stat_list((err, result) => {
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
router.post('/createfbf', function(req, res, next) {

    if (
        req.body.fb_follower_count != "" &&
        req.body.key_value&&
        req.body.record_time

    ) {
        ModelFacebookStats.create_fbf_stat(req.body, (err, result) => {
            if (err) {
                next(err)
            } else {
                try {
                    ModelCurrentStats.update_current_fbf_stat({
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

//add new data & update current stat
router.post('/createfbl', function(req, res, next) {

    if (
        req.body.fb_like_count != "" &&
        req.body.key_value&&
        req.body.record_time

    ) {
        ModelFacebookStats.create_fbl_stat(req.body, (err, result) => {
            if (err) {
                next(err)
            } else {
                try {
                    ModelCurrentStats.update_current_fbl_stat({
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