// let sq = require('sequelize');

// let sequelize = new sq.Sequelize({
//   dialect: 'sqlite',
//   storage: '/database.sqlite',
// });

// module.exports = { DataTypes: sq.DataTypes, sequelize };

let sq = require('sequelize');
let sequelize = new sq.Sequelize('sqlite:./database.sqlite');

module.exports = { DataTypes: sq.DataTypes, sequelize };
