import { Request, Response, Router } from 'express';

class IndiceRutas {
    router: Router;

    constructor() {
        this.router = Router();
        this.rutas();
    }

    rutas(){
        this.router.get('/', (req, res) => res.send('BIENVENIDO AL API'));
    }    
}

const indiceRutas = new IndiceRutas ();
indiceRutas.rutas();

export default indiceRutas.router;