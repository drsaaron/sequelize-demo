const { Sequelize, DataTypes } = require('sequelize');

const dbuser = process.env.DB_USER
const dbpass = process.env.DB_PASS;

const sequelize = new Sequelize(
    'PersonInformation',
    dbuser,
    dbpass,
    {
	dialect: 'mysql',
	host: 'localhost'
    }
);

const Person = sequelize.define('Person', {
    // model attributes
    personId: {
	type: DataTypes.INTEGER,
	allowNull: false,
	primaryKey: true
    },
    
    name: {
	type: DataTypes.STRING,
	allowNull: false
    },

    personTypCde: {
	type: DataTypes.INTEGER,
	allowNull: false
    },
}, {
    sequelize,
    modelName: 'Person',
    tableName: 'Person',
    freezeTableName: true,
    timestamps: false
});

async function main() {
    // the defined model is the class itself
    console.log(Person === sequelize.models.Person); // true
    
    // query all
    const people = await Person.findAll();
    console.log(people.every(user => user instanceof Person)); // true
    console.log("All people:", JSON.stringify(people, null, 2));
};

main();
