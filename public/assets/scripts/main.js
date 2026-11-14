// Menú móvil
const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", function () {
    const abierto = menu.classList.toggle("abierto");
    menuToggle.setAttribute("aria-expanded", abierto);
});

// Cerrar el menú al elegir una opción
menu.querySelectorAll("a").forEach(function (enlace) {
    enlace.addEventListener("click", function () {
        menu.classList.remove("abierto");
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
