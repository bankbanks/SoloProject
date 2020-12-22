module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define(
      "Subject",
      {
       subject: DataTypes.STRING,
       name: DataTypes.INTEGER,
       price: DataTypes.INTEGER,
      },
      {
        tableName: "subject",
        timestamps: false,
      }
    );
    return model;
  };