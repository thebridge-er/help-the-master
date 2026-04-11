const output = document.getElementById("enemyOutput");
const btn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");

btn.addEventListener("click", generarENEMY);
downloadBtn.addEventListener("click", descargarENEMY);

async function generarENEMY() {

    const razas = [
        "Humano",
        "Elfo oscuro",
        "Enano",
        "Tiefling",
        "Semielfo",
        "Orco",
        "Goblin",
        "Hobgoblin",
        "Kobold",
        "Gnoll",
        "Mediano",
        "Gnomo"
    ];

    const tipos = [
        "Bandido",
        "Mercenario",
        "Cultista",
        "Asesino",
        "Guardia corrupto",
        "Cazarrecompensas",
        "Fanático",
        "Nigromante",
        "Brujo",
        "Ladrón",
        "Gladiador",
        "Carroñero"
    ];

    const raza = getRandom(razas);
    const tipo = getRandom(tipos);
    const nombre = generarNombrePorRaza(raza);

    const stats = {
        STR: rollStat(),
        DEX: rollStat(),
        CON: rollStat(),
        INT: rollStat(),
        WIS: rollStat(),
        CHA: rollStat()
    };

    const hp = generarHP(stats.CON);

    output.innerHTML = `
        <h3>Nombre: ${nombre}</h3>
        <h3>${raza} ${tipo}</h3>

        <p>HP: ${hp}</p>

        <p>Fuerza: ${stats.STR}</p>
        <p>Destreza: ${stats.DEX}</p>
        <p>Constitución: ${stats.CON}</p>
        <p>Inteligencia: ${stats.INT}</p>
        <p>Sabiduría: ${stats.WIS}</p>
        <p>Carisma: ${stats.CHA}</p>
    `;
}

function generarNombrePorRaza(raza) {

    const elfos = [
        "Vaerith", "Zyrael", "Maldris", "Velkyn",
        "Nythor", "Zareth", "Vhaelin", "Draeth",
        "Xylar", "Velkar"
    ];

    const enanos = [
        "Drakgrim", "Morzug", "Kazdrak",
        "Throgar", "Brundak", "Gorim",
        "Durnak", "Kragar", "Morgrin", "Barzug"
    ];

    const orcos = [
        "Gharzug", "Throgak", "Mordruk",
        "Urzak", "Kragoth", "Drogar",
        "Vorgash", "Brutok", "Gorzug", "Thrak"
    ];

    const humanos = [
        "Malrick", "Vorin", "Draek",
        "Kaldor", "Ravik", "Zoren",
        "Varok", "Draven", "Korvin", "Marek"
    ];

    const goblins = [
        "Snarg", "Grikk", "Zruk",
        "Nibzag", "Skarn", "Drib",
        "Krizz", "Snok", "Vragg", "Grash"
    ];

    const kobolds = [
        "Skrix", "Vrek", "Zik",
        "Kriss", "Trik", "Viss",
        "Snik", "Driss", "Krix", "Trek"
    ];

    const tiefling = [
        "Azrath", "Malzor", "Vexira",
        "Nyxar", "Kaelzor", "Lilzeth",
        "Vorath", "Azrix", "Belzar", "Zareth"
    ];

    const gnoll = [
        "Rakka", "Gnash", "Brakka",
        "Krull", "Thrag", "Grash",
        "Ruk", "Snarl", "Bruk", "Drakka"
    ];

    const halfling = [
        "Nib", "Skarn", "Rikk",
        "Tob", "Snip", "Grin",
        "Brek", "Zib", "Krim", "Drib"
    ];

    const gnomos = [
        "Zibnik", "Krinkle", "Drizz",
        "Fizzrak", "Snib", "Vrinkle",
        "Trix", "Gribnik", "Zarn", "Klink"
    ];

    raza = raza.toLowerCase();

    if (raza.includes("elf")) return getRandom(elfos);
    if (raza.includes("dwarf")) return getRandom(enanos);
    if (raza.includes("orc")) return getRandom(orcos);
    if (raza.includes("goblin")) return getRandom(goblins);
    if (raza.includes("kobold")) return getRandom(kobolds);
    if (raza.includes("gnoll")) return getRandom(gnoll);
    if (raza.includes("tiefling")) return getRandom(tiefling);
    if (raza.includes("gnome")) return getRandom(gnomos);
    if (raza.includes("halfling")) return getRandom(halfling);
    if (raza.includes("human")) return getRandom(humanos);

    return getRandom(humanos);
}

function generarHP(con) {
    const base = Math.floor(Math.random() * 20) + 5;
    const mod = Math.floor((con - 10) / 2);
    return base + mod;
}

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function rollStat() {
    return Math.floor(Math.random() * 15) + 3;
}

function descargarENEMY() {
    const content = output.innerText;

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "enemy.txt";
    a.click();

    URL.revokeObjectURL(url);
}

// generar uno al cargar
generarENEMY();