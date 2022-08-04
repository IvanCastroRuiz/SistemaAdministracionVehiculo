//Modelo
import Automovil from "../model/Automovil.js";
import Moto from "../model/Moto.js";
import Camion from "../model/Camion.js";

// Conexion con la base de datos
import bd_vehiculo from '../data/bd_vehiculo.js';

import { 
    generarId
   } 
from "../helper/funciones.js";


export const addVehiculo = (vehiculo) => {
    bd_vehiculo.push(vehiculo);
    mostrarAlerta("Enviando la informacion a la base de datos");
};

export const findAll = () => {
   console.log(bd_vehiculo.length);
   for (const vehicle of bd_vehiculo) {
        console.log(vehicle);

        
    };
};

export const deleteId = (id) => {
    
};

export const validarFormulario = (inf) => { 

    let vehiculo;
  
    const placa = document.querySelector("#placa").value;
    const marca = document.querySelector("#marca").value;
    const color = document.querySelector("#color").value;
  
    if([placa,marca,color, inf.value].includes("")){
      mostrarAlerta("Todos los campos son obligatorios", true);
      return;
    }
  
    if(inf.id === "num-puerta"){
      const id = generarId();
      vehiculo = new Automovil(id,inf.value,placa, marca, color);
      addVehiculo(vehiculo);
    }
  
    if(inf.id === "num-llantas"){
      const id = generarId();
      vehiculo = new Moto(id,inf.value,placa, marca, color);
      addVehiculo(vehiculo);
    }
  
    if(inf.id === "capacidad-max"){
      const id = generarId();
      vehiculo = new Camion(id,inf.value,placa, marca, color);
      addVehiculo(vehiculo);
    } 
};

export const mostrarAlerta = (mensaje, error = null) => {
    const respuesta = document.querySelector('#resultados');
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;
    if(error){
        alerta.classList.add('error');
    }else{
        console.log("correcto")
        alerta.classList.add('correcto');
    };
    respuesta.appendChild(alerta);
    setTimeout(() => {
        alerta.remove();
    }, 3000);
};

export default {
    addVehiculo,
    findAll,
    validarFormulario
} 