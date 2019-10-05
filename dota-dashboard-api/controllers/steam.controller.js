const { steamService } = require("../services")

const getMatchHistory = async (account_id) => {
    if (!account_id) {
        return
    }

    return await steamService.getMatchHistory(account_id)
}

const getMatchDetails = async (match_id) => {
    if (!match_id) {
        return
    }

    return await steamService.getMatchDetails(match_id)
}

module.exports = {
    getMatchHistory,
    getMatchDetails
}