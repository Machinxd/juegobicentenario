const modulos = [
  {
    nombre: "📘 Corriente Libertadora del Sur",
    texto: `En 1820, José de San Martín organizó la Corriente Libertadora del Sur con el objetivo de liberar al Perú del dominio español. 
    Tras consolidar la independencia de Argentina y Chile, comprendió que el poder realista se concentraba en el virreinato peruano. 
    Desembarcó en Paracas el 8 de septiembre de 1820 e inició una estrategia política y militar que evitó enfrentamientos innecesarios.
    Logró ingresar a Lima cuando las fuerzas realistas abandonaron la ciudad y proclamó la independencia el 28 de julio de 1821.
    Sin embargo, la guerra continuó en la sierra central y sur del país.`,
    preguntas: [
      { pregunta: "¿Cuál era el objetivo principal de la Corriente Libertadora del Sur?", opciones: ["Expandir Argentina", "Liberar al Perú del dominio español", "Invadir Brasil", "Formar un imperio"], correcta: 1, explicacion: "El objetivo era liberar al Perú del dominio español." },
      { pregunta: "¿En qué año llegó San Martín al Perú?", opciones: ["1810", "1815", "1820", "1824"], correcta: 2, explicacion: "San Martín llegó en 1820." },
      { pregunta: "¿Dónde desembarcó el ejército libertador?", opciones: ["Callao", "Paracas", "Cusco", "Trujillo"], correcta: 1, explicacion: "El desembarco fue en la bahía de Paracas." },
      { pregunta: "¿Qué fecha se proclamó la independencia?", opciones: ["6 agosto 1824", "28 julio 1821", "9 diciembre 1824", "1820"], correcta: 1, explicacion: "Se proclamó el 28 de julio de 1821." },
      { pregunta: "¿Qué zonas mantenían presencia española?", opciones: ["Costa norte", "Selva", "Sierra central y sur", "Lima"], correcta: 2, explicacion: "Las fuerzas realistas seguían en la sierra central y sur." },
      { pregunta: "¿Qué estrategia utilizó principalmente San Martín?", opciones: ["Ataques directos constantes", "Diplomacia y debilitamiento progresivo", "Guerra naval", "Alianza con Brasil"], correcta: 1, explicacion: "Aplicó estrategia política y militar progresiva." },
      { pregunta: "¿Qué representó su llegada?", opciones: ["Inicio virreinato", "Nueva etapa histórica", "Fin inmediato guerra", "Unión con Chile"], correcta: 1, explicacion: "Marcó una nueva etapa basada en libertad." },
      { pregunta: "¿Qué ideal defendía?", opciones: ["Colonialismo", "Monarquía absoluta", "Libertad y soberanía", "Imperialismo"], correcta: 2, explicacion: "Defendía la libertad y soberanía." },
      { pregunta: "¿Qué ocurrió antes de entrar a Lima?", opciones: ["Fue derrotado", "Realistas abandonaron ciudad", "Firmó tratado final", "Se retiró"], correcta: 1, explicacion: "Las tropas realistas abandonaron Lima." },
      { pregunta: "¿Qué inició el 28 de julio?", opciones: ["República formal", "Dominio español", "Proclamación independencia", "Llegada Bolívar"], correcta: 2, explicacion: "Marcó la proclamación de la independencia." }
    ]
  },

  {
    nombre: "📘 Batalla de Junín",
    texto: `La Batalla de Junín ocurrió el 6 de agosto de 1824 en la sierra central del Perú. 
    Fue un enfrentamiento principalmente de caballería entre el ejército patriota liderado por Simón Bolívar y las fuerzas realistas.
    No se usaron armas de fuego en gran escala, sino lanzas y sables.
    La victoria patriota fortaleció la moral independentista y preparó el camino para la batalla decisiva de Ayacucho.`,
    preguntas: [
      { pregunta: "¿En qué fecha ocurrió la Batalla de Junín?", opciones: ["28 julio 1821", "6 agosto 1824", "9 diciembre 1824", "1820"], correcta: 1, explicacion: "Junín ocurrió el 6 de agosto de 1824." },
      { pregunta: "¿Dónde ocurrió la batalla?", opciones: ["Cusco", "Lima", "Pampa de Junín", "Arequipa"], correcta: 2, explicacion: "Se desarrolló en la Pampa de Junín." },
      { pregunta: "¿Quién lideraba el ejército patriota?", opciones: ["San Martín", "Sucre", "Bolívar", "Riva Agüero"], correcta: 2, explicacion: "El líder era Simón Bolívar." },
      { pregunta: "¿Qué tipo de combate predominó?", opciones: ["Naval", "Caballería", "Artillería pesada", "Aéreo"], correcta: 1, explicacion: "Fue un combate de caballería." },
      { pregunta: "¿Qué armas se usaron principalmente?", opciones: ["Cañones", "Fusiles modernos", "Lanzas y sables", "Explosivos"], correcta: 2, explicacion: "Se utilizaron lanzas y sables." },
      { pregunta: "¿Qué logró esta victoria?", opciones: ["Independencia definitiva", "Fortalecer moral patriota", "Derrotar Francia", "Firmar paz inmediata"], correcta: 1, explicacion: "Fortaleció la moral independentista." },
      { pregunta: "¿Qué batalla consolidó la independencia después?", opciones: ["Ayacucho", "Maipú", "Boyacá", "Pichincha"], correcta: 0, explicacion: "Ayacucho consolidó la independencia." },
      { pregunta: "¿Qué región fue escenario?", opciones: ["Costa", "Selva", "Sierra central", "Norte"], correcta: 2, explicacion: "Ocurrió en la sierra central." },
      { pregunta: "¿Qué demostró la batalla?", opciones: ["Debilidad patriota", "Importancia estrategia", "Dominio español", "Fin inmediato guerra"], correcta: 1, explicacion: "Demostró la importancia de estrategia y liderazgo." },
      { pregunta: "¿Qué efecto tuvo en el ejército?", opciones: ["Desmoralización", "Fortalecimiento", "Retirada total", "Disolución"], correcta: 1, explicacion: "Fortaleció al ejército patriota." }
    ]
  },

  {
    nombre: "📘 Batalla de Ayacucho",
    texto: `La Batalla de Ayacucho se libró el 9 de diciembre de 1824 en la pampa de Quinua.
    Fue el enfrentamiento definitivo que selló la independencia del Perú.
    El ejército patriota fue dirigido por Antonio José de Sucre bajo órdenes de Simón Bolívar.
    Tras la derrota española, se firmó la Capitulación de Ayacucho, reconociendo la independencia.`,
    preguntas: [
      { pregunta: "¿En qué fecha ocurrió la Batalla de Ayacucho?", opciones: ["6 agosto 1824", "28 julio 1821", "9 diciembre 1824", "1820"], correcta: 2, explicacion: "Ayacucho ocurrió el 9 de diciembre de 1824." },
      { pregunta: "¿Dónde se desarrolló la batalla?", opciones: ["Pampa de Quinua", "Junín", "Lima", "Cusco"], correcta: 0, explicacion: "Se desarrolló en la Pampa de Quinua." },
      { pregunta: "¿Quién dirigió el ejército patriota?", opciones: ["Bolívar", "San Martín", "Sucre", "Riva Agüero"], correcta: 2, explicacion: "El general fue Antonio José de Sucre." },
      { pregunta: "¿Bajo órdenes de quién actuaba Sucre?", opciones: ["San Martín", "Bolívar", "La Serna", "Riva Agüero"], correcta: 1, explicacion: "Actuaba bajo órdenes de Bolívar." },
      { pregunta: "¿Qué documento se firmó tras la victoria?", opciones: ["Tratado Lima", "Capitulación Ayacucho", "Acta Junín", "Declaración Real"], correcta: 1, explicacion: "Se firmó la Capitulación de Ayacucho." },
      { pregunta: "¿Qué significó esta batalla?", opciones: ["Derrota patriota", "Inicio virreinato", "Fin dominio español", "Alianza España"], correcta: 2, explicacion: "Marcó el fin del dominio español." },
      { pregunta: "¿Qué ocurrió con el virrey?", opciones: ["Escapó", "Fue capturado", "Ganó batalla", "Renunció antes"], correcta: 1, explicacion: "El virrey fue derrotado y capturado." },
      { pregunta: "¿Qué ideales triunfaron?", opciones: ["Monarquía", "Colonialismo", "Libertad y autodeterminación", "Imperio"], correcta: 2, explicacion: "Triunfaron libertad y autodeterminación." },
      { pregunta: "¿Cómo fue el combate?", opciones: ["Naval", "Simbólico", "Intenso y decisivo", "Sin enfrentamiento"], correcta: 2, explicacion: "Fue intenso y decisivo." },
      { pregunta: "¿Qué región fue escenario?", opciones: ["Selva", "Costa", "Sierra sur", "Desierto"], correcta: 2, explicacion: "Ocurrió en la sierra sur." }
    ]
  }
];

