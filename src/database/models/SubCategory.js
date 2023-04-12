module.exports = (sequelize, dataTypes) => {
    let alias = "SubCategory";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(50),
            allowNull: false,
            unique: true
        }
    };
    let config = {
        tableName: "subcategories",
        timestamps: false
    };
    const SUBCATEGORY = sequelize.define(alias, cols, config);

    SUBCATEGORY.associate = (models) => {
        SUBCATEGORY.hasMany(models.Product, {
            as: "products",
            foreignKey: "subCategory_id"
        });
    };
    
    return SUBCATEGORY;
}