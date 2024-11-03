// index.ts (servidor)
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { planificadorRoutes } from './presentacion/routes/planificadorRoute'; // Actualiza la ruta aquí

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use("/api/v1/planificadores", planificadorRoutes); // Cambia a planificadores

app.listen(3001, () => {
    console.log('Server running on port 3001');
});
