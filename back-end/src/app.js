const express = require ('express')
const app = express()
const helmet = require('helmet')

const router = require('./routes')

app.use(
    helmet({
      contentSecurityPolicy: false,
      xssFilter: false
    })
  );  

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use('/', router)

module.exports = app;