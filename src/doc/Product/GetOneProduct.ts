export const GetOneProduct = {
    tags: ['Productos'],
    description: 'Retorna un producto específico por su ID.',
    operationId: 'getOneProduct',
    parameters: [
        {
            name: 'id',
            in: 'path',
            description: 'ID del producto a obtener.',
            required: true,
            schema: {
                type: 'integer',
            },
        },
    ],
    responses: {
        '200': {
            description: 'Producto obtenido correctamente.',
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
                                type: 'object',
                                description: 'Datos del producto.',
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
                                    }
                                },
                            },
                        },
                    },
                    example: {
                        code: 200,
                        message: 'SUCCESS_RESPONSE',
                        data: {
                            id: 1,
                            name: 'Laptop',
                            status: true,
                            categoryId: 2,
                            category: {
                                name: "Electronics",
                            }
                        },
                    },
                },
            },
        },
    },
};

export default GetOneProduct;