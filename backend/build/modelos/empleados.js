"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const empleado = new mongoose_1.Schema({
    cedula: { type: String, required: true },
    nombre: { type: String, required: true },
    turno: { type: String, required: true }
});
exports.default = mongoose_1.model('turnos', empleado);
