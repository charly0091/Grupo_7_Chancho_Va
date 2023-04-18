const {
  Product,
  Category,
  SubCategory,
  Sequelize,
} = require("../database/models");
const { Op } = Sequelize;

const controller = {
  
  detail: (req, res) => {
    let productId = Number(req.params.id);
    let product = Product.findByPk(productId);

    let inSale = Product.findAll({
      where: {
        subCategory_id: 1,
      },
    });
    let visited = Product.findAll({
      where: {
        subCategory_id: 2,
      },
    });

    Promise.all([product, inSale, visited])

      .then(([product, inSale, visited]) => {
        return res.render("products/detail", {
          product,
          inSale,
          visited,
          style: "detail.css",
          session: req.session,
        });
      })

      .catch((error) => console.log(error));
  },
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
