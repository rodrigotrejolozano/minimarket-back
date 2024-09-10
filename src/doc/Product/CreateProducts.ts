export const CreateProduct = {
    tags: ['Productos'],
    description: 'Crea un nuevo producto.',
    operationId: 'createProduct',
    requestBody: {
        required: true,
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        name: {
                            type: 'string',
                            description: 'Nombre del producto.',
                            required: true,
                        },
                        categoryId: {
                            type: 'integer',
                            description: 'ID de la categoría del producto.',
                            required: true,
                        },
                    },
                },
                example: {
                    name: 'Tablet',
                    categoryId: 3,
                },
            },
        },
    },
    responses: {
        '201': {
            description: 'Producto creado exitosamente.',
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
                                description: 'Datos del producto creado.',
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
                                    createdAt: {
                                        type: 'string',
                                        description: 'Fecha de creación del producto.',
                                    },
                                    updatedAt: {
                                        type: 'string',
                                        description: 'Fecha de actualización del producto.',
                                    },
                                },
                            },
                        },
                    },
                    example: {
                        code: 201,
                        message: 'Producto creado exitosamente',
                        data: {
                            id: 3,
                            name: 'Tablet',
                            categoryId: 3,
                            status: true,
                            createdAt: "2024-09-09T02:02:31.534Z",
                            updatedAt: "2024-09-09T02:02:31.535Z",
                        },
                    },
                },
            },
        },
    },
};

export default CreateProduct;