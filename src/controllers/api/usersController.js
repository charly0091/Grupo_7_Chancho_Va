const { User } = require("../../database/models");

module.exports = {
    usersList: async (req, res) => {
        try{
            const USERS = await User.findAll();
            
const RESPONSE = {
                count: USERS.length,
                endpoint: "/users",
                data: USERS.map(user => {
                    return {
                        id: user.id,
                        first_name: user.first_name,
                        last_name: user.last_name,
                        email: user.email,
                        detail: `http://localhost:3001/api/users/${user.id}`
                    }
                })
            }
        

        return res.status(200).json(RESPONSE);
        } catch (error) {
            return res.status(500).send(error);
        }
    },
    usersDetail: async (req, res) => {
            

        try {
            const USER_ID = req.params.id;
            const USER = await User.findByPk(USER_ID);

            

        if(USER !== null){
            const RESPONSE = {
                meta: {
                    status: 200,
                    url: `/api/users/${USER_ID}`
                },
                data: {
                    id: USER.id,
                    first_name: USER.first_name,
                    last_name: USER.last_name,
                    email: USER.email,
                    image: `http://localhost:3001/users/image/${USER_ID}`,
                }
            
            }   
            return res.status(200).json(RESPONSE);
        }

        return res.status(400).json(`El usuario con id: ${USER_ID} no existe`);

        } catch (error) {
            return res.status(500).send(error);
        }
    },
    pagedUsers: async (req, res) => {

        try {
            let page = parseInt(req.query.page) || -1; // Obtén el parámetro "page" de la URL (si está presente)
            let limit = 10; // Define el número de resultados por página

            if(page === -1){
                limit = 1000000;
                page = 1;
            }

        
            const offset = (page - 1) * limit; // Calcula el offset basado en la página actual y los resultados por página
        
            // Obtiene los usuarios de la base de datos utilizando el offset y limit
            const users = await User.findAll({
              offset,
              limit,
            });
        
            const count = await User.count(); // Cuenta el total de usuarios
        
            const totalPages = Math.ceil(count / limit); // Calcula el total de páginas

             // Verifica si hay una próxima página
             const nextPage = page < totalPages ? `http://localhost:3001/api/users/?page=${page + 1}` : null;
        
             // Verifica si hay una página anterior
             const previousPage = page > 1 ? `http://localhost:3001/api/users/?page=${page - 1}` : null;

            const RESPONSE = {
                count,
                users: users.map(user => {
                    return {
                        id: user.id,
                        first_name: user.first_name,
                        last_name: user.last_name,
                        email: user.email,
                        detail: `http://localhost:3001/users/image/${user.id}`
                    }
                }),
                nextPage,
                previousPage
            }
        
            res.json(RESPONSE);
          } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
          }

    }
}