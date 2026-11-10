function obtenerDatosDelServidor () {
    return new Promise ((resolve, reject) => {
        setTimeout(()=>{
            let user = {
                nombre: "jesus",
                edad: 21
            }
            if (user) {
                resolve (user)
            } else {
                reject ("Ocurrio un error al obtener los datos")
            }
        }, 2000)
    }) 
}

obtenerDatosDelServidor()
    .then(resultado => {
        return nombreMayuscula = resultado.nombre.toUperCase();
    })
    .then(nombreMayuscula =>{
        console.log(nombreMayuscula)
    })
    .catch(error=>{
        console.log(error);
    })
    .finally(()=>{
        console.log("Fin del programa");
    })

// obtenerDatosDelServidor();

async function obtenerPost() {
    try{
    let response = await fetch("https://jsonplaceholder.typicode.com/post")
        console.log(response);
    } catch {
        console.log(err);
    } finally {

    }
}

    // .then(response => {
    //     return response.json();
    // })
    // .then(json => {
    //     console.log(json);
    // })
    // .catch(err => {
    //     console.log(err);
    // })
    // .finally(() => {
    //     console.log("Termino la peticion al servidor")
    // })

obtenerPost();

