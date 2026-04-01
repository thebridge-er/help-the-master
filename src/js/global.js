import { generateExcuse } from './services/excusesGenerator.js';

const form = document.getElementById("excuseForm");
const input = document.getElementById("userInput");
const output = document.getElementById("excuseOutput");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const userInput = input.value;
    const excuse = await generateExcuse(userInput);
    output.textContent = excuse;
});