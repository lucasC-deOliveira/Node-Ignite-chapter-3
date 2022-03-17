import "reflect-metadata";
import "./shared/container"
import express from 'express';
import swaggerUI from 'swagger-ui-express';



import swaggerFile from "./swagger.json";

import "./database";

import { router } from './routes';

const app = express();

app.use(express.json())

//documentação
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile))

//rotas da aplicação
app.use(router)

app.listen(3333, () => console.log("Server Rodando"))

