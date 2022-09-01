const BAD_REQUEST = 'Bad Request';
const REQUIRED = '"Some field" is required';
/* eslint-disable max-lines */
const swaggerFile = {
  swagger: '2.0',
  info: {
    version: '1.0.0',
    title: 'Trybesmith',
    description: 'API de um CRUD de uma loja de produtos medievais',
  },
  host: 'localhost:3000',
  basePath: '/',
  securityDefinitions: {
    apiKeyAuth: {
      type: 'apiKey',
      in: 'header',
      name: 'Authorization',
    }, 
  },
  tags: [
    {
      name: 'Login',
      description: 'Login Endpoint',
    },
    {
      name: 'Products',
      description: 'Products Endpoints',
    },
    {
      name: 'Users',
      description: 'Users Endpoints',
    },
    {
      name: 'Orders',
      description: 'Orders Endpoints',
    },
  ],
  schemes: [
    'http',
    'https',
  ],
  consumes: [
    'application/json',
  ],
  produces: [
    'application/json',
  ],
  paths: {
    '/login/': {
      post: {
        description: 'Valida o usuário e retorna um token',
        tags: ['Login'],
        parameters: [
          {
            name: 'body',
            in: 'body',
            schema: { $ref: '#/definitions/Login' },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'object',
              properties: 'token',
              example: {
                token: 'zI1NiIsInR5cCI6IkpXVCJ9.LCJleHAiOjE2NjE1MjQwODZ9.ZTJ5L0yvIfX9dzZBtI',
              },
            },          
          },
          400: {
            description: BAD_REQUEST,
            schema: {
              type: 'object',
              properties: 'message',
              example: {
                message: REQUIRED,
              },
            },
          },
          401: {
            description: 'Unauthorized',
            schema: {
              type: 'object',
              properties: 'message',
              example: {
                message: 'Username or password invalid',
              },
            },
          },
        },
      },
    },
    '/products/': {
      get: {
        description: 'Retorna todos os produtos',
        tags: ['Products'],
        parameters: [],
        responses: {
          200: {
            description: 'OK',
            schema: { $ref: '#/definitions/Product' },
          },
        },
      },
      post: {
        description: 'Cria um novo produto medieval',
        tags: ['Products'],
        parameters: [
          {
            name: 'body',
            in: 'body',
            schema: { $ref: '#/definitions/CreateProduct' },
          },
        ],
        responses: {
          201: {
            description: 'Created',
            schema: { $ref: '#/definitions/CreateProductRes' },
          },
          400: {
            description: BAD_REQUEST,
            schema: {
              type: 'object',
              properties: 'message',
              example: {
                message: REQUIRED,
              },
            },
          },
        },
      },
    },
    '/users/': {
      post: {
        description: 'Cadastra um novo usuário',
        tags: ['Users'],
        parameters: [
          {
            name: 'body',
            in: 'body',
            schema: { $ref: '#/definitions/User' },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'object',
              properties: 'token',
              example: {
                token: 'zI1NiIsInR5cCI6IkpXVCJ9.LCJleHAiOjE2NjE1MjQwODZ9.ZTJ5L0yvIfX9dzZBtI',
              },
            } },
          400: {
            description: BAD_REQUEST,
            schema: {
              type: 'object',
              properties: 'message',
              example: {
                message: REQUIRED,
              },
            },
          },
          422: {
            description: 'Unprocessable',
            schema: {
              type: 'object',
              properties: 'message',
              example: {
                message: '"level" must be greater than or equal to 1',
              },
            },
          },
        },
      },
    },
    '/orders/': {
      get: {
        description: 'Retorna todos os pedidos da loja',
        tags: ['Orders'],
        parameters: [],
        responses: {
          200: {
            description: 'OK',
            schema: { $ref: '#/definitions/Orders' },
          },
        },
      },
      post: {
        description: 'Cadastra um novo pedido',
        tags: ['Orders'],
        security: [{
          apiKeyAuth: [],
        }],  
        parameters: [
          {
            name: 'body',
            in: 'body',
            schema: { $ref: '#/definitions/CreateOrder' },
          },
        ],
        responses: {
          201: {
            description: 'Created',
            schema: { $ref: '#/definitions/Orders' },
          },
          400: {
            description: BAD_REQUEST,
            schema: {
              type: 'object',
              properties: 'message',
              example: {
                message: REQUIRED,
              },
            },
          },
          401: {
            description: 'Unauthorized',
            schema: {
              type: 'object',
              properties: 'message',
              example: {
                message: 'Token not found/Invalid token',
              },
            },
          },
          422: {
            description: 'Unprocessable',
            schema: {
              type: 'object',
              properties: 'message',
              example: {
                message: '"productsIds" must include only numbers',
              },
            },
          },
        },
      },
    },
  },
  definitions: {
    Login: {
      type: 'object',
      properties: {
        username: {
          type: 'string',
          example: 'reigal',
        },
        password: {
          type: 'string',
          example: '1dragaonoceu',
        },
      },
    },
    Product: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'number',
            example: 1,
          },
          name: {
            type: 'string',
            example: 'Espada curta',
          },
          amount: {
            type: 'string',
            example: '10 peças de ouro',
          },
          orderId: {},
        },
      },
    },
    CreateProduct: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          example: 'Espada de Aço Valiriano',
        },
        amount: {
          type: 'string',
          example: '200 peças de ouro',
        },
      },
      required: [
        'name',
        'amount',
      ],
    },
    CreateProductRes: {
      type: 'object',
      properties: {
        id: {
          type: 'number',
          example: 6,
        },
        name: {
          type: 'string',
          example: 'Espada de Aço Valiriano',
        },
        amount: {
          type: 'string',
          example: '200 peças de ouro',
        },
      },    
      required: [
        'id',
        'name',
        'amount',
      ],
    },
    User: {
      type: 'object',
      properties: {
        username: {
          type: 'string',
          example: 'Eleven',
        },
        classe: {
          type: 'string',
          example: 'witch',
        },
        level: {
          type: 'number',
          example: 11,
        },
        password: {
          type: 'string',
          example: 'TheStronger',
        },
      },
    },
    Orders: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          saleId: {
            type: 'number',
            example: 1,
          },
          userId: {
            type: 'number',
            example: 1,
          },
          productIds: {
            type: 'array',
            example: [
              2,
            ],
            items: {
              type: 'number',
            },
          },
        },
        required: [
          'saleId',
          'userId',
          'productIds',
        ],
      },
    },
    CreateOrder: {
      type: 'object',
      properties: {
        productsIds: {
          type: 'array',
          example: [
            2,
            3,
          ],
          items: {
            type: 'number',
          },
        },
      },
    },
  },
};

export default swaggerFile;