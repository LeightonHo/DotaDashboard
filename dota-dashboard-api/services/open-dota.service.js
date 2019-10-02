const rp = require('request-promise');

const getMatchHistory = async (accounts) => {
    console.log('service getMatchHistory')
    let matchHistory = []

    for (const accountID of accounts.split(',')) {
        // fetch the recent match history for each account
        console.log(`get match history for ${accountID}`)

        await getMatchHistoryByAccountID(accountID).then(result => {
            console.log(`appending ${result}`)
            matchHistory.push(JSON.parse(result))
        })
    }

    console.log(`there are ${matchHistory.length} result(s)`)

    return matchHistory
}

const getMatchHistoryByAccountID = async (accountID) => {
    const recentMatchesUrl = `https://api.opendota.com/api/players/${accountID}/matches?limit=10&api_key=YOUR-API-KEY`
    console.log(`service getMatchHistoryByAccountID ${recentMatchesUrl}`)
    let result = ''

    await rp(recentMatchesUrl).then(response => {
        result += response
    })

    return result
}

module.exports = {
    getMatchHistory
}