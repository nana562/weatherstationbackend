const express = require('express')
const axios = require('axios');
require('dotenv').config();
const cors = require('cors');
const app = express(); 

app.use(cors());

app.get('/:location', (req, res)=>{
  const location = req.params.location
  axios.get(`${process.env.API_URL}${location}&units=${process.env.API_UNIT}&APPID=${process.env.API_KEY}`)
    .then((response)=>{
      res.send(response.data)
    })
})

app.get('/test', (req, res)=>{
  res.send("Endpoint working")
})

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})