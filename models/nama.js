import { Sequelize, DataTypes } from 'sequelize';
import database from "../database.js";

const User = database.define("nama", {
  nama :{
    type : DataTypes.STRING,
    allowNull : false
  },
  sekolah :{
    type : DataTypes.STRING,
    allowNull : false
  },
  jurusan :{
    type : DataTypes.STRING,
    allowNull : false
  },
  jumlah :{
    type : DataTypes.INTEGER,
    allowNull : false
  },
  tgl_mulai: {
    type : DataTypes.DATE,
    allowNull : false
  },
  tgl_selesai: {
    type : DataTypes.DATE,
    allowNull : false
  }
}, {freezeTableName: true})


export default User