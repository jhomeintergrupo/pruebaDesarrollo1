import express from 'express'
import morgan  from 'morgan'
import mongoose from 'mongoose'
import cors from 'cors'

//importar rutas API
import indexroutes from './rutas/indexRutas'
import validacionRuta from './rutas/validacionRuta'



class Server {

    public app: express.Application;

    //Se inicializa aplicacion express y configuracion servidor
    constructor() {
        this.app = express()
        this.config()
        this.rutas()
    }
    
    config(){
        const MONGO_CONN = 'mongodb://localhost/empleados'
        mongoose.set('useFindAndModify', false)
        mongoose.connect(MONGO_CONN, {
            useNewUrlParser: true,
            useCreateIndex: true
        })
        .then(db => console.log("Se ha conectado la base"))

        this.app.set('port', process.env.PORT || 3000)
        this.app.use(morgan('dev'))
        this.app.use(express.json())
        this.app.use(cors());
    }

    rutas(){
        this.app.use(indexroutes)
        this.app.use('/api', validacionRuta)
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