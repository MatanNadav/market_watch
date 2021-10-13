const marketService = require('./market.service')


module.exports = {
    fetchMarketStock,
}

async function fetchMarketStock(req, res) {
    const {request} = req.body
    try {
        let data = await marketService.getStockFromApi(request);
        res.json(data)
    }
    catch (err) {
        res.status('500').send('could not fetch stock')
    }
}