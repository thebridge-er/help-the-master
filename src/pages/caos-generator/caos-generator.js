const form = document.getElementById("caosForm");
const input = document.getElementById("caosField");
const output = document.getElementById("caosOutput");

form.addEventListener("submit", generarCaos);

const inicios = [
    "De repente",
    "Sin previo aviso",
    "De la nada",
    "Justo cuando todo parecía tranquilo",
    "En ese momento",
    "Sin que nadie lo espere",
    "Un instante después",
    "De forma inesperada",
    "Cuando todo parecía bajo control",
    "De pronto",
    "Sin tiempo para reaccionar",
    "En cuestión de segundos",
    "De manera inexplicable",
    "Justo entonces",
    "Sin motivo aparente",
    "Cuando el silencio se vuelve inquietante",
    "En medio de la calma",
    "Cuando nadie estaba preparado",
    "En ese preciso instante",
    "Antes de que podáis reaccionar",
];

const eventos = [
    "un dragón atraviesa el techo con un rugido ensordecedor",
    "un portal mágico inestable aparece en mitad de la sala",
    "una explosión arcana sacude el lugar",
    "una horda de goblins invade la zona",
    "el suelo comienza a agrietarse bajo vuestros pies",
    "una criatura gigantesca emerge de las sombras",
    "las paredes empiezan a moverse como si estuvieran vivas",
    "una tormenta mágica se desata en el interior",
    "una figura encapuchada aparece entre la niebla",
    "el techo empieza a derrumbarse lentamente",
    "una criatura voladora atraviesa las ventanas",
    "una puerta sellada se abre violentamente",
    "una risa siniestra resuena por todo el lugar",
    "una grieta dimensional se abre en el aire",
    "una estatua cobra vida de repente",
    "una sombra gigantesca cubre la habitación",
    "un terremoto sacude todo el edificio",
    "una lluvia de fuego cae desde arriba",
    "una criatura desconocida irrumpe en la escena",
    "una magia salvaje comienza a descontrolarse",
];

const consecuencias = [
    "y el grupo queda atrapado sin salida",
    "y todo comienza a incendiarse",
    "y el suelo colapsa bajo vuestros pies",
    "y aparecen más enemigos desde todas direcciones",
    "y la estructura comienza a derrumbarse",
    "y alguien queda separado del grupo",
    "y la salida desaparece misteriosamente",
    "y el lugar se llena de humo",
    "y el caos se extiende rápidamente",
    "y la oscuridad envuelve todo",
    "y el portal empieza a absorber objetos",
    "y el enemigo bloquea la única salida",
    "y una criatura comienza a perseguiros",
    "y el lugar empieza a inundarse",
    "y el terreno se vuelve inestable",
    "y las luces se apagan de golpe",
    "y el sonido de pasos resuena alrededor",
    "y el aire se vuelve irrespirable",
    "y algo comienza a acechar desde las sombras",
    "y el grupo pierde momentáneamente la orientación",
];

const resoluciones = [
    "El caos ha comenzado",
    "La situación se vuelve crítica",
    "No hay tiempo para pensar",
    "Debéis actuar rápido",
    "Todo depende de vuestras decisiones",
    "La supervivencia es vuestra única opción",
    "El peligro es inminente",
    "Cada segundo cuenta",
    "La situación está fuera de control",
    "No hay marcha atrás",
    "La tensión aumenta rápidamente",
    "El destino del grupo está en juego",
    "El peligro os rodea",
    "La batalla es inevitable",
    "El caos se apodera del lugar",
    "La situación se vuelve desesperada",
    "El tiempo se agota",
    "Todo puede salir mal",
    "El grupo debe reaccionar de inmediato",
    "El momento decisivo ha llegado",
];

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generarCaos(e) {
    e.preventDefault();

    const inicio = getRandom(inicios);
    const evento = getRandom(eventos);
    const consecuencia = getRandom(consecuencias);
    const resolucion = getRandom(resoluciones);

    const resultado = `
${inicio} ${evento}, ${consecuencia}. 
${resolucion}
`;

    output.textContent = resultado.trim();
}