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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanificadorRepository = void 0;
// repositorios/PlanificadorRepository.ts
const promise_1 = __importDefault(require("mysql2/promise"));
const dotenv_1 = __importDefault(require("dotenv"));
const Planificador_1 = require("../models/Planificador");
dotenv_1.default.config();
class PlanificadorRepository {
    constructor() {
        this.connection = promise_1.default.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            database: process.env.DB_DATABASE,
            password: process.env.DB_PASSWORD,
            waitForConnections: true,
            connectionLimit: 10,
        });
    }
    getAllPlanificadores() {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield this.connection.execute('SELECT * FROM planificador'); // Fuerza a `rows` como un array de cualquier tipo
            return rows.map((row) => new Planificador_1.Planificador(row.id, row.name, row.details, row.start_date, row.end_date, row.start_time, row.end_time));
        });
    }
    getPlanificadorById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield this.connection.execute('SELECT * FROM planificador WHERE id = ?', [id]);
            if (rows.length > 0) {
                return new Planificador_1.Planificador(rows[0].id, rows[0].name, rows[0].details, rows[0].start_date, rows[0].end_date, rows[0].start_time, rows[0].end_time);
            }
            return null;
        });
    }
    createPlanificador(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const [result] = yield this.connection.execute('INSERT INTO planificador (name, details, start_date, end_date, start_time, end_time) VALUES (?, ?, ?, ?, ?, ?)', [data.name, data.details, data.start_date, data.end_date, data.start_time, data.end_time]);
            return new Planificador_1.Planificador(result.insertId, data.name, data.details, data.start_date, data.end_date, data.start_time, data.end_time);
        });
    }
    updatePlanificador(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.execute('UPDATE planificador SET name=?, details=?, start_date=?, end_date=?, start_time=?, end_time=? WHERE id=?', [data.name, data.details, data.start_date, data.end_date, data.start_time, data.end_time, id]);
            return new Planificador_1.Planificador(id, data.name, data.details, data.start_date, data.end_date, data.start_time, data.end_time);
        });
    }
    deletePlanificador(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const [result] = yield this.connection.execute('DELETE FROM planificador WHERE id=?', [id]);
            return result.affectedRows > 0;
        });
    }
}
exports.PlanificadorRepository = PlanificadorRepository;
