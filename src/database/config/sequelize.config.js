const path = require('path');

require('ts-node/register');
const { Config } = require('../../config');

const driver = Config.database.connection;
module.exports = {
    username: Config.database.connections[driver].username,
    password: Config.database.connections[driver].password,
    database: Config.database.connections[driver].database,
    host: Config.database.connections[driver].host,
    dialect: Config.database.connections[driver].driver,
    port: Config.database.connections[driver].port,
    storage: Config.app.storage,
};
