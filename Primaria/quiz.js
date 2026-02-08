const modulos = [
  {
    nombre: "⛪ Conquista y Virreinato",
    preguntas: [
      { pregunta: "¿Quién llegó al Perú con los españoles?", opciones: ["Francisco Pizarro", "Miguel Grau", "Simón Bolívar", "Túpac Amaru II"], correcta: 0, explicacion: "Francisco Pizarro lideró la llegada de los españoles al Perú." },
      { pregunta: "¿A quién capturaron en Cajamarca?", opciones: ["Atahualpa", "Huáscar", "Manco Inca", "Túpac Amaru II"], correcta: 0, explicacion: "Atahualpa fue capturado en Cajamarca." },
      { pregunta: "¿Cómo se llamó el imperio inca?", opciones: ["Tahuantinsuyo", "Virreinato", "Reino del Perú", "Altiplano"], correcta: 0, explicacion: "El imperio de los incas se llamó Tahuantinsuyo." },
      { pregunta: "¿Qué buscaban los españoles en el Perú?", opciones: ["Oro y riquezas", "Amistad", "Tierras para vivir", "Animales"], correcta: 0, explicacion: "Los españoles buscaban oro y riquezas." },
      { pregunta: "¿Dónde capturaron a Atahualpa?", opciones: ["Cusco", "Cajamarca", "Lima", "Arequipa"], correcta: 1, explicacion: "Atahualpa fue capturado en Cajamarca." },
    ]
  },
  {
    nombre: "🇵🇪 Independencia",
    preguntas: [
      { pregunta: "¿Quién proclamó la independencia del Perú?", opciones: ["Miguel Grau", "José de San Martín", "Simón Bolívar", "Francisco Pizarro"], correcta: 1, explicacion: "San Martín proclamó la independencia en 1821." },
      { pregunta: "¿En qué fecha se celebra la independencia?", opciones: ["28 de julio", "9 de diciembre", "5 de abril", "6 de agosto"], correcta: 0, explicacion: "La independencia se celebra el 28 de julio." },
      { pregunta: "¿En qué año se proclamó la independencia?", opciones: ["1821", "1810", "1824", "1800"], correcta: 0, explicacion: "La independencia se proclamó en 1821." },
      { pregunta: "¿Quién ayudó a consolidar la independencia?", opciones: ["Simón Bolívar", "Atahualpa", "Manco Inca", "Túpac Amaru"], correcta: 0, explicacion: "Simón Bolívar ayudó a consolidar la independencia." },
      { pregunta: "¿Qué batalla aseguró la independencia del Perú?", opciones: ["Ayacucho", "Junín", "Arica", "Tarapacá"], correcta: 0, explicacion: "La batalla de Ayacucho aseguró la independencia." },
    ]
  },
  {
    nombre: "🌎 Geografía y símbolos",
    preguntas: [
      { pregunta: "¿Qué océano baña la costa del Perú?", opciones: ["Atlántico", "Índico", "Pacífico", "Ártico"], correcta: 2, explicacion: "El Perú tiene costa en el océano Pacífico." },
      { pregunta: "¿Qué cordillera atraviesa el Perú?", opciones: ["Andes", "Alpes", "Himalaya", "Apalaches"], correcta: 0, explicacion: "La cordillera de los Andes atraviesa el Perú." },
      { pregunta: "¿Qué lago comparte el Perú con Bolivia?", opciones: ["Titicaca", "Poopó", "Junín", "Umayo"], correcta: 0, explicacion: "El lago Titicaca es compartido con Bolivia." },
      { pregunta: "¿Cuál es la capital del Perú?", opciones: ["Cusco", "Arequipa", "Trujillo", "Lima"], correcta: 3, explicacion: "La capital del Perú es Lima." },
      { pregunta: "¿Qué animal representa al Perú en el escudo?", opciones: ["Vicuña", "Cóndor", "Puma", "Alpaca"], correcta: 0, explicacion: "La vicuña representa la riqueza animal del Perú." },
    ]
  },
  {
    nombre: "🏛️ Estado y ciudadanía",
    preguntas: [
      { pregunta: "¿Cómo se llama oficialmente nuestro país?", opciones: ["República del Perú", "País del Perú", "Estado Inca", "Nación Inca"], correcta: 0, explicacion: "El nombre oficial es República del Perú." },
      { pregunta: "¿Cuántos poderes del Estado hay?", opciones: ["Dos", "Tres", "Cuatro", "Cinco"], correcta: 1, explicacion: "Hay tres poderes del Estado." },
      { pregunta: "¿Quién es el presidente del Perú?", opciones: ["El jefe del Ejecutivo", "El jefe del Congreso", "El jefe del Poder Judicial", "El alcalde"], correcta: 0, explicacion: "El presidente dirige el Poder Ejecutivo." },
      { pregunta: "¿Qué documento contiene las leyes del país?", opciones: ["La Constitución", "El himno", "El escudo", "La bandera"], correcta: 0, explicacion: "La Constitución contiene las leyes principales." },
      { pregunta: "¿Qué símbolo patrio representa al país?", opciones: ["Bandera", "Escudo", "Himno", "Todas"], correcta: 3, explicacion: "Todos son símbolos patrios." },
    ]
  },
  {
    nombre: "📚 Cultura general",
    preguntas: [
      { pregunta: "¿Cuál es el idioma oficial del Perú?", opciones: ["Quechua", "Aymara", "Español", "Inglés"], correcta: 2, explicacion: "El español es el idioma oficial principal." },
      { pregunta: "¿Qué celebración es el 28 de julio?", opciones: ["Independencia", "Navidad", "Semana Santa", "Fiestas patrias de otro país"], correcta: 0, explicacion: "El 28 de julio se celebra la independencia del Perú." },
      { pregunta: "¿Cuál es el plato típico del Perú?", opciones: ["Ceviche", "Tacos", "Pizza", "Paella"], correcta: 0, explicacion: "El ceviche es un plato típico del Perú." },
      { pregunta: "¿Qué región tiene selva amazónica?", opciones: ["Costa", "Sierra", "Selva", "Desierto"], correcta: 2, explicacion: "La región selva tiene la Amazonía." },
      { pregunta: "¿Cuántas regiones naturales tiene el Perú?", opciones: ["Dos", "Tres", "Cuatro", "Cinco"], correcta: 1, explicacion: "El Perú tiene tres regiones naturales: costa, sierra y selva." },
    ]
  }
];

