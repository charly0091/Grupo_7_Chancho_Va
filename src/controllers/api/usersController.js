const { User } = require("../../database/models");

module.exports = {
    usersList: async (req, res) => {
        try{
            const USERS = await User.findAll();
            const RESPONSE = {
                meta: {
                    status: 200,
                    count: USERS.length,
                    url: "/api/users"
                },
                data: USERS.map(user => {
                    return {
                        id: user.id,
                        first_name: user.first_name,
                        last_name: user.last_name,
                        email: user.email,
                        detail: `http://localhost:3000/api/users/${user.id}`
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
                    image: `http://localhost:3000/users/image/${USER_ID}`,
                }
            
            }   
            return res.status(200).json(RESPONSE);
        }

        return res.status(400).json(`El usuario con id: ${USER_ID} no existe`);

        } catch (error) {
            return res.status(500).send(error);
        }
    }
}