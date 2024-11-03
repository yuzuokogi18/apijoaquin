// services/PlanificadorService.ts
import { PlanificadorRepository } from '../../persistencia/repositorios/PlaanificadorRepository';
import { Planificador } from '../../persistencia/models/Planificador';

export class PlanificadorServices {
    constructor(private readonly planificadorRepositorio: PlanificadorRepository) {}

    async getAllPlanificadores(): Promise<Planificador[] | null> {
        return this.planificadorRepositorio.getAllPlanificadores();
    }

    async getPlanificadorById(id: number): Promise<Planificador | null> {
        return this.planificadorRepositorio.getPlanificadorById(id);
    }

    async createPlanificador(data: any): Promise<Planificador | null> {
        return this.planificadorRepositorio.createPlanificador(data);
    }

    async updatePlanificador(id: number, data: any): Promise<Planificador | null> {
        return this.planificadorRepositorio.updatePlanificador(id, data);
    }

    async deletePlanificador(id: number): Promise<boolean> {
        return this.planificadorRepositorio.deletePlanificador(id);
    }
}
