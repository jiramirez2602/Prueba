//1
function sumar(a, b) {
    return a + b
}

let sumarse = (a, b) => a + b;

console.log(sumar(5, 10));
console.log(sumarse(5, 10));

//2
function saludar() {
    return "Hola mundo"
}

console.log(saludar());

let saludar1 = () => `Hola mundo`
let saludar2 = (nombre) => `Hola ${nombre}`;

console.log(saludar1());
console.log(saludar2(`Jorge`));

//3
let deadPool = {
    Nombre: "Wade",
    Apellido: "Wilson",
    Poder: "Regeneracion",
    getNombre() {
        return `${this.Nombre} ${this.Apellido} cuyo poder es ${this.Poder}`
    }
}

// En el caso de arriba no seemplea una
// funcion de flecha porque el this no apunta correctamente en la funciones de flechaxdxd

console.log(deadPool.getNombre());