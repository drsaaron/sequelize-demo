const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    PersonTypCde: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "PersonTypCde"
    },
    PersonTypTxt: {
      type: DataTypes.STRING(25),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PersonTypTxt"
    }
  };
  const options = {
    tableName: "PersonTypVal",
    comment: "",
    indexes: []
  };
  const PersonTypValModel = sequelize.define("PersonTypVal_model", attributes, options);
  return PersonTypValModel;
};