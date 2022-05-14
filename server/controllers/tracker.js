const DBactions = require('../db/actions')
const { resWithStatus } = require('../utils');

const getDate = async (req, res) => {
    console.log("shlomo")
    const result = await DBactions.getUser(req.body._id)
    if(result.details.lastMenstruation) resWithStatus(res, true, 200, result.details.lastMenstruation)
}


module.exports = {getDate}