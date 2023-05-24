const { Product } = require("../../database/models");
const { validationResult } = require("express-validator");

module.exports = {
    getAll: async (req, res) => {
        try {
            
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
                products: PRODUCTS.map((product) => {
                    return {
                        id: product.id,
                        name: product.name,
                        description: product.description,
                        category_id: product.categories,
                        subcategory_id: product.subcategories,
                        detail: `http://localhost:3000/products/detail/${product.id}`,
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
                    imageURL: `http://localhost:3000/products/image/${PRODUCT_ID}`
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
    
}