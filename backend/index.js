const express = require('express');

const app = express();
app.use(express.json())
//Métodos
// GET, buscando uma informação;
// POST, criar uma informação;
// PUT, editar uma recurso na aplicação;
// DELETE, remover informação;

//Tipos de parametros
// Query Params: request.query  (filtros, ordenação, paginação,...)
// Route Params: request.params - PUT, DELETE (Identificar um recurso na alteeração ou remoção)
// Body: POST request.body (Dados para criação ou alteração de um registro)


app.get('/', (request, response) => {
  return response.json({message:'Hello World'});
});

app.listen(3333);