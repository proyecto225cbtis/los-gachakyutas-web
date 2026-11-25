/* ============================================================================
   1. MENÚ DESPLEGABLE INTERACTIVO PARA VERSIÓN MÓVIL (EVENTO CLICK)
   ============================================================================ */
function inicializarMenuMovil() {
    const btnMenu = document.getElementById("btn-menu-toggle");
    const navPrincipal = document.getElementById("main-nav");

    if (!btnMenu || !navPrincipal) return;

    // Evento click para abrir/cerrar la carta de navegación en móviles (<768px)
    btnMenu.addEventListener("click", () => {
        const estaAbierto = navPrincipal.classList.toggle("is-open");
        btnMenu.setAttribute("aria-expanded", String(estaAbierto));
        btnMenu.textContent = estaAbierto ? "✕ Cerrar" : "🥢 Carta / Menú";
    });

    // Cerrar la navegación automáticamente al elegir una sección en móvil
    const enlacesNav = navPrincipal.querySelectorAll("a");
    enlacesNav.forEach((enlace) => {
        enlace.addEventListener("click", () => {
            if (window.innerWidth < 768) {
                navPrincipal.classList.remove("is-open");
                btnMenu.setAttribute("aria-expanded", "false");
                btnMenu.textContent = "🥢 Carta / Menú";
            }
        });
    });
}