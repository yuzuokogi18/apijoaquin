"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts (servidor)
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const planificadorRoute_1 = require("./presentacion/routes/planificadorRoute"); // Actualiza la ruta aquí
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)());
app.use("/api/v1/planificadores", planificadorRoute_1.planificadorRoutes); // Cambia a planificadores
app.listen(3001, () => {
    console.log('Server running on port 3001');
});
