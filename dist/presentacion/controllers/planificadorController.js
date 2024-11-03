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
exports.PlanificadorController = void 0;
class PlanificadorController {
    constructor(planificadorServices) {
        this.planificadorServices = planificadorServices;
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const planificadores = yield this.planificadorServices.getAllPlanificadores();
            res.status(200).send({ status: true, data: planificadores });
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            const planificador = yield this.planificadorServices.getPlanificadorById(id);
            res.status(200).send({ status: 'OK', data: planificador });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            const newPlanificador = yield this.planificadorServices.createPlanificador(data);
            res.status(201).send({ status: 'Created', data: newPlanificador });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            const data = req.body;
            const updatedPlanificador = yield this.planificadorServices.updatePlanificador(id, data);
            res.status(200).send({ status: 'OK', data: updatedPlanificador });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            const isDeleted = yield this.planificadorServices.deletePlanificador(id);
            res.status(200).send({ status: 'OK', data: isDeleted });
        });
    }
}
exports.PlanificadorController = PlanificadorController;
