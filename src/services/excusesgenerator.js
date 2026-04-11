import { keywords, phrases } from './keywords.js';

export function detectKeywords(input) {
    const detected = {};
    const lowerInput = input.toLowerCase();

    for (const category in keywords) {
        detected[category] = keywords[category].filter(word =>
            lowerInput.includes(word.toLowerCase())
        );
    }

    return detected;
}

export async function generateExcuse(input) {

    const detected = detectKeywords(input);

    const personaje = detected.personajes?.length
        ? getRandom(detected.personajes)
        : getRandom(keywords.personajes);

    const lugar = detected.lugares?.length
        ? getRandom(detected.lugares)
        : getRandom(keywords.lugares);

    const accion = getRandom(phrases.acciones);
    const consecuencia = getRandom(phrases.consecuencias);

    const templates = [

        `El ${personaje} ${accion}.`,

        `Mientras estaban en ${lugar}, el ${personaje} ${accion}.`,

        `El ${personaje} provocó un problema en ${lugar}.`,

        `Todo empezó cuando el ${personaje} ${accion}.`,

        `En ${lugar}, ${consecuencia}.`

    ];

    return getRandom(templates);
}

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}