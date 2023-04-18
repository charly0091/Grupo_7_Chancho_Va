module.exports = function(sequelize, DataTypes) {

    let alias = "Category";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true
        }
    };

    let config = {
        tableName: "categories",
        timestamps: false
    };

    const CATEGORY = sequelize.define(alias, cols, config);

    CATEGORY.associate = function(models) {
        CATEGORY.hasMany(models.Product, {
            as: "products",
            foreignKey: "category_id"
        });
    };
    return CATEGORY;


    
    }
