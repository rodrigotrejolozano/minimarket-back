export const getAllCategories = {
    tags: ['Categorías'],
    description: 'Retorna todas las categorias disponibles.',
    operationId: 'getAllProducts',
    responses: {
        '200': {
            description: 'Lista de categorias.',
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
                                description: 'Lista de categorias.',
                                items: {
                                    type: 'object',
                                    properties: {
                                        id: {
                                            type: 'integer',
                                            description: 'ID de la categoria.',
                                        },
                                        name: {
                                            type: 'string',
                                            description: 'Nombre de la categoria.',
                                        },
                                        status: {
                                            type: 'boolean',
                                            description: 'Estado de la categoria.',
                                        }
                                    },
                                },

                            },
                        },

                    },
                    example: {
                        code: 200,
                        message: 'Categorias obtenidas correctamente.',
                        data: [
                            {
                                id: 1,
                                name: 'Electrónicos',
                                status: true
                            },
                            {
                                id: 2,
                                name: 'Ropa',
                                status: true
                            },
                        ],
                    }
                },
            },
        },
    },
};

export default getAllCategories
