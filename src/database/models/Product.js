module.exports = (sequelize, dataTypes) => {
    const alias = "Product";

    const cols = {
        id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        price: {
            type: dataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        discount: {
            type: dataTypes.INTEGER(11),
        },
        description: {
            type: dataTypes.STRING(800),
            allowNull: false,
        },
        image: {
            type: dataTypes.STRING(100),
            //defaultValue: 'imageDefault.jpg',
        },
        subCategory_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
        },
        category_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
        },
    }

    const config = {
        tableName: "products",
        timestamps: false,
    }

    const PRODUCT = sequelize.define(alias, cols, config);

    PRODUCT.associate = (models) => {
        PRODUCT.belongsTo(models.SubCategory, {
            as: "subcategories",
            foreignKey: "subCategory_id",
        });
        
        PRODUCT.belongsTo(models.Category, {
            as: "categories",
            foreignKey: "category_id",
        });
      
    }

    return PRODUCT;
}