import { Sequelize } from 'sequelize-typescript';
import { Config } from '../../config';
import { Dialect } from 'sequelize';

const driver = Config.database.connection;

const modelsPath = Config.app.node_env === 'production'
    ? __dirname + '/../../models/**/*.js'
    : __dirname + '/../../models/**/*.ts';

const sequelize = new Sequelize({
    dialect: Config.database.connections[driver].driver as Dialect,
    host: Config.database.connections[driver].host,
    username: Config.database.connections[driver].username,
    password: Config.database.connections[driver].password,
    database: Config.database.connections[driver].database,
    port: Number(Config.database.connections[driver].port),
    storage: Config.app.storage,
    logging: false,
    models: [modelsPath],
});

export default sequelize;
