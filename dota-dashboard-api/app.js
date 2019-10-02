const express = require('express')
const app = express()
const port = 3001
const routes = require('./routes')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


app.get('/', (req, res) => res.send('hello world'))
app.use('/api', routes)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))