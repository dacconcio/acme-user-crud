const Sequelize = require('sequelize');

const db = new Sequelize(process.env.DATABASE_URL);

const User = db.define('user', {
  name: {
    type: Sequelize.TEXT,
    unique: true
  }
});

db.sync({ force: true }).then(() => {
  const Dave = User.create({ name: 'Dave' });
  const Jeff = User.create({ name: 'Jeff' });
  const Bill = User.create({ name: 'Bill' });
});

module.exports = User

