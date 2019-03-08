"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class IndiceRutas {
    constructor() {
        this.router = express_1.Router();
        this.rutas();
    }
    rutas() {
        this.router.get('/', (req, res) => res.send('BIENVENIDO AL API'));
    }
}
const indiceRutas = new IndiceRutas();
indiceRutas.rutas();
exports.default = indiceRutas.router;
