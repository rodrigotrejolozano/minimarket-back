import dotenv from 'dotenv';
import { Driver, IConfig, Node_env } from './ConfigTypes';
dotenv.config({
    path: __dirname + `/../../.env`,
});
const config: IConfig = {
    app: {
        port: process.env.APP_PORT || 3001,
        url: process.env.APP_URL || 'http://localhost',
        storage: process.env.APP_STORAGE || './dbmini.sqlite',
        node_env: (process.env.NODE_ENV as Node_env) ?? 'development',
    },
    database: {
        connection: (process.env.DB_CONNECTION as Driver) ?? 'sqlite',
        connections: {
            sqlite: {
                driver: 'sqlite',
                url: process.env.DATABASE_URL,
                database: process.env.DB_NAME ?? 'bd-mini',
                host: process.env.DB_HOST ?? '',
                port: process.env.DB_PORT ?? '',
                username: process.env.DB_USER ?? '',
                password: process.env.DB_PASSWORD ?? '',
            },
            mysql: {
                driver: 'mysql',
                url: process.env.DATABASE_URL,
                host: process.env.DB_HOST ?? '127.0.0.1',
                port: process.env.DB_PORT ?? 3306,
                database: process.env.DB_NAME ?? 'bd-mini',
                username: process.env.DB_USER ?? 'root',
                password: process.env.DB_PASSWORD ?? '',
            },
        },
    },
};

export default config;
