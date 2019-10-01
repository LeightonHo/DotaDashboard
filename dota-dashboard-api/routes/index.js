const express = require('express')
const { openDotaController } = require('../controllers')
const router = express.Router();

router.get('/matchHistory', (req, res) => {
    console.log(req.body)

    const { accountID_list, username } = req.body

    openDotaController.getMatchHistory(accountID_list).then(result => {
        res.send(result)
    })
})

router.get('/recentMatches', (req, res) => {
    
})

module.exports = router