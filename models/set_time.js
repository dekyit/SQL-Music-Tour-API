'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Set_time extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Band, Event, Stage}) {
      // band
      Set_time.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band"
      })
      //event
      Set_time.belongsTo(Event, {
        foreignKey: "event_id",
        as: "event"
      })
      //stage
      Set_time.belongsTo(Stage,{
        foreignKey: "stage_id",
        as: "stage"
      })
    }
  };
  Set_time.init({
    band_id:{
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement: true
    },
    set_time_id: {
      type:DataTypes.INTEGER,
      allowNull: false
    },
    event_id:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    stage_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type:DataTypes.STRING,
      allowNullL: false
    },
    genre: {
      type:DataTypes.TEXT,
      allowNull: false
    },
    available_start_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_time: {
      type:DataTypes.DATE,
      allowNull: false
  },
},
{
    sequelize,
    modelName: 'Set_time',
    tableName: 'set_time',
    timestamps: 'set_time'

  });
  return Set_time;
};