import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'sqlite',
  storage: 'database/database.sqlite',
});

export default sequelize;