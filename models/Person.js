const {
  DataTypes
} = require('sequelize');

// auto-generated plus some manual changes/fixes.
// changes: field names to be more standard, and options for freezeTableName and timestamps
module.exports = sequelize => {
  const attributes = {
    personId: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "PersonId"
    },
    name: {
      type: DataTypes.STRING(25),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Name"
    },
    personTypCde: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PersonTypCde",
      references: {
        key: "PersonTypCde",
        model: "PersonTypVal_model"
      }
    }
  };
  const options = {
      tableName: "Person",
      freezeTableName: true,
      timestamps: false,
    comment: "",
    indexes: [{
      name: "PersonTypCde",
      unique: false,
      type: "BTREE",
      fields: ["PersonTypCde"]
    }]
  };
  const PersonModel = sequelize.define("Person_model", attributes, options);
  return PersonModel;
};
