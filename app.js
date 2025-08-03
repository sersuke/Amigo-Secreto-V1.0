// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo(){
    let input = document.getElementById('amigo').value.trim();
    
    if (input ===''){
        alert ('Por favor, ingrese un nombre correcto.');
        return;      
    }   
    if (amigos.includes (input)){
        alert('Ese nombre ya esta en la lista.');
        limpiarInput();
        return;
    }

    amigos.push(input);
    limpiarInput();
    mostrarAmigos();               
    console.log(amigos.length);
    console.log(`nombre valido agregado: ${input}`);     
}

function limpiarInput() {
    document.getElementById('amigo').value = '';
}

function mostrarAmigos(){
    let lista = document.getElementById('listaAmigos');
    let li = document.createElement('li');
    lista.innerHTML = ''; // limpiar lista antes de agregar nuevos elementos
    
    amigos.forEach(amigo => {
        lista.innerHTML += `<li> ${amigo}</li>`;
    });
}

function sortearAmigo(){ //para sortear de manera random un amigo de la lista
    let botonDeSorteo = document.getElementById ('resultado');
    if  (amigos.length > 0) {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSeleccionado = amigos [indiceAleatorio];        
        //mostrar resultado en pantalla
        botonDeSorteo.innerHTML = `🎁 El Amigo Secreto es: ${amigoSeleccionado}`;                 
        console.log('el amigo seleccionado es:', amigoSeleccionado);

        //limpiar lista de participantes luego del sorteo
        amigos = [];
        document.getElementById("listaAmigos").innerHTML = "";        
    }   
}


