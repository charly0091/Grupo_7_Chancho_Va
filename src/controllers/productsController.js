const path = require("path");

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
    

    Product.findAll({
      where : {
        category_id: 1
      },
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

    Product.findAll({
      where : {
        category_id: 3
      },
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
    Product.findAll({
      where : {
        category_id: 2
      },
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
  image: (req, res) => {
    
    let productId = Number(req.params.id);

    Product.findByPk(productId)
      .then((product) => {
        res.sendFile(path.resolve(__dirname, "../../public/images/" + product.image));
      })
      .catch((error) => console.log(error));
  },

ofertas: (req, res) => {
  let inSale = Product.findAll({
    where: {
        subCategory_id: 1
    }
})
/*let visited = Product.findAll({
    where: {
        subCategory_id: 2
    }
})*/
Promise.all([inSale])
.then(([inSale]) => {
    res.render("products/ofertas", {
        inSale,
        style: "styles.css",
        session: req.session
    })
})
.catch(error => res.send(error))
},
productsList: (req, res) => {
  Product.findAll()

    .then((products) => {
      return res.render("products/productsList", {
        products,
        style: "styles.css",
        session: req.session,
      });
    })
    .catch((error) => console.log(error));
}
  }
module.exports = controller;
