'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Band extends Model {
    static associate({ Meet_Greet, Set_time }) {
      // meet and greets 
      Band.hasMany(Meet_Greet, {
        foreignKey: "band_id",
        as: "meet_greet"
      })
      //set times
      Band.hasMany(Set_time ,{
        foreignKey: "band_id",
        set_time: "set_time"
      })
  
    }
  }
  Band.init({
    band_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    available_start_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_time: {
        type: DataTypes.DATE,
        allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Band',
    tableName: 'band',
    timestamps: false
  })

  return Band;
};