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



