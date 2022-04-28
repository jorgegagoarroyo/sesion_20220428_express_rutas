const express = require("express")
const router= express.Router()

router.get("/", (req, res)=>{
    res.send("estas en api/partidas")
})


module.exports = router