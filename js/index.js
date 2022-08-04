console.log("Conectado..");

  // Import y variables constantes
const formulario = document.querySelector('#formulario');
const inicio = document.querySelector('#inicio');
let automovil = document.querySelector('#auto');
let moto = document.querySelector('#moto');
let camion = document.querySelector('#camion');
const eliminar = document.querySelector('#eliminar');



//Modelo
import Automovil from "../model/Automovil.js";
import Moto from "../model/Moto.js";
import Camion from "../model/Camion.js";
//import bd_vehiculo from "../data/bd_vehiculo.js";

// Controlador
import { addVehiculo, 
         findAll 
        } 
from "../controller/controllerVehiculo.js";

import { generarId, 
         limpiarHTML } from "../helper/funciones.js";

// Bloque de Funciones 

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  inicio.addEventListener('click', (e) => {
    e.preventDefault();
    limpiarHTML("#index");
    const infVehiculo = document.querySelector("#inicio");

    infVehiculo.innerHTML = `
                              <div id="index">
                                <h2>Listado de Vehiculos</h2>
                                <div id="vehiculo">


                                </div>
                              </div>
                            `;

  })

  automovil.addEventListener('click', (e) => {
    e.preventDefault();
    limpiarHTML("#index");
    const infVehiculo = document.querySelector("#inicio");

    infVehiculo.innerHTML = `
                            <div id="index">
                              <div id="vehiculo"> 

                                  <div id="tipo">
                                    <label for="placa">
                                      Placa:
                                      <input type="text" id="placa" placeholder="Tu placa">
                                    </label>
                                  </div>
                                  <div>
                                    <label for="marca">
                                      Marca:
                                      <input type="text" id="marca" placeholder="Tu marca">
                                    </label>
                                  </div>
                                  <div>
                                    <label for="color">
                                      Color:
                                      <input type="text" id="color" placeholder="Tu color">
                                    </label>
                                  </div>
                                  <div id="tipo-vehiculo">
                                    <label for="num-puerta">
                                        Numero puertas:
                                        <input type="text" id="num-puerta" placeholder="Numero puertas">
                                    </label> 
                                  </div>

                              </div>
                            </div>
                            `;

    const guardar = document.querySelector("#guardar");

    guardar.addEventListener('click', (e) => {  
      e.preventDefault();
      
      const infAuto = document.querySelector("#num-puerta");
      if(infAuto !== null){
        validarFormulario(infAuto);
      }
      
    })
  
  })

  moto.addEventListener('click', (e) => {
    e.preventDefault();
    limpiarHTML("#vehiculo");
    const infVehiculo = document.querySelector("#inicio");
    infVehiculo.innerHTML =`
                            <div id="index">
                              <div id="vehiculo"> 

                                <div id="tipo">
                                  <div>
                                    <label for="placa">
                                      Placa:
                                      <input type="text" id="placa" placeholder="Tu placa">
                                    </label>
                                  </div>
                                  <div>
                                    <label for="marca">
                                      Marca:
                                      <input type="text" id="marca" placeholder="Tu marca">
                                    </label>
                                  </div>
                                  <div>
                                    <label for="color">
                                      Color:
                                      <input type="text" id="color" placeholder="Tu color">
                                    </label>
                                  </div>
                                  <div id="tipo-vehiculo">
                                    <label for="num-llantas">
                                          Numero Llantas:
                                          <input type="text" id="num-llantas" placeholder="Numero llantas">
                                    </label>
                                  </div>
                                </div>

                              </div>
                            </div>
                        `;

    const guardar = document.querySelector("#guardar");
    guardar.addEventListener('click', (e) => {  
      e.preventDefault();
      const infMoto = document.querySelector("#num-llantas");
      if(infMoto !== null){
        validarFormulario(infMoto);
      }
    })
  })

  camion.addEventListener('click', (e) => {
    e.preventDefault();
    limpiarHTML("#vehiculo");
    const infVehiculo = document.querySelector("#inicio");
    infVehiculo.innerHTML = `
                            <div id="index">
                              <div id="vehiculo"> 
                                <div id="tipo">
                                  <div>
                                    <label for="placa">
                                      Placa:
                                      <input type="text" id="placa" placeholder="Tu placa">
                                    </label>
                                  </div>
                                  <div>
                                    <label for="marca">
                                      Marca:
                                      <input type="text" id="marca" placeholder="Tu marca">
                                    </label>
                                  </div>
                                  <div>
                                    <label for="color">
                                      Color:
                                      <input type="text" id="color" placeholder="Tu color">
                                    </label>
                                  </div>
                                  <div id="tipo-vehiculo">
                                    <label for="capacidad-max">
                                        Capacidad Maxima:
                                        <input type="text" id="capacidad-max" placeholder="Capacidad maxima">
                                    </label> 
                                  </div>  
                                </div>  

                              </div>  
                            </div>      
                            `;
    guardar.addEventListener('click', (e) => {  
      e.preventDefault();
      const infCamion = document.querySelector("#capacidad-max");
      if(infCamion !== null){
        validarFormulario(infCamion);
      }
    })                            
  })

});

const validarFormulario = (inf) => { 

  let vehiculo;

  const placa = document.querySelector("#placa").value;
  const marca = document.querySelector("#marca").value;
  const color = document.querySelector("#color").value;

  if([placa,marca,color, inf.value].includes("")){
    console.log("Todos los campos son obligatorios");
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

  findAll();
 
}