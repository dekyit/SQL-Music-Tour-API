'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  
  class Meet_Greet extends Model {
    static associate({ Band, Event }) {
      // meet and greets 
      Meet_Greet.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band"
      })
      Meet_Greet.belongsTo(Event, {
        foreignKey: "event_id",
        as: "event"
      })
    }
  }
  Meet_Greet.init({
    band_id:{ 
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    meet_greet_id:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    event_id:{
      type:DataTypes.INTEGER,
      allowNull: false
    },
    available_start_time:{ 
      type:DataTypes.DATE,
      allowNull: false
    },
    end_time:{
      type:DataTypes.DATE,
      allowNull: false

    },
  }, {
    sequelize,
    modelName: 'Meet_Greet',
    tableName: 'meet_greet',
    timestamps: false
  });
  return Meet_Greet;
};