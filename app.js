const express = require('express')
const app = express()

app.get('/usuarios',(req,res)=>{

    return res.send("ola mundo")
})


app.listen(3001, (req,res)=>{
    console.log("servidor on")
})