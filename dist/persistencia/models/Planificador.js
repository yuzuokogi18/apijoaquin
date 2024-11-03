"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Planificador = void 0;
// models/Planificador.ts
class Planificador {
    constructor(id, name, details, start_date, end_date, start_time, end_time) {
        this.id = id;
        this.name = name;
        this.details = details;
        this.start_date = start_date;
        this.end_date = end_date;
        this.start_time = start_time;
        this.end_time = end_time;
    }
}
exports.Planificador = Planificador;
