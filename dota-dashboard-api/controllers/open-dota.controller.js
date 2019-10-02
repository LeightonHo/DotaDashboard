const { openDotaService } = require("../services")

const getMatchHistory = async (accounts) => {
    console.log(`controller getMatchHistory. accounts: ${accounts}`)

    if (!accounts) {
        console.log('invalid account_list')
        throw new Error('accounts must be provided')
    }

    return await openDotaService.getMatchHistory(accounts)
}

module.exports = {
    getMatchHistory
}