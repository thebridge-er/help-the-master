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

        boton.style.filter = "drop-shadow(0 0 5px #fff) drop-shadow(0 0 10px #60a5fa)";

        // ⏳ quitar efecto después
        setTimeout(() => {
            boton.style.filter = "";
            boton.style.transform = "";
        }, 150);
    });
});

