const express = require('express')
const { openDotaController } = require('../controllers')
const router = express.Router();

router.get('/matchHistory', async (req, res) => {
    console.log(req.query)

    const accounts = req.query.accounts

    await openDotaController.getMatchHistory(accounts).then(result => {
        res.status(200).send(result)
    }).catch(error => {
        res.status(403).send(error)
    })
})

router.get('/recentMatches', (req, res) => {
    
})

module.exports = router