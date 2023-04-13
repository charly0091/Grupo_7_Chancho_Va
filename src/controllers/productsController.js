const {
  Product,
  Category,
  SubCategory,
  Role,
  Sequelize,
} = require("../database/models");
//const { Op } = Sequelize;

const controller = {
  products: (req, res) => {
    Product.findAll()

      .then((products) => {
        return res.render("products/products", {
          products,
          session: req.session,
        });
      })
      .catch((error) => console.log(error));
  },

  /*detail: (req, res) => {
        let product = products.find(product => product.id == req.params.id);
        let categoriasId = products.filter(categorias => categorias.subCategory === "in-sale");
        categoriasId.length = 6 
        let categoriasId2 = products.filter(categorias => categorias.subCategory === "visited");
        categoriasId2.length = 6 
        res.render("products/detail", { product, style : "detail.css" , toThousand, categoriasId, categoriasId2, session: req.session})
    },*/
  detail: (req, res) => {
    let productId = Number(req.params.id);
    Product.findByPk(productId)

   /* let inSale = Product.findAll({
      where: {
        subCategory_id: 1,
      },
    });
    let visited = Product.findAll({
      where: {
        subCategory_id: 2,
      },
    });

    Promise.all([productId, inSale, visited])*/

      .then((product) => {
        res.render("products/detail", {
          product,
         // inSale,
         // visited,
          style: "detail.css",
          session: req.session,
        })})
      

      .catch((error) => console.log(error));
  },
  /*     create: (req, res) => {
        res.render("./admin/createProduct" , { style : "createProduct.css"})
    },
    edit: (req, res) => {
         res.render("./admin/editProduct" , { style : "editProduct.css"}) 
    }, */
  carrito: (req, res) => {
    res.render("products/carrito", {
      style: "carrito.css",
      session: req.session,
    });
  },
  familiares: (req, res) => {
    const categoryId = req.params.id;

    Product.findAll(categoryId, {
      include: [
        {
          association: "categories",
        },
      ],
    })
      .then((categoriasFamiliares) => {
        return res.render("products/familiares", {
          style: "familiares.css",
          categoriasFamiliares,
          session: req.session,
        });
      })
      .catch((error) => console.log(error));
  },

  estrategia: (req, res) => {
    const categoryId = req.params.id;

    Product.findAll(categoryId, {
      include: [
        {
          association: "categories",
        },
      ],
    })
      .then((categoriasEstrategia) => {
        return res.render("products/estrategia", {
          style: "estrategia.css",
          categoriasEstrategia,
          session: req.session,
        });
      })
      .catch((error) => console.log(error));
  },
  previa: (req, res) => {
    const categoryId = req.params.id;

    Product.findAll(categoryId, {
      include: [
        {
          association: "categories",
        },
      ],
    })
      .then((categoriasPrevia) => {
        return res.render("products/previa", {
          style: "previa.css",
          categoriasPrevia,
          session: req.session,
        });
      })
      .catch((error) => console.log(error));
  },
};

module.exports = controller;
