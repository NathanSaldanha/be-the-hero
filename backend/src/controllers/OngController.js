const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {/**Listagem do Metodos das tabelas */
    async index (request, response){
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response){/**Criação das Tabelas */
        const {name, email, whatsapp, city, uf} = request.body;/**Guardar cada um desses dados em uma variavel, para haver controler dados Usuario */

        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('ongs').insert({
           id,
           name,
           email,
           whatsapp,
           city,
           uf, 
        })
    
        return response.json({id});
    }
};