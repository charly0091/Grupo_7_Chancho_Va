module.exports = function(sequelize, DataTypes) {

    let alias = "Role";

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
        tableName: "roles",
        timestamps: false
    };

    const ROLE = sequelize.define(alias, cols, config);

    ROLE.associate = function(models) {
        ROLE.hasMany(models.User, {
            as: "users",
            foreignKey: "role_id"
        });
    };
    return ROLE;


    
    }
