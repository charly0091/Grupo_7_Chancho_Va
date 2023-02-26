update: (req, res) => {
    let errors = validationResult(req);

    if(req.fileError){
        errors.errors.push({msg: req.fileError})
    }

    if(errors.isEmpty()){


    let productId = Number(req.params.id);
    let productToEdit = products.find(product => product.id == productId);
    productToEdit.id = productId;
    productToEdit.name = req.body.name;
    productToEdit.price = req.body.price;
    productToEdit.discount = req.body.discount;
    productToEdit.category = req.body.category;
    productToEdit.subCategory = req.body.subCategory;
    productToEdit.description = req.body.description;
    req.body.oldImage = productToEdit.image;
    productToEdit.image = req.file ? req.file.filename : null;

    if(productToEdit.image == null){
        productToEdit.image = req.body.oldImage;
    } else{
        fs.unlinkSync(`public/images/${req.body.oldImage}`)
    }
    
    res.send(productToEdit)
    writeJSON("productsDataBase.json", products);
    res.redirect("/admin/adminPerfil");
    } else{
        let productId = Number(req.params.id);
        let productToEdit = products.find(product => product.id === productId);

        if(productToEdit){
            res.render("admin/editProduct", {
                productToEdit, 
                categories,
                subCategories,
                errors: errors.mapped(),
                old: req.body,
        })
    } else{
        res.send("No se encontro el producto");
        }
     }



}