// PASO 1: Aquí personalizas las cinco estrellas.
// x = posición horizontal (%). y = posición vertical (%).
const recuerdos = [
  {
   titulo: 'El comienzo de nuestra historia',
    mensaje: 'Hay momentos que parecen pequeños, pero terminan convirtiéndose en recuerdos inolvidables.',
    simbolo: '✨', x: 18, y: 24,
  },
  {
    titulo: 'Tu sonrisa',
    mensaje: 'Si me pidieran escoger mi rincón favorito del universo, elegiría esos instantes en los que te veo sonreír.',
    simbolo: '🌙', x: 80, y: 28,
     foto: 'imagenes/TuSonrisa.jpeg'

  },
 {
    titulo: 'Los pequeños momentos',
    mensaje: 'A veces lo extraordinario no es un gran acontecimiento, sino una conversación, una mirada o una risa contigo.',
    simbolo: '💫',
    x: 24,
    y: 73,
    foto: 'imagenes/superandoMiedos.jpeg.jpeg'
},
  {
    titulo: 'Lo que admiro de ti',
    mensaje: 'Tu manera de ser, lo que sueñas y la forma en que miras el mundo son razones para admirarte mucho más de lo que imaginas.',
    simbolo: '🌷', x: 79, y: 70,
foto: 'imagenes/LoQueAdmiroDeTi.jpeg'
  },
  {
    titulo: 'Mi deseo',
    mensaje: 'Ojalá nos esperen muchísimos cielos, aventuras y recuerdos por descubrir. Me encanta pensar en lo que todavía podemos vivir.',
    simbolo: '⭐', x: 51, y: 17,
        foto: 'imagenes/MiDeseo.jpeg'

  },
  {titulo:'Nuestro próximo capitulo',
   mensaje: 'No sé que nos espere mañana, pero me gustaría descubrirlo contigo.',
   simbolo: '💖', x: 50, y: 83,
       foto: 'imagenes/NuestroProximoCapitulo.jpeg'

  }
];

// PASO 2: Buscamos en el HTML los elementos que vamos a controlar.
const inicio = document.querySelector('#inicio');
const universo = document.querySelector('#universo');
const cielo = document.querySelector('#cielo');
const modal = document.querySelector('#modal');
const pantallaFinal = document.querySelector('#pantallaFinal');
const progreso = document.querySelector('#progreso');
const mostrarFinal = document.querySelector('#mostrarFinal');
const explorados = new Set(); // Un Set evita contar dos veces la misma estrella.

// PASO 3: Creamos 130 estrellas de fondo.
for (let i = 0; i < 130; i++) {
  const punto = document.createElement('span');
  punto.className = 'particula';
  punto.style.left = Math.random() * 100 + '%';
  punto.style.top = Math.random() * 100 + '%';
  const tamano = 1 + Math.random() * 2;
  punto.style.width = tamano + 'px';
  punto.style.height = tamano + 'px';
  punto.style.animationDelay = Math.random() * 5 + 's';
  cielo.appendChild(punto);
}

// PASO 4: Creamos las cinco estrellas que sí se pueden tocar.
recuerdos.forEach((recuerdo, indice) => {
  const boton = document.createElement('button');
  boton.type = 'button';
  boton.className = 'estrella-recuerdo';
  boton.style.left = recuerdo.x + '%';
  boton.style.top = recuerdo.y + '%';
  boton.setAttribute('aria-label', 'Abrir estrella: ' + recuerdo.titulo);

  const luz = document.createElement('span');
  luz.className = 'estrella-luz';
  const etiqueta = document.createElement('span');
  etiqueta.className = 'estrella-etiqueta';
  etiqueta.textContent = recuerdo.titulo;
  boton.append(luz, etiqueta);

  boton.addEventListener('click', () => abrirRecuerdo(indice, boton));
  cielo.appendChild(boton);
});



