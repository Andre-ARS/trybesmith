# Projeto Trybesmith

# Contexto

Este projeto trata-se da criação de uma API de um CRUD de uma loja de itens medievais, utilizando TypeScript e alguns conceitos de POO com base na arquitetura MSC (models, services, controllers). Foi utilizado também o Swagger Ui para criar uma documentação. Esse projeto foi feito no módulo de back-end do curso da Trybe, e foi o meu primeiro contato com TypeScript.

## Tecnologias usadas

Back-end:

> Desenvolvido usando: Docker, TypeScript, Node.js, Express.js, MySQL, Swagger.io, POO;

## Testando Localmente

> Clone o Repositório

```bash
git clone git@github.com:Andre-ARS/trybesmith.git
```

> Dentro do diretório do projeto, instale as dependencias

```bash
npm install
```

> Na raiz do projeto suba as imagens do docker

```bash
docker-compose up -d
```

> Depois rode o container

```bash
docker exec -it trybesmith sh 
```

> Dentro do container rode a API

```bash
npm start
```

⚠️ATENÇÃO: Antes de testar a API localmente, você precisa criar o banco na sua máquina, com as credencias que estão no docker-compose, sendo elas: user="root", password="password" e port=3306⚠️

> Use o seu API client preferido e rode o endpoint na porta 3000 do seu localhost

Url base da api rodando no vercel [https://trybesmith-ars-api.vercel.app/](https://trybesmith-ars-api.vercel.app/)

Visite a documentação no swagger [aqui](https://app.swaggerhub.com/apis/ANDRE360ARS/trybesmith/1.0.0#/)
