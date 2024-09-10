export const DeleteProduct = {
    tags: ['Productos'],
    description: 'Elimina un producto por su ID.',
    operationId: 'deleteProduct',
    parameters: [
        {
            name: 'id',
            in: 'path',
            description: 'ID del producto a eliminar.',
            required: true,
            schema: {
                type: 'integer',
            },
        },
    ],
    responses: {
        '202': {
            description: 'Producto eliminado exitosamente',
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
                            data:{
                                type:"null",
                                description:"No hay datos a retornar"
                            }
                        },
                    },
                    example: {
                        code: 202,
                        message: 'Producto eliminado exitosamente.',
                        data: null,
                    },
                },
            },
        },
    },
};

export default DeleteProduct;