console.log("Conectado..");

// Import y variables constantes
import Automovil from "../model/Automovil.js";
import Moto from "../model/Moto.js";
import Camion from "../model/Camion.js";

const formulario = document.querySelector('#formulario');
const inicio = document.querySelector('#inicio');
let automovil = document.querySelector('#auto');
let moto = document.querySelector('#moto');
let camion = document.querySelector('#camion');

// Bloque de Funciones 

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  inicio.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Inicio....");

  })

  automovil.addEventListener('click', (e) => {
    e.preventDefault();

    const infVehiculo = document.querySelector("#tipo-vehiculo");
    infVehiculo.innerHTML = `<label for="num-puerta">
                                Numero Puertas:
                                <input type="text" id="num-puerta" placeholder="Numero de puerta">
                            </label> 
                            `;

    const guardar = document.querySelector("#guardar");
  
  })

  moto.addEventListener('click', (e) => {
    e.preventDefault();
    automovil = "";
    camion = "";
    const infVehiculo = document.querySelector("#tipo-vehiculo");

    infVehiculo.innerHTML = `<label for="num-llantas">
                                Numero Llantas:
                                <input type="text" id="num-llantas" placeholder="Numero llantas">
                            </label> 
                            `;
    const guardar = document.querySelector("#guardar");
 
  })

  camion.addEventListener('click', (e) => {
    e.preventDefault();
    const infVehiculo = document.querySelector("#tipo-vehiculo");
    console.log(infVehiculo);

    infVehiculo.innerHTML = `<label for="capacidada-max">
                                Capacidad Maxima:
                                <input type="text" id="capacidada-max" placeholder="Capacidad maxima">
                            </label> 
                            `;
  })

});

const validarFormulario = (tipo) => {
  //e.preventDefault();

  console.log(tipo);

  const placa = document.querySelector("#placa").value;
  const marca = document.querySelector("#marca").value;
  const color = document.querySelector("#color").value;

      
  if (auto) {
    if ([placa, marca, color, auto].includes("")) {
        console.log("Todos los campos son obligatorios");
        return;
    }
    console.log("Aca para guardar la informacion del auto");
  }/*else{
    if(moto){
      if ([placa, marca, color, moto].includes("")) {
          console.log("Todos los campos son obligatorios");
          return;
      }
      console.log("Aca para guardar la informacion del moto");
    }else{

      if ([placa, marca, color, camion].includes("")) {
          console.log("Todos los campos son obligatorios");
          return;
      }
      console.log("Aca para guardar la informacion del camion");
    }
  }*/
}