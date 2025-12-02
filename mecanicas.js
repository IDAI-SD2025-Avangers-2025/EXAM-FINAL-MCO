var perfilCard = document.querySelector('.perfil-card');
var nombreUsuario = perfilCard.querySelector('h2');
var ocupacion = perfilCard.querySelector('p');

let esMasculino = true;

function cambiarGenero() {
    if(esMasculino) {
        nombreUsuario.textContent = nombreUsuario.textContent.replace(/o$/, 'a');
        ocupacion.textContent = ocupacion.textContent.replace(/o$/, 'a');
        alert("Se han hecho cambios en los datos del perfil");
        esMasculino = false;
    }
    else {S
        nombreUsuario.textContent = "Mauricia Campos Orozca";
        ocupacion.textContent = "Estudiante a Ingeniero";
        alert("Se han hecho cambios en los datos del perfil");
        esMasculino = true;
    }
}

perfilCard.addEventListener('click', cambiarGenero);
