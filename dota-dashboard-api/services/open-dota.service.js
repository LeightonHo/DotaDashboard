const request = require('request-promise');

const getMatchHistory = async (accounts) => {
    console.log('service getMatchHistory')
    let matchHistory = {}

    for (const accountID of accounts.split(',')) {
        // fetch the recent match history for each account
        console.log(`get match history for ${accountID}`)

        await getMatchHistoryByAccountID(accountID).then(result => {
            matchHistory[accountID] = result
        })
    }

    console.log(`there are ${matchHistory.length} result(s)`)

    let result = processMatchHistory(matchHistory)

    return result
}

const getMatchHistoryByAccountID = async (accountID) => {
    const recentMatchesUrl = `https://api.opendota.com/api/players/${accountID}/matches?limit=10&api_key=YOUR-API-KEY`
    console.log(`service getMatchHistoryByAccountID ${recentMatchesUrl}`)
    let result = null

    await request(recentMatchesUrl).then(response => {
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

module.exports = {
    getMatchHistory
}