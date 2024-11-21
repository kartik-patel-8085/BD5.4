let { DataTypes, sequelize } = require('../lib');

let user = require('./user.model');
let track = require('./track_model');
const { type } = require('os');
const { default: Model } = require('sequelize/types/model');

let like = sequelize.define('like', {
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: user,
      key: 'id',
    },
  },
  trackID: {
    type: DataTypes.INTEGER,
    references: {
      model: track,
      key: 'id',
    },
  },
});

user.belongsToMany(track, { through: like });

track.belongToMany(user, { through: like });

module.exports = { like };
