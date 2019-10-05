const express = require('express')
const { openDotaController, steamController} = require('../controllers')
const router = express.Router();

// Open Dota routes
router.get('/matchHistory', async (req, res) => {
    const accounts = req.query.accounts

    await openDotaController.getMatchHistory(accounts).then(response => {
        res.status(200).send(response)
    }).catch(error => {
        res.status(403).send(error)
    })
})

router.get('/searchPlayer', async (req, res) => {
    const persona_name = req.query.persona_name

    await openDotaController.searchPlayers(persona_name).then(response => {
        res.status(200).send(response)
    }).catch(error => {
        res.status(403).send(error)
    })
})

// Steam routes
router.get('/steamMatchHistory', async (req, res) => {
    const account_id = req.query.account_id

    await steamController.getMatchHistory(account_id).then(result => {
        res.status(200).send(result)
    }).catch(error => {
        res.status(403).send(error)
    })
})

router.get('/matchDetails', async (req, res) => {
    const match_id = req.query.match_id

    await steamController.getMatchDetails(match_id)
})

module.exports = router