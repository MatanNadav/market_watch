const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 3000;

const app = express()

app.use(bodyParser.json());
app.use(express.static( 'public' ));

if (process.env.NODE_ENV !== 'production') {
    const corsOptions = {
        origin: 'http://localhost:8080',
        credentials: true
    };
    app.use(cors(corsOptions));
}

const marketRoute = require('./api/market/market.route');
app.use('/api/market', marketRoute);

app.listen(port,
    () => console.log(`Empire Charts listening on port ${port}!`))