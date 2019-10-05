const request = require('request-promise');

const opendota_api = 'https://api.opendota.com/api'
const api_key = 'YOUR-API-KEY'

const getMatchHistory = async (accounts) => {
    let matchHistory = {}
    let account_list = accounts.split(',')

    await Promise.all(account_list.map(async (account) => {
        await getMatchHistoryByAccountID(account).then(result => {
            matchHistory[account] = result
        })
    })).catch(error => {
        console.error(error)
    })

    let result = processMatchHistory(matchHistory)

    return result
}

const getMatchHistoryByAccountID = async (accountID) => {
    const url = `${opendota_api}/players/${accountID}/matches?limit=10&api_key=${api_key}`
    let result = null

    await request(url).then(response => {
        result = JSON.parse(response)
    })

    return result
}

const processMatchHistory = (matchHistory) => {
    console.log('processing the result set')
    let result = []

    for (let account_id in matchHistory) {
        for (match of matchHistory[account_id]) {
            match.start_time_utc = new Date(match.start_time * 1000).toUTCString()
            match.account_id = account_id
            
            result.push(match)
        }
    }

    // TODO: sort by player_slot

    // order the results by game start time descending
    result = result.sort((a, b) => b.start_time - a.start_time)

    return result
}

const searchPlayers = async (persona_name) => {
    const url = `${opendota_api}/search?q=${persona_name}&api_key=YOUR-API-KEY`
    let result = []

    await request(url).then(response => {
        result = JSON.parse(response)
    })

    console.log(result[0])
    console.log(result[0].last_match_time)

    // sort by last match time descending
    // result = result.sort((a, b) => new Date(b.last_match_time) - new Date(a.last_match_time)) 

    // sort by similarity descending
    result = result.sort((a, b) => b.similarity - a.similarity) 

    return result
}

module.exports = {
    getMatchHistory,
    searchPlayers
}