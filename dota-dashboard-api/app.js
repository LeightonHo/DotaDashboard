const express = require('express')
const app = express()
const port = 3001
const https = require('https')

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/history', (req, res) => {
    let result = '';

    console.log(req)

    const request = https.request('https://api.opendota.com/api/matches/271145478?api_key=YOUR-API-KEY', inner_res => {
        inner_res.setEncoding('utf8');

        inner_res.on('data', chunk => {
            result += chunk;
        });

        inner_res.on('end', () => {
            let obj = JSON.parse(result);

            res.send(result);
        })
    });

    request.on('error', error => {
        res.send(`error: ${error}`);
    })

    request.end();
})

//https://api.opendota.com/api/players/94151040/wl?api_key=YOUR-API-KEY

app.listen(port, () => console.log(`Example app listening on port ${port}!`))