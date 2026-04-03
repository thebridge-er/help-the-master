window.addEventListener("load", () => {
    const botones = document.querySelectorAll(".animated-btn");

    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            boton.src = "../../img/boton2.png";

            setTimeout(() => {
                window.location.href = boton.dataset.link;
            }, 150);
        });
    });
});

window.addEventListener("load", () => {
    const boton = document.querySelector(".animated-btn");

    if (!boton) return;

    const sonido = new Audio("../../sounds/click.mp3");

    boton.addEventListener("click", () => {

        // 🔊 sonido
        sonido.currentTime = 0;
        sonido.play().catch(() => { });

        // 💡 glow fuerte
        boton.style.filter = "drop-shadow(0 0 5px #fff) drop-shadow(0 0 10px #60a5fa)";

        // 📳 vibración
        if (navigator.vibrate) {
            navigator.vibrate(100);
        }

        // 🔽 pulsado
        boton.style.transform = "scale(0.9)";

        // ⏳ quitar efecto después
        setTimeout(() => {
            boton.style.filter = "";
            boton.style.transform = "";
        }, 150);
    });
});

