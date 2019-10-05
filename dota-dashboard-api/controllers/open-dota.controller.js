const { openDotaService } = require("../services")

const getMatchHistory = async (accounts) => {
    if (!accounts) {
        console.log('invalid account_list')
        throw new Error('accounts must be provided')
    }

    return await openDotaService.getMatchHistory(accounts)
}

const searchPlayers = async (persona_name) => {
    if (!persona_name) {
        return
    }

    return await openDotaService.searchPlayers(persona_name)
}

module.exports = {
    getMatchHistory,
    searchPlayers
}