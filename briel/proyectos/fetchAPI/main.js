descargarUsuarios(30);


function descargarUsuarios(cantidad) {
    const api = `https://api.randomuser.me/?nat=US&results=${cantidad}`;

    // llamando a Fetch
    fetch(api)
        .then(respuesta => respuesta.json() )
        .then(datos => imprimirHTML(datos.results)); 
}

function imprimirHTML(datos) {
    datos.forEach(usuario => {
        const li = document.createElement('li');

        const { name: {first}, name: {last}, picture: {medium}} = usuario;

        li.innerHTML = `
            Nombre: ${first} ${last}

            <img src="${medium}" alt="imagen de ${first} ${last}">

        `;

        document.querySelector('#app').appendChild(li);
    });
}