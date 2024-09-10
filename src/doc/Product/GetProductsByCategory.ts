export const GetProductsByCategory = {
    tags: ['Productos'],
    description: 'Retorna productos según la categoría especificada.',
    operationId: 'getProductsByCategory',
    parameters: [
        {
            name: 'categoryId',
            in: 'path',
            description: 'ID de la categoría.',
            required: true,
            schema: {
                type: 'integer',
            },
        },
    ],
    responses: {
        '200': {
            description: 'Lista de productos según la categoría especificada.',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            code: {
                                type: 'integer',
                                description: 'Código de respuesta.',
                            },
                            message: {
                                type: 'string',
                                description: 'Mensaje de respuesta.',
                            },
                            data: {
                                type: 'array',
                                description: 'Lista de productos.',
                                items: {
                                    type: 'object',
                                    properties: {
                                        id: {
                                            type: 'integer',
                                            description: 'ID del producto.',
                                        },
                                        name: {
                                            type: 'string',
                                            description: 'Nombre del producto.',
                                        },
                                        categoryId: {
                                            type: 'integer',
                                            description: 'ID de la categoría del producto.',
                                        },
                                        status: {
                                            type: 'boolean',
                                            description: 'Estado del producto.',
                                        },
                                        category: {
                                            type: 'object',
                                            description: 'Datos de la categoría del producto.',
                                            properties: {
                                                name: {
                                                    type: 'string',
                                                    description: 'Nombre de la categoría.',
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    example: {
                        code: 200,
                        message: 'SUCCESS_RESPONSE',
                        data: [
                            {
                                id: 1,
                                name: 'Laptop',
                                status: true,
                                categoryId: 2,
                                category: {
                                    name: "Electronics",
                                }
                            },
                            {
                                id: 2,
                                name: 'Smartphone',
                                status: true,
                                categoryId: 2,
                                category: {
                                    name: "Electronics",
                                }
                            },
                        ],
                    },
                },
            },
        },
    },
};

export default GetProductsByCategory;