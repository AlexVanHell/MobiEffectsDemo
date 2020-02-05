# MobiEffects WebApp Demo

This is a repository for a small app demo to prove my skills at web development

## Database
This project is using Mongo DB in a docker container.

### Load database
1. Install docker & docker-compose
https://docs.docker.com/compose/install/

2. Up container with `docker-compose`
```sh
docker-compose up -d
```

## Backend
Nest JS is a progressive Node.js framework for building efficient, reliable and scalable server-side applications. https://nestjs.com/.

Nest JS can help US to build amazing server applications
with concepts of OOP. I can say that this framework is like working with Angular 2+ in backend side.

### Instal Node JS v.12.14.1

https://nodejs.org/es/

You can also build a docker container with this Node JS version already installed

### Install dependencies

Every dependecy this project user can be located in `package.json` and can be installed with the following command:

```sh
npm install
```

### Create environment variables file

Copy all variables from `.env.example` file and then create a new file called `.env`

```sh
touch .env
```

This file will contain the values for each variable acording to your own environment

### Run backend
```sh
cd backend
npm start
```

#### Run backend in development mode (Watch files changes)
```sh
npm run start:dev
```

## Frontend
Frontend is built with React.js and it uses the following dependecies too:
1. react-bootstrap
2. react-router-dom
2. axios

### Install dependencies

Same as the backend dependencies

```sh
npm install
```

### Run project

```sh
npm start
```



