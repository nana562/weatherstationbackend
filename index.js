const express = require('express')
const axios = require('axios');
require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT
const app = express(); 

app.use(cors());

app.get('/getWeather/:location', (req, res)=>{
  const location = req.params.location
  axios.get(`${process.env.API_URL}${location}&units=${process.env.API_UNIT}&APPID=${process.env.API_KEY}`)
    .then((response)=>{
      res.send(response.data)
    })
})
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})