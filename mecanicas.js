var perfilCard = document.querySelector('.perfil-card');
var nombreUsuario = perfilCard.querySelector('h2');
var ocupacion = perfilCard.querySelector('p');

let esMasculino = true;
let nombreOriginal = nombreUsuario.textContent;
let ocupacionOriginal = ocupacion.textContent;

function cambiarGenero() {
    if(esMasculino) {
        nombreUsuario.textContent = nombreUsuario.textContent.replace("Mauricio", "Mauricia");
        ocupacion.textContent = ocupacion.textContent.replace("Ingeniero", "Ingeniera");
        alert("Se han hecho cambios en los datos del perfil");
        esMasculino = false;
    } else {
        nombreUsuario.textContent = nombreOriginal;
        ocupacion.textContent = ocupacionOriginal;
        alert("Se han hecho cambios en los datos del perfil");
        esMasculino = true;
    }
}

perfilCard.addEventListener('click', cambiarGenero);