/* === AQUÍ VA EXACTAMENTE TU LÓGICA ORIGINAL SIN CAMBIOS === */

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
const lecturaContainer = document.getElementById("lectura-container");

function mostrarLectura() {
  const modulo = modulos[moduloActual];

  lecturaContainer.innerHTML = `
    <h2>${modulo.nombre}</h2>
    <p style="text-align:justify;">${modulo.texto}</p>
    <button class="btn-siguiente" onclick="iniciarModulo()">Comenzar preguntas ➡️</button>
  `;

  preguntaEl.textContent = "";
  opcionesEl.innerHTML = "";
  resultadoEl.classList.add("oculto");
}

function iniciarModulo() {
  lecturaContainer.innerHTML = "";
  mostrarPregunta();
}

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

  if (moduloActual < modulos.length) {
    mostrarLectura();  // 👈 mostramos el nuevo texto
  } else {
    finQuiz();
  }
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
  let color = "";
  let medalla = "";

  if (porcentaje >= 80) {
    mensajeFinal = "¡Excelente! Eres un niño patriota 🇵🇪";
    videoURL = "https://www.youtube.com/watch?v=oeqGzOe9v0M";
    color = "#2e7d32";
    medalla = "🥇";
  } 
  else if (porcentaje >= 60) {
    mensajeFinal = "Muy buen trabajo 👏";
    videoURL = "https://www.youtube.com/watch?v=JzZKFChS4Rw";
    color = "#f9a825";
    medalla = "🥈";
  } 
  else if (porcentaje >= 35) {
    mensajeFinal = "Bien, pero puedes mejorar 👍";
    videoURL = "https://www.youtube.com/watch?v=zYlIJsNa4Bk";
    color = "#ef6c00";
    medalla = "🥉";
  } 
  else {
    mensajeFinal = "Necesitas repasar un poco más 📚";
    videoURL = "https://www.youtube.com/watch?v=twTWEuca9kc";
    color = "#c62828";
    medalla = "📖";
  }

  document.getElementById("quiz-box").innerHTML = `
    <div class="resultado-box">

      <div class="medalla">${medalla}</div>

      <h2>Resultado Final</h2>

      <p><strong>${puntaje}</strong> de ${totalPreguntas} correctas</p>
      <h3 style="color:${color};">${porcentaje}% de aciertos</h3>

      <div class="barra-contenedor">
        <div class="barra-progreso" 
             style="width:${porcentaje}%; background:${color};">
        </div>
      </div>

      <p class="mensaje-final">${mensajeFinal}</p>

      <a href="${videoURL}" 
         target="_blank" 
         class="btn-video"
         style="background:${color};">
         📺 Ver video recomendado
      </a>

      <br><br>

      <button class="btn-reiniciar" onclick="window.location.href='index.html'">
        🏠 Ir al inicio
      </button>

    </div>
  `;
}


window.onload = mostrarLectura;

