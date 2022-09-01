const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    version: '1.0.0',
    title: 'Store Manager',
    description: 'API de um CRUD de vendas e produtos',
  },
  host: 'localhost:3000',
  basePath: '/',
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
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
  definitions: {
    Login: {
      username: 'reigal',
      password: '1dragaonoceu',
    },
    Product: [
      {
        id: 1,
        name: 'Espada curta',
        amount: '10 peças de ouro',
        orderId: null,
      },
    ],
    CreateProduct: {
      $name: 'Espada de Aço Valiriano',
      $amount: '200 peças de ouro',
    },
    User: {
      username: 'Eleven',
      classe: 'witch',
      level: 11,
      password: 'TheStronger',
    },
    Orders: [{
      $saleId: 1,
      $userId: 1,
      $productIds: [2],
    }],
    CreateOrder: {
      productsIds: [2, 3],
    },
  },
};

const outputFile = './swagger_output.json';
const endpointsFiles = ['./src/routes/router.ts'];

swaggerAutogen(outputFile, endpointsFiles, doc)
  .then(() => {
  // eslint-disable-next-line global-require, import/extensions
    require('./src/index.ts');
  });