const modulos = [
  {
    nombre: "⛪ Conquista y Virreinato",
    preguntas: [
      { pregunta: "¿Qué hecho marca el inicio de la conquista del Perú?", opciones: ["Fundación de Lima", "Captura de Atahualpa", "Llegada de Pizarro", "Batalla de Las Salinas"], correcta: 1, explicacion: "La captura de Atahualpa en Cajamarca (1532) marcó el inicio del dominio español." },
      { pregunta: "¿Qué sistema colonial explotó la mano de obra indígena en minas?", opciones: ["Encomienda", "Corregimiento", "Mita", "Repartimiento"], correcta: 2, explicacion: "La mita obligaba a los indígenas a trabajar en minas como Potosí." },
      { pregunta: "¿Cuál fue la función principal de la encomienda?", opciones: ["Evangelizar y cobrar tributos", "Repartir tierras", "Gobernar ciudades", "Defender el virreinato"], correcta: 0, explicacion: "La encomienda buscaba evangelizar y cobrar tributos a los indígenas." },
      { pregunta: "¿Qué rebelión indígena del siglo XVIII cuestionó el orden colonial?", opciones: ["Juan Santos Atahualpa", "Túpac Amaru II", "Túpac Katari", "Manco Inca"], correcta: 1, explicacion: "Túpac Amaru II lideró la mayor rebelión contra el sistema colonial." },
      { pregunta: "¿Cuál fue la causa principal de la rebelión de Túpac Amaru II?", opciones: ["Invasión extranjera", "Abusos del sistema colonial", "Influencia napoleónica", "Apoyo británico"], correcta: 1, explicacion: "Los abusos coloniales y tributos excesivos provocaron la rebelión." },
    ]
  },
  {
    nombre: "🇵🇪 Proceso de Independencia",
    preguntas: [
      { pregunta: "¿Qué corriente de pensamiento influyó en los ideólogos independentistas?", opciones: ["Mercantilismo", "Ilustración", "Feudalismo", "Absolutismo"], correcta: 1, explicacion: "La Ilustración promovía ideas de libertad e igualdad." },
      { pregunta: "¿Qué hecho internacional debilitó el poder español en América?", opciones: ["Revolución Rusa", "Invasión napoleónica a España", "Guerra del Pacífico", "Revolución Francesa"], correcta: 1, explicacion: "La invasión napoleónica debilitó a España y su control colonial." },
      { pregunta: "¿Quién proclamó la independencia del Perú?", opciones: ["Simón Bolívar", "José Faustino Sánchez Carrión", "José de San Martín", "Andrés de Santa Cruz"], correcta: 2, explicacion: "San Martín proclamó la independencia en 1821." },
      { pregunta: "¿En qué año se proclamó la independencia del Perú?", opciones: ["1810", "1820", "1821", "1824"], correcta: 2, explicacion: "La proclamación fue el 28 de julio de 1821." },
      { pregunta: "¿Cuál fue el principal aporte de José de San Martín al Perú?", opciones: ["Organización política republicana", "Proclamación de la independencia", "Derrota final del ejército español", "Redacción constitucional"], correcta: 1, explicacion: "San Martín proclamó la independencia del Perú." },
      { pregunta: "¿Quién fue José Faustino Sánchez Carrión?", opciones: ["Militar independentista", "Ideólogo republicano", "Virrey reformista", "Caudillo regional"], correcta: 1, explicacion: "Fue un pensador clave del republicanismo peruano." },
      { pregunta: "José Faustino Sánchez Carrión defendió principalmente:", opciones: ["La monarquía constitucional", "El protectorado", "La república", "El absolutismo"], correcta: 2, explicacion: "Defendió la república como forma de gobierno." },
      { pregunta: "¿Por qué fue llamado “El Solitario de Sayán”?", opciones: ["Por vivir aislado", "Por sus escritos políticos firmados con ese seudónimo", "Por no participar en política", "Por su exilio"], correcta: 1, explicacion: "Firmaba escritos políticos con ese seudónimo." },
      { pregunta: "¿Qué tipo de escritos realizó Sánchez Carrión?", opciones: ["Crónicas militares", "Cartas políticas republicanas", "Tratados económicos", "Obras literarias"], correcta: 1, explicacion: "Escribió cartas defendiendo la república." },
      { pregunta: "¿Qué batalla consolidó definitivamente la independencia del Perú?", opciones: ["Junín", "Ayacucho", "Maipú", "Boyacá"], correcta: 1, explicacion: "Ayacucho selló la independencia en 1824." },
      { pregunta: "¿En qué año se libró la batalla de Ayacucho?", opciones: ["1821", "1822", "1823", "1824"], correcta: 3, explicacion: "Fue en 1824." },
    ]
  },
  {
    nombre: "🏛️ Inicios de la República",
    preguntas: [
      { pregunta: "¿Qué forma de gobierno adoptó el Perú tras la independencia?", opciones: ["Protectorado", "Monarquía", "República", "Virreinato"], correcta: 2, explicacion: "El Perú se organizó como república." },
      { pregunta: "¿Qué problema caracterizó a los primeros años republicanos?", opciones: ["Estabilidad democrática", "Caudillismo militar", "Desarrollo industrial", "Expansión territorial"], correcta: 1, explicacion: "El caudillismo militar generó inestabilidad política." },
      { pregunta: "¿Cuál fue una consecuencia inmediata de la independencia?", opciones: ["Igualdad social", "Crisis política y económica", "Industrialización", "Unidad regional"], correcta: 1, explicacion: "La guerra dejó crisis económica y política." },
      { pregunta: "¿Cuántos poderes del Estado existen en el Perú?", opciones: ["Dos", "Tres", "Cuatro", "Cinco"], correcta: 1, explicacion: "Son tres: Ejecutivo, Legislativo y Judicial." },
    ]
  },
  {
    nombre: "🌎 Geografía, Estado y símbolos",
    preguntas: [
      { pregunta: "¿Qué cordillera atraviesa el territorio peruano?", opciones: ["Alpes", "Himalaya", "Andes", "Apalaches"], correcta: 2, explicacion: "Los Andes recorren todo el territorio peruano." },
      { pregunta: "¿Qué océano baña la costa peruana?", opciones: ["Atlántico", "Índico", "Pacífico", "Glacial"], correcta: 2, explicacion: "El océano Pacífico baña la costa del Perú." },
      { pregunta: "¿Qué línea imaginaria cruza el Perú?", opciones: ["Trópico de Capricornio", "Ecuador", "Meridiano de Greenwich", "Trópico de Cáncer"], correcta: 1, explicacion: "La línea del Ecuador cruza el norte del Perú." },
      { pregunta: "¿Qué lago navegable comparte el Perú con Bolivia?", opciones: ["Junín", "Poopó", "Titicaca", "Umayo"], correcta: 2, explicacion: "El lago Titicaca es el lago navegable más alto del mundo." },
      { pregunta: "¿Qué región natural posee mayor biodiversidad?", opciones: ["Costa", "Sierra", "Selva", "Altiplano"], correcta: 2, explicacion: "La selva amazónica tiene la mayor biodiversidad." },
      { pregunta: "¿Qué fenómeno climático afecta la economía pesquera del Perú?", opciones: ["Anticiclón del Pacífico", "El Niño", "Corriente del Golfo", "La Niña"], correcta: 1, explicacion: "El Niño altera la temperatura del mar y afecta la pesca." },
      { pregunta: "¿Qué elemento del escudo nacional representa la riqueza vegetal?", opciones: ["La vicuña", "El cóndor", "El árbol de la quina", "La cornucopia"], correcta: 2, explicacion: "El árbol de la quina representa la riqueza vegetal." },
      { pregunta: "¿Qué elemento del escudo representa la riqueza mineral?", opciones: ["El árbol", "El cóndor", "La cornucopia", "La vicuña"], correcta: 2, explicacion: "La cornucopia representa la riqueza mineral." },
      { pregunta: "¿Qué elemento del escudo representa la riqueza animal?", opciones: ["Vicuña", "Cóndor", "Puma", "Alpaca"], correcta: 0, explicacion: "La vicuña representa la riqueza animal del Perú." },
      { pregunta: "¿Qué mar forma parte del dominio marítimo peruano?", opciones: ["Mar del Sur", "Mar Caribe", "Mar de Grau", "Mar Argentino"], correcta: 2, explicacion: "El mar de Grau es el dominio marítimo del Perú." },
      { pregunta: "¿Qué fecha se conmemora la independencia del Perú?", opciones: ["9 de diciembre", "6 de agosto", "28 de julio", "5 de abril"], correcta: 2, explicacion: "La independencia se celebra el 28 de julio." },
      { pregunta: "¿Qué ciudad es la más poblada del Perú?", opciones: ["Arequipa", "Trujillo", "Lima", "Chiclayo"], correcta: 2, explicacion: "Lima es la ciudad más poblada del país." },
      { pregunta: "¿Qué actividad económica es clave en la sierra peruana?", opciones: ["Pesca", "Minería", "Comercio marítimo", "Industria petrolera"], correcta: 1, explicacion: "La minería es una actividad clave en la sierra." },
      { pregunta: "¿Cuál es el nombre oficial del Estado peruano?", opciones: ["Nación Peruana", "Estado del Perú", "República del Perú", "País del Perú"], correcta: 2, explicacion: "El nombre oficial es República del Perú." },
    ]
  }
];

