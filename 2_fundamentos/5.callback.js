// Callback basico
setTimeout(() => {
    console.log(`Hola mundo`);
}, 3000)

let getUsuarioById = (id, callBack) => {
    //llama a DB
    let usuario = {
        nombre: "Jorge",
        id
    }

    //Condicional id 20 no existe
    if (id === 20) {
        callBack(`El usuario con id ${id} no existe en la base de datos`)
    } else {
        callBack(null, usuario)
    }

}

getUsuarioById(10, (error, usuario) => {
    if (error) {
        return console.log(error)
    }
    console.log(`Data: `, usuario)
});