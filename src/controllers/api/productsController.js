const { Product } = require("../../database/models");
const { validationResult } = require("express-validator");

module.exports = {
    getAll: async (req, res) => {
        try {
            // Obtén todos los productos, sus categorías y subcategorías asociadas
            const PRODUCTS = await Product.findAll({
                include: [
                        { association: "categories" },
                        { association: "subcategories" }
                    ]
            });

            

            const countByCategory = {};
            
            for (const producto of PRODUCTS) {
                const { category_id } = producto;
                if (countByCategory.hasOwnProperty(category_id)) {
                    countByCategory[category_id]++;
                } else {
                    countByCategory[category_id] = 1;
                }
              }
            
            const RESPONSE = {
                endpoint: "/products",
                data: PRODUCTS.map((product) => {
                    return {
                        id: product.id,
                        name: product.name,
                        description: product.description,
                        category_id: product.categories,
                        subcategory_id: product.subcategories,
                        detail: `http://localhost:3001/products/detail/${product.id}`,
                    };
                }),
                total: PRODUCTS.length,
                countByCategory
            };

            return res.status(200).json(RESPONSE);

        } catch (error) {
            return res.status(500).send(error);
        }
    },
    getOne: async (req, res) => {
        const PRODUCT_ID = req.params.id;

        try {
            const PRODUCT = await Product.findByPk(PRODUCT_ID, {
                include: [
                    { association: "categories" },
                    { association: "subcategories" }
                ]
            });

            if (PRODUCT !== null){
                const RESPONSE = {
                    endpoint: `/product/${PRODUCT_ID}`,
                    data: PRODUCT,
                    imageURL: `http://localhost:3001/products/image/${PRODUCT}`
                }

                return res.status(200).json(RESPONSE);
            }

            return res.status(400).json(`El producto con id: ${PRODUCT_ID} no existe`);

        } catch (error) {
            return res.status(500).send(error);
        }
    },
    store: async (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
          let { name, price, discount, subcategory_id, description } = req.body;
    
          let newProduct = {
            name,
            price,
            description,
            discount,
            subcategory_id,
          };
          
          try {
            const RESULT = await Product.create(newProduct);

            const RESPONSE = {
                endpoint: "/product",
                data: RESULT,
                msg: "Producto agregado correctamente",
            }

            res.status(201).json(RESPONSE);
          } catch (error) {
            res.status(500).send(error)
          };
        } else {
          return res.status(400).json(errors.mapped());
        }
    },
    update: async (req, res) => {

    },
    destroy: async (req, res) => {

    },
    pagedProducts : async (req, res) => {

        try {
            let page = parseInt(req.query.page) || -1; // Obtén el parámetro "page" de la URL (si está presente)
            
            let limit = 10; // Define el número de resultados por página
            if(page===-1){
                limit=10000000;
                page = 1;
            }
        
            const offset = (page - 1) * limit; // Calcula el offset basado en la página actual y los resultados por página

            const PRODUCTS = await Product.findAll();
        
            // Obtiene los productos de la base de datos utilizando el offset y limit
            const products = await Product.findAll({
                offset,
                limit,
                include: [
                    { association: "categories" },
                    { association: "subcategories" }
                ],
            });
            //array donde se va a guardar la cantidad de productos por categoría
            const countByCategory = {};
            //recorre el array de productos y cuenta la cantidad de productos por categoría
            for (const producto of products) {
                const name  = producto.categories.name;
                if (countByCategory.hasOwnProperty(name)) {
                    countByCategory[name]++;
                } else {
                    countByCategory[name] = 1;
                }
            }
        
            const count = await Product.count(); // Cuenta el total de productos
        
            const totalPages = Math.ceil(count / limit); // Calcula el total de páginas
        
            // Verifica si hay una próxima página
            const nextPage = page < totalPages ? `http://localhost:3001/api/products/?page=${page + 1}` : null;
        
            // Verifica si hay una página anterior
            const previousPage = page > 1 ? `http://localhost:3001/api/products/?page=${page - 1}` : null;
        
            // Crea la respuesta JSON con los productos y los enlaces a las páginas siguiente y anterior
            const response = {
                endpoint: "/products",
                products: products.map((product) => {
                    return {
                        id: product.id,
                        name: product.name,
                        description: product.description,
                        category_id: product.categories,
                        subcategory_id: product.subcategories,
                        detail: `http://localhost:3001/products/image/${product.id}`,
                    };
                }),
                count,
                countByCategory,
                nextPage,
                previousPage
            };
        
            res.json(response);
          } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
          }
        }
}