const Temperatura = require("../models/temperatura")

const receberTemperatura = (req, res) => {

    const {temperatura} = req.body
    const sensor = new Temperatura(temperatura)
    console.log(sensor)

    res.json({
        mensagem:"Temperatura recebida",
        dados:sensor
    })
}

module.exports = {
    receberTemperatura
}