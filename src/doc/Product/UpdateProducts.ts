export const UpdateProduct = {
    tags: ['Productos'],
    description: 'Actualiza un producto existente por su ID.',
    operationId: 'updateProduct',
    parameters: [
        {
            name: 'id',
            in: 'path',
            description: 'ID del producto a actualizar.',
            required: true,
            schema: {
                type: 'integer',
            },
        },
    ],
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
                        },
                        categoryId: {
                            type: 'integer',
                            description: 'ID de la categoría del producto.',
                        },
                    },
                },
                example: {
                    name: 'Laptop Actualizada',
                    categoryId: 2,
                },
            },
        },
    },
    responses: {
        '200': {
            description: 'Producto actualizado exitosamente',
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
                                description: 'Datos del producto actualizado.',
                                items: {
                                    id: {
                                        type: 'integer',
                                        description: 'Filas afectadas',
                                    },
                                   
                                },
                            },
                        },
                    },
                    example: {
                        code: 200,
                        message: 'Producto actualizado exitosamente',
                        data: [
                           1
                        ]
                    },
                },
            },
        },
    },
};

export default UpdateProduct;