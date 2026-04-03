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

    let excuseParts = [];

    // Para cada categoría detectada, elige una frase al azar
    detected.forEach(category => {
        const phraseList = phrases[category];
        if (phraseList && phraseList.length > 0) {
            const randomIndex = Math.floor(Math.random() * phraseList.length);
            excuseParts.push(phraseList[randomIndex]);
        }
    });

    // Mezcla las frases en una sola excusa
    const excuse = excuseParts.join(", ") + ".";
    return excuse;
}