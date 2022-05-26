const express = require('express')
const app = express()

app.get('/usuarios',(req,res)=>{

    return res.json({"nome":"iago"})
})
app.post('/usuarios',(req,res)=>{

    return res.json({"nome":"João"})
})
app.get('/frutas',(req,res)=>{
    return res.send("pera,uva")
})


app.listen(3001, (req,res)=>{
    console.log("servidor on")
})