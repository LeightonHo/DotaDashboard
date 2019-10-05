const request = require('request-promise');

const steam_api = 'https://api.steampowered.com'
const dota_interface = 'IDOTA2Match_570'
const api_key = '732E2C55121E4B98FD7118733B5CEF47'

const getMatchHistory = async (account_id) => {
    const url = `${steam_api}/${dota_interface}/GetMatchHistory/v1?account_id=${account_id}&matches_requested=10&key=${api_key}`
    let result = null

    await request(url).then(response => {
        result = JSON.parse(response)
    })

    // enrich history with match details
    let matches = result.result.matches
    
    await Promise.all(matches.map(async (match) => {
        let match_id = match.match_id

        await getMatchDetails(match_id).then(response => {
            match.match_details = response.result
        })
    }))

    return matches
}

const getMatchDetails = async (match_id) => {
    const url = `${steam_api}/${dota_interface}/GetMatchDetails/v1?match_id=${match_id}&key=${api_key}`
    let result = null

    console.log(url)

    await request(url).then(response => {
        result = JSON.parse(response)
    }).catch(error => {
        result = error
    })

    return result
}

module.exports = {
    getMatchHistory,
    getMatchDetails
}