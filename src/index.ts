import express, { Application, Request, Response } from 'express';
import http from 'http';
import connection from './database/config/SequelizeClient';
import { Sequelize } from 'sequelize';
import { Config } from './config';
import serverRoutes from './routes';
import { errorHandler } from './middlewares/ErrorHandler';

const app: Application = express();
const PORT = Config.app.port;

app.use(express.json());
app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Bienvenido a la API' });
});
app.use('/api/v1', serverRoutes);
app.use(errorHandler);

let server: http.Server;
let dbClient: Sequelize | undefined;

const startServer = async () => {
    try {
        dbClient = await connection.sync();
        console.log('Database connected.');
        server = app.listen(PORT, (): void => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    } catch (error: any) {
        console.error(`Error: ${error.message}`);
    }
};

startServer();
