import bd_vehiculo from '../data/bd_vehiculo.js';

export const addVehiculo = (vehiculo) => {
    bd_vehiculo.push(vehiculo);
}


export default {
    addVehiculo
} 