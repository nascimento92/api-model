import express, { Request, Response } from 'express';
import cors from "cors";
import * as dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.config";
import routes from "./shared/routes/shared.routes";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

// Rota de boas-vindas
app.get('/', (request: Request, response: Response) => {
    response.status(200).json({ message: 'Bem vindo, verifique a documentação pela nota /api-docs' });
});

// Configuração do Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//routes
app.use(routes);

try {
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
} catch (error) {
  console.error("Server failed to start:", error);
}
