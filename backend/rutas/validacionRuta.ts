import { Request, Response, Router } from 'express';

import empleados from '../modelos/empleados'

class ValidacionRuta {

    router: Router

    constructor() {
        this.router = Router()
        this.rutas()
    }
    //metodo para extraer toda la db
    traerDatos(req:Request, res:Response){
       empleados.find({}, (err, empleados) => {
        return res.json(empleados);
    }); 
    }

    //metodo crea empleado
    public async crearEmp(req: Request, res: Response): Promise<void>{
        const { cedula, nombre, turno } = req.body;
        const newPost= new empleados({cedula, nombre, turno});
        await newPost.save();
        res.json({status: res.status, data: newPost});
    }


    rutas(){
        this.router.get('/validacion', this.traerDatos),
        this.router.post('/validacion', this.crearEmp)
    }
}

const validar = new ValidacionRuta()
export default validar.router