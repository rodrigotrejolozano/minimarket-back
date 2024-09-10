export type Driver = 'sqlite' | 'mysql';
export interface IConfig {
    app: {
        port: number | string;
        url: string;
        storage: string;
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
