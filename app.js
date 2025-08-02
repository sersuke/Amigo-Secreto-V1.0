// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos =[]; //array

function agregarAmigo(){ //funcion para agregar amigos
   let input = document.getElementById('amigo').value.trim();
   
   if (input === '') { //Validacion de entrada
        alert('Por favor, ingresa un nombre');
    } else {
        amigos.push(input);
        console.log(`Nombre válido: ${input}`);
       console.log(amigos.length);
    }
    limpiarInput();
}

function limpiarInput (){ //limpiar input luego de ingresar un nombre
    document.getElementById('amigo').value = '';
}

function mostrarAmigos() { //visualizar lista de amigos
    let lista = document.getElementById ('lista de amigos');
    document.createElement('li');
    lista.innerHTML = ''; // limpiar lista antes de agregar nuevos elementos

    amigos.forEach(amigos => {
        lista.innerHTML += `<li> ${amigo}</li>`;
    });

}







