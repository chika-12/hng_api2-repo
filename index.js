const express = require("express")
const axios = require("axios")
const cors = require("cors")
const numberWork = require("./number_work_out")
const app = express()
const port = process.env.PORT || 3000;
app.use(cors())

app.get("/:num", async(req, res)=>{
    const number  = req.params.num
    if (isNaN(number)){
        res.status(400).json({number: "alphabet", error: "true"});
    }else{
        try{
            const response = await numberWork(number)
            res.status(200).json(response)
        }catch(error){
            res.status(500).send("Failed to fetch data")
            console.log(error)
        }
    }
})


app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})