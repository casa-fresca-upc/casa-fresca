// Menú móvil
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", function () {
    const abierto = nav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", abierto);
});

// Cerrar el menú al elegir una opción
nav.querySelectorAll("a").forEach(function (enlace) {
    enlace.addEventListener("click", function () {
        nav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

// "¿Por qué?" de la tarjeta de resumen
const whyBtn = document.getElementById("whyBtn");
const whyText = document.getElementById("whyText");

whyBtn.addEventListener("click", function () {
    const oculto = whyText.hasAttribute("hidden");
    if (oculto) {
        whyText.removeAttribute("hidden");
    } else {
        whyText.setAttribute("hidden", "");
    }
    whyBtn.setAttribute("aria-expanded", oculto);
});
