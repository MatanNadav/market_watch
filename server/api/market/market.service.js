const axios = require('axios');
const BASE_URL = 'https://www.fxempire.com/api/v1/en/stocks/chart/candles';


module.exports = {
    getStockFromApi,
}

async function getStockFromApi(request) {
    const params = formatQuery(request);
    try {
        const res = await axios.get(`${BASE_URL}/?${params}`)
        return res.data
    }
    catch (err) {
        console.warn('Something went wrong while fetching stock', err)
        throw err;
    }
}

function formatQuery(req) {
    // Formatting object and returning query string
    return Object.entries(req).reduce((list, [key, value]) => {
        return (req[key].length > 0) ? [...list, `${key}=${value}`] : [...list];
    } ,[]).join('&');
}