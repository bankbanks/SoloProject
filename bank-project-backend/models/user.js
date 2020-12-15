module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define(
        "User",
        {

            firstname: DataTypes.STRING,
            lastname: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            

        },
        {
            tableName: "users",
            timestamps: false
        }
        

    )

    return model;
}

