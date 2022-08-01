const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const fs = require('fs')
require('dotenv').config()

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())

app.set('view engine', 'ejs');

// FOR STATIC FILES (css,js etc.)
app.use(express.static(__dirname + '/public'));

// home route
app.get('/', (req, res) => {
  let data = {
    foo: 'FOO',
    dbstring: process.env.DB_CONNECTION_STRING
  }
  res.render('index', data);
});

const listener = app.listen(process.env.PORT || 3001, () => {
  console.log('App listening on port:  ' + listener.address().port)
})
