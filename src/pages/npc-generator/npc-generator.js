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
            <h3>${raza.name} ${clase.name}</h3>
            <p>STR: ${stats.STR}</p>
            <p>DEX: ${stats.DEX}</p>
            <p>CON: ${stats.CON}</p>
            <p>INT: ${stats.INT}</p>
            <p>WIS: ${stats.WIS}</p>
            <p>CHA: ${stats.CHA}</p>
        `;

    } catch (err) {
        console.error(err);
    }
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

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function rollStat() {
    return Math.floor(Math.random() * 15) + 3;
}

// generar uno al cargar
generarNPC();


document.getElementById("downloadBtn").addEventListener("click", () => {
    const content = document.getElementById("npcOutput").innerText;

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "npc.txt";
    a.click();

    URL.revokeObjectURL(url);
});
