import { generateExcuse } from './../services/excusesgenerator.js';

console.log("global.js cargado"); // <--- esto te permitirá verificar en la consola

const form = document.getElementById("excuseForm");
const input = document.getElementById("situationField"); // cambiamos a tu input real
const output = document.getElementById("excuseOutput");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const userInput = input.value;
    console.log("Input recibido:", userInput); // para verificar que capturamos el input
    const excuse = await generateExcuse(userInput);
    console.log("Excusa generada:", excuse); // para verificar la excusa
    output.textContent = excuse;
});