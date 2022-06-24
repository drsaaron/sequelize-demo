const { Sequelize, DataTypes } = require('sequelize');
const PersonFactory = require('./models/Person');

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

const Person = PersonFactory(sequelize);

async function logAll() {
    // query all
    const people = await Person.findAll();
    console.log(people.every(user => user instanceof Person)); // true
    console.log("All people:", JSON.stringify(people, null, 2));
}

async function logKlingons() {
    const klingons = await Person.findAll({ where: { personTypCde: 4 }});
    console.log("klingons:", JSON.stringify(klingons, null, 2));
}

async function main() {
    // the defined model is the class itself
    console.log(Person === sequelize.models.Person); // true
    
    // query all
    await logAll();

    // add a new user.
    const page = await Person.create({ name: 'Jimmy Page', personTypCde: 3 });
    await logAll();

    // delete the Jimmy Page's
    await Person.destroy({
	where: {
	    name: 'Jimmy Page'
	}
    });
    await logAll();

    // just query klingons
    await logKlingons();
};

main();