let moduloActual = 0;
let indice = 0;
let tiempo = 60;
let intervalo;
let respondido = false;

let puntaje = 0;
let totalPreguntas = modulos.reduce((acc, m) => acc + m.preguntas.length, 0);
let preguntasRespondidas = 0;

const preguntaEl = document.getElementById("pregunta");
const opcionesEl = document.getElementById("opciones");
const resultadoEl = document.getElementById("resultado");
const nivelEl = document.getElementById("nivel");
const timerEl = document.getElementById("timer");

function iniciarTemporizador() {
  clearInterval(intervalo);
  tiempo = 60;
  timerEl.textContent = "⏱️ " + tiempo;

  intervalo = setInterval(() => {
    tiempo--;
    timerEl.textContent = "⏱️ " + tiempo;

    if (tiempo === 0 && !respondido) {
      respondido = true;
      preguntasRespondidas++;
      siguiente();
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
  preguntasRespondidas++;

  const botones = document.querySelectorAll("#opciones button");

  botones.forEach((btn, i) => {
    btn.disabled = true;

    if (i === correcta) {
      btn.classList.add("opcion-correcta");
    }

    if (i === elegida && elegida !== correcta) {
      btn.style.backgroundColor = "#d32f2f";
      btn.style.color = "white";
    }
  });

  if (elegida === correcta) {
    puntaje += 1;
  }

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
  let totalPreguntas = modulos.reduce((total, modulo) => {
    return total + modulo.preguntas.length;
}, 0);

let porcentaje = Math.round((puntaje / totalPreguntas) * 100);

  let mensajeFinal = "";
  let videoURL = "";

  if (porcentaje >= 80) {
    mensajeFinal = "🏆 ¡Excelente! Eres un niño patriota!.";
    videoURL = "https://www.youtube.com/embed/oeqGzOe9v0M";
  } else if (porcentaje >= 60) {
    mensajeFinal = "👏 Muy buen trabajo.";
    videoURL = "https://www.youtube.com/embed/0qYh3Y5Y8pA";
  } else if (porcentaje >= 35) {
    mensajeFinal = "👍 Bien, pero puedes mejorar.";
    videoURL = "https://www.youtube.com/embed/5KJ7Gkq9z9E";
  } else {
    mensajeFinal = "📚 Necesitas repasar un poco más.";
    videoURL = "https://www.youtube.com/embed/V7l9p6k3XzM";
  }

  document.getElementById("quiz-box").innerHTML = `
    <div class="final-box">
      <h2>Terminaste el Quiz</h2>
      <p class="score">${puntaje} puntos</p>
      <p>${porcentaje}% de aciertos</p>
      <p class="mensaje-final">${mensajeFinal}</p>

      <div class="video-container">
        <iframe 
          width="100%" 
          height="250" 
          src="${videoURL}" 
          frameborder="0" 
          allowfullscreen>
        </iframe>
      </div>

      <button class="btn-reiniciar" onclick="window.location.href='secundaria.html'">Ir al inicio 🏠</button>

    </div>
  `;
}
window.onload = mostrarPregunta;
