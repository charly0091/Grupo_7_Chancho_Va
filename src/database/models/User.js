module.exports = (sequelize, dataTypes) => {
    const alias = "User";

    const cols = {
        id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        first_name: {
            type: dataTypes.STRING(100),
        },
        last_name: {
            type: dataTypes.STRING(100),
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false,
            unique: true,
        },
        password: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        role_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            defaultValue: 0,
        },
        avatar: {
            type: dataTypes.STRING(100),
            allowNull: false,
            defaultValue: "defaultImagePerfil.png"
        },
    }

    const config = {
        tableName: "users",
        timestamps: false,
    }

    const USER = sequelize.define(alias, cols, config);

    USER.associate = (models) => {
        USER.hasMany(models.Role, {
            foreignKey: "user_id",
            as: "roles",
        });
    }

    return USER;
}