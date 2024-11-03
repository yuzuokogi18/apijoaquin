"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.planificadorRoutes = void 0;
// routes/planificadorRoutes.ts
const express_1 = __importDefault(require("express"));
const planificadorController_1 = require("../controllers/planificadorController");
const planificadorService_1 = require("../../planificador/services/planificadorService");
const PlaanificadorRepository_1 = require("../../persistencia/repositorios/PlaanificadorRepository");
exports.planificadorRoutes = express_1.default.Router();
const planificadorRepository = new PlaanificadorRepository_1.PlanificadorRepository();
const planificadorService = new planificadorService_1.PlanificadorServices(planificadorRepository);
const planificadorController = new planificadorController_1.PlanificadorController(planificadorService);
exports.planificadorRoutes.get("/", planificadorController.getAll.bind(planificadorController));
exports.planificadorRoutes.get("/:id", planificadorController.getById.bind(planificadorController));
exports.planificadorRoutes.post("/", planificadorController.create.bind(planificadorController));
exports.planificadorRoutes.put("/:id", planificadorController.update.bind(planificadorController));
exports.planificadorRoutes.delete("/:id", planificadorController.delete.bind(planificadorController));
