"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanificadorServices = void 0;
class PlanificadorServices {
    constructor(planificadorRepositorio) {
        this.planificadorRepositorio = planificadorRepositorio;
    }
    getAllPlanificadores() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.planificadorRepositorio.getAllPlanificadores();
        });
    }
    getPlanificadorById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.planificadorRepositorio.getPlanificadorById(id);
        });
    }
    createPlanificador(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.planificadorRepositorio.createPlanificador(data);
        });
    }
    updatePlanificador(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.planificadorRepositorio.updatePlanificador(id, data);
        });
    }
    deletePlanificador(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.planificadorRepositorio.deletePlanificador(id);
        });
    }
}
exports.PlanificadorServices = PlanificadorServices;
