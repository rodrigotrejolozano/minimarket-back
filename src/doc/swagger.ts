import { GetAllCategories } from './Category';
import {
    CreateProducts,
    DeleteProducts,
    GetAllProducts,
    GetOneProduct,
    GetProductsByCategory,
    UpdateProducts
} from './Product';


export const swaggerDocument = {
    openapi: '3.0.1',
    info: {
        version: '1.0.0',
        title: 'API de Categorías y Productos',
        description: 'Rutas de la API de categorías y productos',
        termsOfService: '',
        contact: {
            name: 'Rodrigo',
            email: 'rodrigotrejo098@gmail.com',
        },
    },
    tags: [
        {
            name: 'Productos',
        },
        {
            name: 'Categorías',
        }
    ],
    paths: {
        '/categories/': {
            get: GetAllCategories,
        },
        '/products/': {
            get: GetAllProducts,
            post: CreateProducts,
        },
        '/products/{id}': {
            get: GetOneProduct,
            put: UpdateProducts,
            delete: DeleteProducts,
        },
        '/products/category/{categoryId}': {
            get: GetProductsByCategory,
        },
    },
    servers: [
        {
            url: 'http://localhost:3001/api/v1',
            description: 'Servidor Local',
        },
    ],
};
