import { saveFavorite } from "../../services/favorites.js";

const output = document.getElementById("npcOutput");
const btn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");

btn.addEventListener("click", generarNPC);
downloadBtn.addEventListener("click", descargarNPC);

async function generarNPC() {
    try {
        const razaRes = await fetch("https://www.dnd5eapi.co/api/races");
        const razaData = await razaRes.json();
        const raza = getRandom(razaData.results);

        const nombre = generarNombrePorRaza(raza.name);

        const claseRes = await fetch("https://www.dnd5eapi.co/api/classes");
        const claseData = await claseRes.json();
        const clase = getRandom(claseData.results);

        const stats = {
            STR: rollStat(),
            DEX: rollStat(),
            CON: rollStat(),
            INT: rollStat(),
            WIS: rollStat(),
            CHA: rollStat()
        };

        output.innerHTML = `
            <h3>Nombre: ${nombre}</h3>
            <h3>Raza: ${raza.name} ${clase.name}</h3>

            <p>Fuerza: ${stats.STR}</p>
            <p>Destreza: ${stats.DEX}</p>
            <p>Constitución: ${stats.CON}</p>
            <p>Inteligencia: ${stats.INT}</p>
            <p>Sabiduría: ${stats.WIS}</p>
            <p>Carisma: ${stats.CHA}</p>
        `;

    } catch (err) {
        console.error(err);
    }
}

function generarNombrePorRaza(raza) {

    const elfos = [
        "Aelion", "Sylvar", "Faelar", "Lythar", "Elandril",
        "Vaelis", "Thalion", "Aerendyl", "Lirael", "Nymeria"
    ];

    const enanos = [
        "Thorin", "Borin", "Durin", "Rurik", "Brokk",
        "Kazgar", "Thrain", "Dain", "Morgran", "Barend"
    ];

    const orcos = [
        "Grom", "Thrak", "Morg", "Urzug", "Krag",
        "Drog", "Vorg", "Throg", "Garok", "Brug"
    ];

    const humanos = [
        "Arin", "Dorian", "Kael", "Varyn", "Roland",
        "Cedric", "Aldric", "Gareth", "Tristan", "Alaric"
    ];

    const dragonborn = [
        "Arjhan", "Balasar", "Rhogar", "Kriv", "Torinn",
        "Heskan", "Medrash", "Nadarr", "Patrin", "Tarhun"
    ];

    const tiefling = [
        "Azazel", "Malakar", "Zephyra", "Nyx", "Vex",
        "Kaelis", "Lilith", "Voren", "Azra", "Belial"
    ];

    const halfelf = [
        "Aelar", "Vaelin", "Kaelis", "Sylrin", "Theron",
        "Lorian", "Elyas", "Darian", "Vaelor", "Arannis"
    ];

    const gnomos = [
        "Boddynock", "Zook", "Fizzwick", "Tink", "Nimble",
        "Bix", "Pock", "Wizzle", "Fizz", "Nib"
    ];

    const halfling = [
        "Milo", "Pippin", "Tobin", "Rosco", "Merric",
        "Alton", "Corin", "Lyle", "Finn", "Bram"
    ];


    raza = raza.toLowerCase();

    if (raza.includes("elf") && !raza.includes("half")) {
        return getRandom(elfos);
    }

    if (raza.includes("half-elf")) {
        return getRandom(halfelf);
    }

    if (raza.includes("dwarf")) {
        return getRandom(enanos);
    }

    if (raza.includes("orc")) {
        return getRandom(orcos);
    }

    if (raza.includes("dragonborn")) {
        return getRandom(dragonborn);
    }

    if (raza.includes("tiefling")) {
        return getRandom(tiefling);
    }

    if (raza.includes("gnome")) {
        return getRandom(gnomos);
    }

    if (raza.includes("halfling")) {
        return getRandom(halfling);
    }

    if (raza.includes("human")) {
        return getRandom(humanos);
    }

    return getRandom(humanos);
}

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function rollStat() {
    return Math.floor(Math.random() * 15) + 3;
}

function descargarNPC() {
    const content = output.innerText;

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "npc.txt";
    a.click();

    URL.revokeObjectURL(url);
}

// generar uno al cargar
generarNPC();

const favoriteBtn = document.getElementById("npcFavorite");

favoriteBtn.addEventListener("click", () => {

    const text = document.getElementById("npcOutput").textContent;

    if (!text) return;

    saveFavorite("npc", text);

    favoriteBtn.classList.toggle("active");

});