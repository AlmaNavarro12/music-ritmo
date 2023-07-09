const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Cancion = new Schema({
  nombre: {
    type: String
  },
  duracion: {
    type: String
  },
  artista: {
    type: String
  },
  genero:{
    type: String
  },
  anio: {
    type: Number
  }
},{
  collection: 'canciones'
})

module.exports = mongoose.model('Cancion', Cancion)