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

The `docker-compose.yml` file contains some environment variables to initialize the database with authentication.

There is a file called `mongo-init.js` that is copied into the container that creates a not admin user. This new user can only read and write into database.

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
cd backend
npm install
```

### Create environment variables file

Copy all variables from `.env.example` file and then create a new file called `.env`

```sh
touch .env
```

This file will contain the values for each variable acording to your own environment

Your `.env` file should have exactly the following content to work in your localhost for this demo.

```py
DB_HOST=localhost
DB_NAME=dbdemo
DB_PORT=27017
DB_USERNAME=demoUser
DB_PASSWORD=d3m0p4ssw0rd
```

### Run backend
```sh
cd backend
npm start
```

#### Run backend in development mode (Watch files changes)
```sh
npm run start:dev
```

#### Show Swagger Api
This project is configured to generate documentation with Swagger where you can see all the relevant information of each API endpoint. Just open your browser and go to the next URL (Assuming the server is already running).

http://localhost:3000/api

## Frontend
Frontend is built with React.js and it uses the following dependecies too:
1. react-bootstrap
2. react-router-dom
2. axios

### Install dependencies

Same as the backend dependencies

```sh
cd frontend
npm install
```

### Create environment variables file

Create a file called `.env.local`

```sh
touch .env.local
```

Your `.env.local` file should have exactly the following content to work in your localhost for this demo.

```py
PORT=4200
SASS_PATH:src
```

### Run project

```sh
cd frontend
npm start
```

Your browser will be opened at http://localhost:4200


