"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
//importar rutas API
const indexRutas_1 = __importDefault(require("./rutas/indexRutas"));
const validacionRuta_1 = __importDefault(require("./rutas/validacionRuta"));
class Server {
    //Se inicializa aplicacion express y configuracion servidor
    constructor() {
        this.app = express_1.default();
        this.config();
        this.rutas();
    }
    config() {
        const MONGO_CONN = 'mongodb://localhost/empleados';
        mongoose_1.default.set('useFindAndModify', false);
        mongoose_1.default.connect(MONGO_CONN, {
            useNewUrlParser: true,
            useCreateIndex: true
        })
            .then(db => console.log("Se ha conectado la base"));
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(express_1.default.json());
        //this.app.use(cors({origin: 'http://localhost:4200'}));
        this.app.use(cors_1.default());
    }
    rutas() {
        this.app.use(indexRutas_1.default);
        this.app.use('/api', validacionRuta_1.default);
    }
    //Metodo inicia servidor
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log("Escuchando por puerto", this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
