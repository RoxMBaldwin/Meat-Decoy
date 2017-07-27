const express = require('express')
const router = express.Router()
const queries = require('../queries')
const knex = require('knex')

router.get('/meatdecoy', (request, response) => {
  queries.getAll()
  .then(function(maslow){
    response.json(maslow)
  })
})

router.get('/meatdecoy/:id', (request, response) => {
  queries.getById(request.params.id)
  .then(data =>{
    response.json(data)
  })
})

router.post('/meatdecoy', (request, response) => {
  var body = request.body
  queries.postNew(body)
  .then(function(message){
  response.json({message:'made new'})
  })
})

module.exports = router
