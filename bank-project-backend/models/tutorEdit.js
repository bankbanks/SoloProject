module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    "Tutor",
    {
      
      name: DataTypes.STRING,
      subject: DataTypes.STRING,
      available: DataTypes.TIMESTAMPS,
      tel: DataTypes.NUMBER,
    },
    {
      tableName: "tutor",
    }
  );
  return model;
};