let moduloActual = 0;
let indice = 0;
let tiempo = 30;
let intervalo;
let respondido = false;

const preguntaEl = document.getElementById("pregunta");
const opcionesEl = document.getElementById("opciones");
const resultadoEl = document.getElementById("resultado");
const nivelEl = document.getElementById("nivel");
const timerEl = document.getElementById("timer");

function iniciarTemporizador() {
  clearInterval(intervalo);
  tiempo = 30;
  timerEl.textContent = "⏱️ " + tiempo;
  intervalo = setInterval(() => {
    tiempo--;
    timerEl.textContent = "⏱️ " + tiempo;
    if (tiempo === 0 && !respondido) {
      indice++;
      mostrarPregunta();
    }
  }, 1000);
}

function mostrarPregunta() {
  respondido = false;
  clearInterval(intervalo);

  if (indice < modulos[moduloActual].preguntas.length) {
    nivelEl.textContent = "Nivel: " + modulos[moduloActual].nombre;
    const actual = modulos[moduloActual].preguntas[indice];
    preguntaEl.textContent = actual.pregunta;
    opcionesEl.innerHTML = "";
    resultadoEl.innerHTML = "";
    resultadoEl.classList.add("oculto");

    actual.opciones.forEach((op, i) => {
      const btn = document.createElement("button");
      btn.textContent = op;
      btn.onclick = () => verificarRespuesta(i, actual.correcta, actual.explicacion);
      opcionesEl.appendChild(btn);
    });

    iniciarTemporizador();
  } else {
    moduloActual++;
    indice = 0;
    moduloActual < modulos.length ? mostrarPregunta() : finQuiz();
  }
}

function verificarRespuesta(elegida, correcta, explicacion) {
  if (respondido) return;
  respondido = true;
  clearInterval(intervalo);

  const botones = document.querySelectorAll("#opciones button");

  botones.forEach((btn, i) => {
    btn.disabled = true;
    if (i === correcta) btn.classList.add("opcion-correcta");
  });

  resultadoEl.classList.remove("oculto");
  resultadoEl.innerHTML = `
    <p>${elegida === correcta ? "✅ ¡Correcto!" : "❌ Incorrecto."}</p>
    <p><strong>Respuesta correcta:</strong> ${modulos[moduloActual].preguntas[indice].opciones[correcta]}</p>
    <p><em>${explicacion}</em></p>
    <button class="btn-siguiente" onclick="siguiente()">Siguiente ➡️</button>
  `;
}

function siguiente() {
  indice++;
  mostrarPregunta();
}

function finQuiz() {
  document.getElementById("quiz-box").innerHTML = `
    <h2>🎉 Terminaste el Quiz</h2>
    <p>Gracias por jugar</p>
    <button class="btn-siguiente" onclick="location.reload()">Reiniciar</button>
  `;
}

window.onload = mostrarPregunta;
