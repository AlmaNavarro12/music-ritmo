const express = require('express')
const app = express()
const cancionRuta = express.Router()

//declaramos un objeto modelo
let Cancion = require('../models/Cancion')


//agregar una nueva Cancion
cancionRuta.route('/create').post((req,res) =>{
  Cancion.create(req.body)
    .then((data) => {
      console.log('Se inserto el documento correctamente.')
      res.send(data)
    })
    .catch((err) =>{
      console.log(err)
    })
})

//Obtener todos las canciones
cancionRuta.route('/canciones').get((req,res)=>{
  Cancion.find()
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      console.log(err)
    })
})

// Obtener canción por su id
cancionRuta.route('/cancion/:id').get((req,res) => {
  Cancion.findById(req.params.id)
    .then((data) =>{
      res.send(data)
    })
    .catch((err) => {
      console.log(err)
    })
})

// Actualizar usuario
cancionRuta.route('/update/:id').put((req,res) =>{
  Cancion.findByIdAndUpdate(req.params.id, {
    $set:req.body
  })
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    console.log(err)
  })
})

// Eliminar usuario
cancionRuta.route('/delete/:id').delete((req,res) => {
  Cancion.findByIdAndRemove(req.params.id)
    .then((data) =>{
      console.log('Se elimino el documento correctamente.')
      res.send(data)
    })
    .catch((err) => {
      console.error(err)
    })
})

module.exports = cancionRuta;