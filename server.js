const express = require("express")
const app = express()

const PORT = 8000
app.get("/", (req, res)=>{
    res.send("Hello Google how are you ?")
})

app.listen(PORT, ()=>{
    console.log("You server is runnning", PORT)
})