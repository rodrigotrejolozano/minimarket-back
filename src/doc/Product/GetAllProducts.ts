export const getAllProducts = {
    tags: ['Productos'],
    description: 'Retorna todos los productos disponibles.',
    operationId: 'getAllProducts',
    responses: {
        '200': {
            description: 'Lista de productos.',
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
                                    name: "tecnologia"
                                }
                            },
                            {
                                id: 2,
                                name: 'Smartphone',
                                status: true,
                                categoryId: 2,
                                category: {
                                    name: "tecnologia"
                                }
                            },
                        ],
                    }
                },
            },
        },
    },
};

export default getAllProducts;
