let nombre = "deadpool";
let real = "Wade Wilson";

console.log(nombre + " " + real);
console.log(`${ nombre } ${real}`);

let fullName = nombre + " " + real
let templatenName = `${ nombre } ${real}`

console.log(fullName === templatenName);

function deadpoolName() {
    return `${ nombre } is ${real}`;

}

console.log(`El nombre de ${deadpoolName()}`);