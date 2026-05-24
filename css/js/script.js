document.addEventListener('DOMContentLoaded', function () {

    /* MENÚ HAMBURGUESA */
    const btnHamburguesa = document.getElementById('btn-hamburguesa');
    const navPrincipal = document.getElementById('nav-principal');

    if (btnHamburguesa && navPrincipal) {

        btnHamburguesa.addEventListener('click', function () {
            const estaAbierto = navPrincipal.classList.toggle('abierto');

            btnHamburguesa.classList.toggle('activo');
            btnHamburguesa.setAttribute('aria-expanded', estaAbierto);
            document.body.classList.toggle('menu-abierto', estaAbierto);
        });

        function cerrarMenu() {
            navPrincipal.classList.remove('abierto');
            btnHamburguesa.classList.remove('activo');
            btnHamburguesa.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('menu-abierto');
        }

        navPrincipal.querySelectorAll('a, .boton-idioma').forEach(function (elemento) {
            elemento.addEventListener('click', cerrarMenu);
        });

        window.addEventListener('resize', function () {
            if (window.innerWidth >= 768) {
                cerrarMenu();
            }
        });
    }

    /* SLIDER */
    const imagenes = [
        "images/tacos.webp",
        "images/mole.webp",
        "images/tamales.webp",
        "images/tortillasamano.webp"
    ];

    let indice = 0;

const imagenSlider = document.getElementById("imagen-slider");
const btnAnterior = document.getElementById("btn-anterior");
const btnSiguiente = document.getElementById("btn-siguiente");

function mostrarImagen() {
    if (imagenSlider) {
        imagenSlider.src = imagenes[indice];
    }
}

if (imagenSlider && btnAnterior && btnSiguiente) {

    btnSiguiente.addEventListener("click", () => {

        indice++;

        if (indice >= imagenes.length) {
            indice = 0;
        }

        mostrarImagen();

    });

    btnAnterior.addEventListener("click", () => {

        indice--;

        if (indice < 0) {
            indice = imagenes.length - 1;
        }

        mostrarImagen();

    });

    setInterval(() => {

        indice++;

        if (indice >= imagenes.length) {
            indice = 0;
        }

        mostrarImagen();

    }, 4000);

}

    /*SALUDO DE BIENVENIDA*/

function mostrarSaludoBienvenida(idioma) {

    const saludoBienvenida = document.getElementById("saludo-bienvenida");

    if (!saludoBienvenida) return;

    const hora = new Date().getHours();
    let mensaje = "";

    if (idioma === "es") {
        if (hora < 12) {
            mensaje = "¡Buenos días! Bienvenida a la gastronomía mexicana";
        } else if (hora < 18) {
            mensaje = "¡Buenas tardes! Descubre los sabores de México";
        } else {
            mensaje = "¡Buenas noches! Explora la cocina mexicana";
        }
    } else {
        if (hora < 12) {
            mensaje = "Good morning! Welcome to Mexican gastronomy";
        } else if (hora < 18) {
            mensaje = "Good afternoon! Discover the flavors of Mexico";
        } else {
            mensaje = "Good evening! Explore Mexican cuisine";
        }
    }

    saludoBienvenida.textContent = mensaje;
    saludoBienvenida.classList.add("mostrar-saludo");

    setTimeout(() => {
        saludoBienvenida.classList.remove("mostrar-saludo");
    }, 4000);
}

   /* CAMBIAR IDIOMAS */
window.cambiarIdioma = function (idioma) {

    const elementos = document.querySelectorAll("[data-es][data-en]");

    elementos.forEach(elemento => {
      elemento.innerHTML = elemento.getAttribute("data-" + idioma);
    });

    document.documentElement.lang = idioma;
    localStorage.setItem("idioma", idioma);

    if (typeof mostrarSaludoBienvenida === "function") {
        mostrarSaludoBienvenida(idioma);
    }

};

document.addEventListener("DOMContentLoaded", function () {
    const idiomaGuardado = localStorage.getItem("idioma") || "es";
    window.cambiarIdioma(idiomaGuardado);
});

/* BOTÓN VOLVER ARRIBA */
const btnArriba = document.getElementById("btn-arriba");

    if (btnArriba) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 300) {
                btnArriba.style.display = "block";
            } else {
                btnArriba.style.display = "none";
            }

        });

        btnArriba.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });
    }

/* HEADER DINÁMICO SOLO EN HOME */
const header = document.querySelector("header");

    if (header && document.body.classList.contains("home")) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 80) {
                header.classList.add("header-scroll");
            } else {
                header.classList.remove("header-scroll");
            }

        });
    }
/* MENÚ DESPLEGABLE */

const menuDesplegable = document.querySelector(".menu-desplegable");
const submenu = document.querySelector(".submenu");

if (menuDesplegable && submenu) {

    const botonMenu = menuDesplegable.querySelector("a");

    botonMenu.addEventListener("click", function (e) {

        if (window.innerWidth <= 768) {
            e.preventDefault();
            submenu.classList.toggle("mostrar-submenu");
        }

    });

}
});

const imagenesHistoria = [
    "images/senora.webp",
    "images/historia.webp",
    "images/campesinos.webp",
    "images/comidamex.webp",
    "images/chiles.webp",
    "images/manosagricultor.webp"
];

let indiceHistoria = 0;

const imagenHistoria = document.getElementById("imagen-historia");
const btnHistoriaAnterior = document.getElementById("btn-historia-anterior");
const btnHistoriaSiguiente = document.getElementById("btn-historia-siguiente");

function mostrarImagenHistoria() {

    if (imagenHistoria) {
        imagenHistoria.src = imagenesHistoria[indiceHistoria];
    }

}

if (imagenHistoria && btnHistoriaAnterior && btnHistoriaSiguiente) {

    btnHistoriaSiguiente.addEventListener("click", () => {

        indiceHistoria++;

        if (indiceHistoria >= imagenesHistoria.length) {
            indiceHistoria = 0;
        }

        mostrarImagenHistoria();

    });

    btnHistoriaAnterior.addEventListener("click", () => {

        indiceHistoria--;

        if (indiceHistoria < 0) {
            indiceHistoria = imagenesHistoria.length - 1;
        }

        mostrarImagenHistoria();

    });

    setInterval(() => {

        indiceHistoria++;

        if (indiceHistoria >= imagenesHistoria.length) {
            indiceHistoria = 0;
        }

        mostrarImagenHistoria();

    }, 4000);

}
