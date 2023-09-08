'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stage extends Model {
    static associate({ Event, Stage_events }) {
      // events
      Stage.belongsToMany(Event, {
        foreignKey: "stage_id",
        as: "events",
        through: Stage_events
      })
    
  }
  
  }
  Stage.init({
    stage_id: {
     type: DataTypes.INTEGER,
     primaryKey: true,
     autoIncrement: true
    },
    stage_name: {
      type: DataTypes.STRING,
        allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Stage',
    tableName: 'stage',
    timestamps: false
  });
  
  return Stage;
};