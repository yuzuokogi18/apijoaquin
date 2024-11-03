// controllers/PlanificadorController.ts
import { Request, Response } from 'express';
import { PlanificadorServices } from '../../planificador/services/planificadorService';

export class PlanificadorController {
    constructor(private readonly planificadorServices: PlanificadorServices) {}

    async getAll(req: Request, res: Response) {
        const planificadores = await this.planificadorServices.getAllPlanificadores();
        res.status(200).send({ status: true, data: planificadores });
    }

    async getById(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const planificador = await this.planificadorServices.getPlanificadorById(id);
        res.status(200).send({ status: 'OK', data: planificador });
    }

    async create(req: Request, res: Response) {
        const data = req.body;
        const newPlanificador = await this.planificadorServices.createPlanificador(data);
        res.status(201).send({ status: 'Created', data: newPlanificador });
    }

    async update(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const data = req.body;
        const updatedPlanificador = await this.planificadorServices.updatePlanificador(id, data);
        res.status(200).send({ status: 'OK', data: updatedPlanificador });
    }

    async delete(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const isDeleted = await this.planificadorServices.deletePlanificador(id);
        res.status(200).send({ status: 'OK', data: isDeleted });
    }
}
