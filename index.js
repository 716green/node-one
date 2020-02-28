const express = require('express')
const app = express()
const port = 3000
const path = require('path')

// Routing
// localhost:3000

// standard code from documentation example
//app.get('/', (req, res) => res.send('Hello World!')) // returns 'Hello World'
// app.get('/',... ...) gets the root directory. Likely works for API calls but to serve a static html page

app.use(express.static(__dirname + "/public"));

/*
    // localhost:3000/test
    app.get('/test', (req, res) => res.send('Hello Test!'))
*/


app.listen(port, () => console.log(`Server listening on port ${port}!`))