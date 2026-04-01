import { keywords, phrases } from './keyWords.js';

// Función para detectar palabras clave
export function detectKeywords(input) {
    const detected = [];
    for (const category in keywords) {
        if (keywords[category].some(word => input.toLowerCase().includes(word))) {
            detected.push(category);
        }
    }
    return detected;
}

// Función principal para generar excusa
export async function generateExcuse(input) {
    const detected = detectKeywords(input);

    // Traer un NPC aleatorio de la API DnD
    const monstersRes = await fetch("https://www.dnd5eapi.co/api/monsters");
    const monsters = await monstersRes.json();
    const randomIndex = Math.floor(Math.random() * monsters.results.length);
    const monsterUrl = "https://www.dnd5eapi.co" + monsters.results[randomIndex].url;
    const monsterRes = await fetch(monsterUrl);
    const monster = await monsterRes.json();

    // Construir excusa
    let excuse = `Durante el encuentro, ${monster.name} `;
    detected.forEach(category => {
        const phrase = phrases[category][Math.floor(Math.random() * phrases[category].length)];
        excuse += phrase + ", ";
    });

    // Quitar la última coma y espacio
    excuse = excuse.slice(0, -2) + ".";
    return excuse;
}