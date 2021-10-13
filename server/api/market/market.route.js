const express = require('express')
const marketController = require('./market.controller')
const router = express.Router()
module.exports = router

router.post('/', marketController.fetchMarketStock)


