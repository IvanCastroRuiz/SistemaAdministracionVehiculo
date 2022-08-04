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
   
   for (const vehiculo of bd_vehiculo) {
        const listadoContactos = document.querySelector('#listado-vehiculo');
        
        vehiculo

        if(listadoContactos){
            listadoContactos.innerHTML += `
                                <tr>
                                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                        <p class="text-gray-600 font-bold"> ${vehiculo.placa} </p>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                                        <p class="text-gray-600">${vehiculo.marca}</p>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-600">    
                                        <p class="text-gray-600">${vehiculo.color}</p>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                                        <p class="text-gray-600">${vehiculo.color}</p>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                                        <a id="editar" href="editar-contacto.html?id=${vehiculo.id}" data-vehiculo="${vehiculo.id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                                        <a id="eliminar" href="#" data-vehiculo="${vehiculo.id}" class="eliminar text-red-600 hover:text-red-900">Eliminar</a>
                                    </td>
                                </tr>
                            `;
        };
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