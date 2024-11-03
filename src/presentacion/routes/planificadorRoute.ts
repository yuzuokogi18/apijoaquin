// routes/planificadorRoutes.ts
import express, { Router } from 'express';
import { PlanificadorController } from '../controllers/planificadorController';
import { PlanificadorServices } from '../../planificador/services/planificadorService';
import { PlanificadorRepository } from '../../persistencia/repositorios/PlaanificadorRepository';

export const planificadorRoutes: Router = express.Router();
const planificadorRepository = new PlanificadorRepository();
const planificadorService = new PlanificadorServices(planificadorRepository);
const planificadorController = new PlanificadorController(planificadorService);

planificadorRoutes.get("/", planificadorController.getAll.bind(planificadorController));
planificadorRoutes.get("/:id", planificadorController.getById.bind(planificadorController));
planificadorRoutes.post("/", planificadorController.create.bind(planificadorController));
planificadorRoutes.put("/:id", planificadorController.update.bind(planificadorController));
planificadorRoutes.delete("/:id", planificadorController.delete.bind(planificadorController));
