const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.connection.openUri('mongodb://localhost:27017/tdg', (err, res) => {
    if (err) throw err
    console.log('Base de datos: \x1b[32m%s\x1b[0m', 'Online')
})


let app = express()
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.status(200).json({
        OK: true,
        msg: 'Servicio funcionando'
    })
})

app.post('/', (req, res) => {
    res.status(200).json({
        OK: true,
        msg: 'Servicio funcionando'
    })
})

app.listen(PORT = 8080, () => {
    console.log('Aplicación corriendo en el puerto 8080. \x1b[32m%s\x1b[0m', 'Online')
})