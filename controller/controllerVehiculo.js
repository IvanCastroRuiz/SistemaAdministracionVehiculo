import bd_vehiculo from '../data/bd_vehiculo.js';

export const addVehiculo = (vehiculo) => {
    bd_vehiculo.push(vehiculo);
}

export const findAll = () => {
   for (const vehicle of bd_vehiculo) {
        console.log(vehicle.mostrarDatos());
    };
};

export const deleteId = (id) => {
    
};

export default {
    addVehiculo,
    findAll
} 