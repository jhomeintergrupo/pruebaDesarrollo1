"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const empleados_1 = __importDefault(require("../modelos/empleados"));
class ValidacionRuta {
    constructor() {
        this.router = express_1.Router();
        this.rutas();
    }
    //metodo para extraer toda la db
    traerDatos(req, res) {
        empleados_1.default.find({}, (err, empleados) => {
            return res.json(empleados);
        });
    }
    //metodo crea empleado
    crearEmp(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cedula, nombre, turno } = req.body;
            const newPost = new empleados_1.default({ cedula, nombre, turno });
            yield newPost.save();
            res.json({ status: res.status, data: newPost });
        });
    }
    rutas() {
        this.router.get('/validacion', this.traerDatos),
            this.router.post('/validacion', this.crearEmp);
    }
}
const validar = new ValidacionRuta();
exports.default = validar.router;
