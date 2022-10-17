const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./routers/user-router')
const port = 3000

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
app.use(router)

app.listen(port, (err,req) =>{
    if(err){
        console.log(err)
    }else{
        console.log("Server for simple vue app is running at port 3000")
    }
})