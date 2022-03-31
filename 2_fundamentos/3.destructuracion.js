//declaracion de un JSON

let deadPool = {
    nombre: `Wade`,
    apellido: `Winston`,
    poder: `Regeneracion`,
    getNombre: function() {
        return `${this.nombre} ${this.apellido} -poder: ${this.poder}`
    }
}

//console.log(deadPool.getNombre());


//Metodo antiguo:
// let Nombre = deadPool.Nombre;
// let Apellido = deadPool.Apellido;
// let Poder = deadPool.Poder;

//Destructuracion:
//Esto hace lo mismo que lo de arriba
let { nombre: primerNombre, apellido, poder } = deadPool;
console.log(primerNombre, apellido, poder);