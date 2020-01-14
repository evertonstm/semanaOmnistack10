const express = require('express');

const app = express();

// GET, buscando uma informação;
// POST, criar uma informação;
// PUT, editar uma recurso na aplicação;
// DELETE, remover informação;

app.get('/', (request, response) => {
  return response.json({message:'Hello World'});
});

app.listen(3333);