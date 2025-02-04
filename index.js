const express = require("express")
const axios = require("axios")
const cors = require("cors")

const app = express()
const port = process.env.port || 3000;
app.use(cors())

app.get("/", (req, res)=>{
    res.send("Hello World")
})


app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})