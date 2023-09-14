'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate({ Stage, Stage_events, Meet_Greet, Set_time }) {
   
      Event.belongsToMany(Stage,  {
        foreignKey: "event_id",
        as: "stage",
        through: Stage_events
      })
      //meet and greets
      Event.hasMany(Meet_Greet, {
        foreignKey: "event_id",
        as: "meet_greet"
      })
      //set times
      Event.hasMany(Set_time, {
        foreignKey: "event_id",
        as: "set_time"
      })
  }
  
  }
  Event.init({
    event_id:{
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date:{
      type: DataTypes.DATE,
      allowNull: false
    },
    start_time:{
      type: DataTypes.DATE,
    }, 
    end_time:{
      type:DataTypes.DATE,
    }
  },{
    sequelize,
    modelName: 'Event',
    tableName: 'event',
    timestamps: false
  });
  return Event;
};