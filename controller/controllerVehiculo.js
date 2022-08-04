import bd_vehiculo from '../data/bd_vehiculo.js';

export const addVehiculo = (vehiculo) => {
    bd_vehiculo.push(vehiculo);
    console.log(bd_vehiculo);
}

export const findAll = () => {
   console.log(bd_vehiculo.length);
   for (const vehicle of bd_vehiculo) {
        console.log(vehicle);
    };
};

export const deleteId = (id) => {
    
};

export default {
    addVehiculo,
    findAll
} 