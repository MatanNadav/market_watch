import axios from 'axios';
const BASE_URL = process.env.NODE_ENV === "production" ? "/api/" : "//localhost:3000/api/"

const searchMarket = async (request) => {
    const {data} = await axios.post(`${BASE_URL}market`, {request});
    return data;
}

export default searchMarket;