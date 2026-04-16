const express = require("express")
const app = express()

app.get("/sensor", (req, res) => {
    const leitura = {
        temperatura: temp,
        umidade: hum,
        data: new Date()
    }

    dados.push(leitura)
    console.log(leitura)

    res.send("OK")
})