function abrirRecuerdo(indice, boton) {

    const recuerdo = recuerdos[indice];

    document.querySelector('#simboloRecuerdo').textContent = recuerdo.simbolo;

    document.querySelector('#numeroRecuerdo').textContent =
        `ESTRELLA ${indice + 1} DE ${recuerdos.length}`;

    document.querySelector('#tituloRecuerdo').textContent = recuerdo.titulo;

    document.querySelector('#textoRecuerdo').textContent = recuerdo.mensaje;

    // Buscar el espacio de la fotografía
    const fotoRecuerdo = document.querySelector('#fotoRecuerdo');

    // Mostrar la fotografía si el recuerdo tiene una
    if (recuerdo.foto) {

        fotoRecuerdo.src = recuerdo.foto;
        fotoRecuerdo.classList.remove('oculto');

    } else {

        fotoRecuerdo.classList.add('oculto');
        fotoRecuerdo.removeAttribute('src');

    }

    // Abrir la tarjeta del recuerdo
    modal.classList.remove('oculto');

    document.querySelector('#cerrar').focus();

    // Registrar la estrella como descubierta
    explorados.add(indice);

    boton.classList.add('visitada');

    progreso.textContent =
        `${explorados.size} de ${recuerdos.length} estrellas descubiertas`;

    // Mostrar el final cuando descubran todas las estrellas
    if (explorados.size === recuerdos.length) {
        mostrarFinal.classList.remove('oculto');
    }

}

function cerrarRecuerdo() { modal.classList.add('oculto'); }

// PASO 6: Hacemos que los botones reaccionen a los clics.
document.querySelector('#comenzar').addEventListener('click', () => {
  inicio.classList.add('oculto');
  universo.classList.remove('oculto');
});
document.querySelector('#cerrar').addEventListener('click', cerrarRecuerdo);
document.querySelector('#seguir').addEventListener('click', cerrarRecuerdo);
modal.addEventListener('click', (evento) => {
  if (evento.target === modal) cerrarRecuerdo();
});
document.addEventListener('keydown', (evento) => {
  if (evento.key === 'Escape') cerrarRecuerdo();
});
mostrarFinal.addEventListener('click', () => {
  universo.classList.add('oculto');
  pantallaFinal.classList.remove('oculto');
});
document.querySelector('#volver').addEventListener('click', () => {
  pantallaFinal.classList.add('oculto');
  universo.classList.remove('oculto');
});
function mostrarMensaje() {
  alert("Eres mi estrella favorita ❤️");
}
function mostrarSorpresa() {

  const sorpresa = document.getElementById("sorpresaRomantica");

  sorpresa.classList.remove("sorpresa-oculta");

  sorpresa.classList.add("sorpresa-visible");

}
const botonSorpresa = document.getElementById("botonSorpresa");

botonSorpresa.addEventListener("click", mostrarSorpresa);
for (let i = 0; i < 10; i++) {
    console.log("Creando estrella", i);
}
const cieloFondo = document.getElementById("cieloEstrellado");

