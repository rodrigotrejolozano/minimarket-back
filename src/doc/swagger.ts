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

    },
    servers: [
        {
            url: 'http://localhost:3001/api/v1',
            description: 'Servidor Local',
        },
    ],
};
