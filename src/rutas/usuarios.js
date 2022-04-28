const express = require("express")
const router = express.Router()

//simulamos una peticion  a la base de datos (DB)
const datosSimuladosUsuarios = 
[
    {
        nombre: "juanjo",
        apellido: "Dido",
        email: "didojuanjo@gamil.com"
    },
    {
        nombre: "maria",
        apellido: "cuestate",
        email: "cuestatemaria@gmail.com"
    },
    {
        nombre: "tomas",
        apellido: "turbao",
        email: "turbaotomas@gmail.com"
    }
]

//peticion get a la ruta localhost:PORT/api/usuarios
// envia un json con los usuarios de la DB
router.get("/", (req, res)=>{
    res.json(datosSimuladosUsuarios)
})

router.post("/", (req,res)=>{
    res.send("estas escribiendo en usuarios DB")
})

router.put("/", (req, res)=>{
    res.send("modificando usuario")
})

router.delete("/", (req,res)=>{
    res.send("esta borrando usuarios")
})

module.exports = router