for (let i = 0; i < 100; i++) {

    // Crear una estrella
    const estrella = document.createElement("div");

    // Asignarle su clase CSS
    estrella.classList.add("estrella-fondo");

    // Crear posiciones aleatorias
    const posicionX = Math.random() * 100;
    const posicionY = Math.random() * 100;
    const tamaño = Math.random() * 3 + 1;
    const velocidad = Math.random() * 4 + 2;
    const profundidad = Math.random() * 3 + 1;
    // Colocar la estrella en el cielo
    estrella.style.left = posicionX + "%";
    estrella.style.top = posicionY + "%";
    estrella.style.width = tamaño + "px";
    estrella.style.height = tamaño + "px";
    estrella.style.animationDuration = velocidad + "s";
   estrella.dataset.profundidad = profundidad;
    estrella.style.animationDelay = Math.random() * -5 + "s";

    
    cieloFondo.appendChild(estrella);

} 
document.addEventListener("mousemove", function(evento) {

    const mouseX = evento.clientX;
    const mouseY = evento.clientY;

    const centroX = window.innerWidth / 2;
    const centroY = window.innerHeight / 2;

    const movimientoX = (mouseX - centroX) / centroX;
    const movimientoY = (mouseY - centroY) / centroY;

    const estrellas = document.querySelectorAll(".estrella-fondo");

    estrellas.forEach(function(estrella) {

        const profundidad = Number(estrella.dataset.profundidad);

        const desplazamientoX = movimientoX * profundidad * 40;
        const desplazamientoY = movimientoY * profundidad * 40;

        estrella.style.transform =
            `translate(${desplazamientoX}px, ${desplazamientoY}px)`;

    });

});
function crearEstrellaFugaz() {

    // 1. Buscar el contenedor de la lluvia
    const contenedor = document.getElementById("lluviaEstrellas");

    // 2. Crear una estrella nueva
    const estrella = document.createElement("div");

    // 3. Asignarle su clase CSS
    estrella.classList.add("estrella-fugaz");
const longitud = 60 + Math.random() * 100;
estrella.style.width = longitud + "px";
    const brillo = 0.45 + Math.random() * 0.55;
estrella.style.filter = `brightness(${brillo})`;
    const posicionX = Math.random() * 20 - 20;
    const posicionY = Math.random() * 45 - 10;

    estrella.style.left = posicionX + "vw";
    estrella.style.top = posicionY + "vh";

    // 5. Elegir una velocidad diferente para cada estrella
    const duracion = 1.2 + Math.random() * 2.8;

    // 6. Activar su movimiento
    estrella.style.animation =
        `viajarEstrella ${duracion}s linear forwards`;

    // 7. Agregar la estrella al universo
    contenedor.appendChild(estrella);

    // 8. Eliminarla cuando termine su recorrido
    estrella.addEventListener("animationend", function() {
        estrella.remove();
    });

}
function iniciarLluvia() {

    const totalEstrellas = 50;

    let tiempo = 0;

    for (let i = 0; i < totalEstrellas; i++) {

        setTimeout(function() {

            crearEstrellaFugaz();

        }, tiempo);

        // Primera etapa: lluvia suave
        if (i < 10) {
            tiempo += 100;
        }

        // Segunda etapa: lluvia intensa
        else if (i < 40) {
            tiempo += 40;
        }

        // Tercera etapa: lluvia disminuyendo
        else {
            tiempo += 100;
        }

    }

}

setTimeout(function() {

    // Crear la primera lluvia
    iniciarLluvia();

    // Repetir la lluvia cada 4 segundos
    setInterval(iniciarLluvia, 4000);

}, 3000);
const botonCarta = document.querySelector('#abrirCarta');
const textoCarta = document.querySelector('#textoCarta');

let mensajeOriginal = '';
let temporizadorCarta;

botonCarta.addEventListener('click', function() {

    const carta = document.querySelector('#cartaRomantica');
    const iconoSobre = document.querySelector('#iconoSobre');

    carta.classList.toggle('oculto');

    // Detener cualquier escritura anterior
    clearInterval(temporizadorCarta);

    if (carta.classList.contains('oculto')) {

        iconoSobre.textContent = '✉️';
        botonCarta.classList.remove('sobre-abierto');

    } else {

        iconoSobre.textContent = '💌';
        botonCarta.classList.add('sobre-abierto');

        // Guardar la carta original una sola vez
        if (!mensajeOriginal) {
            mensajeOriginal = textoCarta.innerText.trim();
        }

        // Preparar el efecto de escritura
        const letras = Array.from(mensajeOriginal);
        let posicion = 0;

        textoCarta.textContent = '';
        textoCarta.style.whiteSpace = 'pre-line';

        // Escribir poco a poco
        temporizadorCarta = setInterval(function() {

            textoCarta.textContent += letras
                .slice(posicion, posicion + 4)
                .join('');

            posicion += 4;

            if (posicion >= letras.length) {
    clearInterval(temporizadorCarta);

    // Celebrar cuando termine la carta
    lanzarCorazones();
}

        }, 20);

    }

});
function lanzarCorazones() {

    for (let i = 0; i < 20; i++) {

        const corazon = document.createElement('span');

        corazon.classList.add('corazon-flotante');

        corazon.textContent = '❤️';

        // Posición horizontal aleatoria
        corazon.style.left = Math.random() * 100 + '%';

        // Cada corazón aparece en un momento diferente
        corazon.style.animationDelay = Math.random() * 2 + 's';

        document.body.appendChild(corazon);

        // Eliminar el corazón después de la animación
        setTimeout(function() {
            corazon.remove();
        }, 6500);

    }

}