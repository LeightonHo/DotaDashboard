const { openDotaService } = require("../services")

const getMatchHistory = async (accountID_list) => {
    console.log('controller getMatchHistory')

    return await openDotaService.getMatchHistory(accountID_list)
}

module.exports = {
    getMatchHistory
}