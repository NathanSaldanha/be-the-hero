const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
/*Metodos HTTP
 * 
 * GET: Buscar/Listar uma Informação do back-end
 * POST: Criar uma Informação no back-end
 * PUT: Altera uma Informação no back-end
 * DELETE: Deletar uma Informação no back-end
 * 
 * Tipos de parâmetros:
 * 
 * Query: Parâmetros nomeados enviados na rota após "?"(Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */
