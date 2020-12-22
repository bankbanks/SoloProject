module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    "User",
    {
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true
      },
      password: DataTypes.STRING,
      gender: DataTypes.STRING,
      birthdate: DataTypes.STRING,
    },

    {
      tableName: "users",
      timestamps: false,
    }



  );
 
  return model;
};
