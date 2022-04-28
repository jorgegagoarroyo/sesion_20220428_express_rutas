const express = require("express")
const partidas = require("./src/rutas/partidas")
const usuarios = require("./src/rutas/usuarios")
const app = express()

app.use("/web", express.static(__dirname + "/src/public"))

//middleware para rutas de la api
app.use("/api/partidas", partidas)

app.use("/api/usuarios", usuarios)

app.get("/", (req, res)=>{
    res.send("estas en la raiz")
})






const PORT = 3000
app.listen(PORT, ()=>{
    console.log("estas escuchando en el puerto ", PORT)
})