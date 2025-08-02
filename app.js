// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos =[]; //array

function agregarAmigo(){ //funcion para agregar amigos
   let input = document.getElementById('amigo').value;
   
   if (input === '') { //Validacion de entrada
        alert('Por favor, ingresa un nombre');
    } else {
        amigos.push(input);
        console.log(`Nombre válido: ${input}`);
       console.log(amigos.length);
       mostrarAmigos(); //llamar a la funcion   
    }
    limpiarInput();// llamar a la funcion
}

function limpiarInput (){ //limpiar input luego de ingresar un nombre
    document.getElementById('amigo').value = '';
}

function mostrarAmigos() { //visualizar lista de amigos
    let lista = document.getElementById('listaAmigos');
    let li = document.createElement('li');
    lista.innerHTML = ''; // limpiar lista antes de agregar nuevos elementos

    amigos.forEach(amigo => {
        lista.innerHTML += `<li> ${amigo}</li>`;
    });

}







