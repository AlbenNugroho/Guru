import { Sequelize } from 'sequelize';
const database = new Sequelize('guru', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

  export default database