import { keywords, phrases } from './keywords.js';

export function detectKeywords(input) {
    const detected = [];
    for (const category in keywords) {
        if (keywords[category].some(word => input.toLowerCase().includes(word))) {
            detected.push(category);
        }
    }
    return detected;
}

export async function generateExcuse(input) {

    const detected = detectKeywords(input);

    if (detected.length === 0) {
        return "No estoy seguro de qué pasó, intenta describir la situación de otra manera.";
    }

    const personaje = getRandom(phrases.personajes);
    const accion = getRandom(phrases.acciones);
    const emocion = getRandom(phrases.emociones);
    const lugar = getRandom(phrases.lugares);
    const consecuencia = getRandom(phrases.consecuencias);

    return `El personaje ${personaje}, ${accion}, ${emocion}, ${lugar}, y ${consecuencia}.`;
}

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}