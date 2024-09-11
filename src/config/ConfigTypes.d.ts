export type Driver = 'sqlite' | 'mysql';
export type Node_env = 'development' | 'production' | 'test';
export interface IConfig {
    app: {
        port: number | string;
        url: string;
        storage: string;
        node_env: Node_env;
    };
    database: {
        connection: Driver;
        connections: {
            [key: string]: {
                driver: string;
                url?: string;
                host: string;
                port: string | number;
                database: string;
                username: string;
                password: string;
            };
        };
    };
}
