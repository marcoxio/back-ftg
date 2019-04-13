const mongoose = require('mongoose')
const Schema = mongoose.Schema


const usuarioSchema = new Schema({
    cedula: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        unique: true
    },
    nombre: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    apellidos: {
        type: String,
        required: false,
        trim: true,
        minlength: 1
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        unique: true,
    },
    role: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: false,
    }

}, {
    collection: 'usuarios'
})

const Usuario = mongoose.model('Usuario', usuarioSchema)

module.exports = Usuario