import Vehiculo from "./Vehiculo.js";

class Automovil extends Vehiculo {

    // Constructor Atributos
    constructor(numeroPuertas, placa, marca, color) {
        super(id, tipo, placa, marca, color);
        this.id = id,
        this.tipo = tipo,    
        this.numeroPuertas = numeroPuertas;
    }

    // Polimorfismos    
    mostrarDatos() {
        return `${super.mostrarDatos()} con numeroPuertas: ${this.numeroPuertas} `;
    }

}


export default Automovil;