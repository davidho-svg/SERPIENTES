function mostrarDato() {
    const dato = document.getElementById('dato');
    dato.textContent = "¡Las serpientes llevan 100 millones de años en la Tierra!";
    dato.classList.remove('hidden');
    dato.style.textShadow = "0 0 10px #42a5f5, 0 0 20px #42a5f5";
    dato.style.transition = "opacity 0.5s ease-in-out";
    dato.style.opacity = "1";
}
