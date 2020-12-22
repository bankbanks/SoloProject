module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    "Tutor",
    {
      fname: DataTypes.STRING, 
      lname: DataTypes.STRING, 
      subject_id: DataTypes.INTEGER,
      available: DataTypes.DATE,
      tel: DataTypes.INTEGER,
      subject: DataTypes.STRING,
      location: DataTypes.STRING,
      line_contact: DataTypes.STRING,
      facebook_contact: DataTypes.STRING,
      graduate: DataTypes.STRING,
      detail: DataTypes.STRING,
      available: DataTypes.STRING,
      img: DataTypes.STRING,
      line_contact: DataTypes.STRING,
      facebook_contact: DataTypes.STRING,
      graduate: DataTypes.STRING,
      detail: DataTypes.STRING,
      email:DataTypes.STRING,
    },
    {
      tableName: "tutor",
      timestamps: false,
    }
  );
  return model;
};
