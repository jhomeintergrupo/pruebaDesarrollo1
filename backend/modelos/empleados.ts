import { Schema, model } from 'mongoose';

const empleado = new Schema  ({
    cedula: { type:String, required: true},
    nombre: { type:String, required: true},
    turno: { type:String, required: true}
})

export default model('turnos', empleado)