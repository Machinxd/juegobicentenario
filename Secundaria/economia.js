const preguntas = [
  {
    pregunta: "¿Qué es el ahorro?",
    opciones: [
      "Gastar todo el dinero",
      "Guardar parte del dinero para el futuro",
      "Pedir dinero prestado",
      "Comprar cosas innecesarias"
    ],
    correcta: 1,
    explicacion: "Ahorrar significa guardar una parte del dinero para usarlo más adelante en metas o emergencias.",
    consejo: "Consejo: Guarda al menos el 10% de lo que recibas."
  },
  {
    pregunta: "¿Qué es un presupuesto?",
    opciones: [
      "Un plan para organizar ingresos y gastos",
      "Una deuda",
      "Un impuesto",
      "Un préstamo"
    ],
    correcta: 0,
    explicacion: "Un presupuesto permite planificar cómo usar el dinero correctamente.",
    consejo: "Consejo: Siempre anota lo que ganas y lo que gastas."
  },
  {
    pregunta: "¿Qué es un ingreso?",
    opciones: [
      "Dinero que recibes",
      "Dinero que gastas",
      "Una deuda",
      "Un impuesto"
    ],
    correcta: 0,
    explicacion: "Ingreso es el dinero que entra, como sueldo o propina.",
    consejo: "Consejo: Busca siempre nuevas formas de generar ingresos."
  },
  {
    pregunta: "¿Qué pasa si gastas más de lo que ganas?",
    opciones: [
      "Ahorras más",
      "Tienes deudas",
      "Ganas dinero",
      "Nada pasa"
    ],
    correcta: 1,
    explicacion: "Gastar más de lo que ingresas genera deudas.",
    consejo: "Consejo: Nunca gastes más de lo que ganas."
  },
  {
    pregunta: "¿Qué es invertir?",
    opciones: [
      "Guardar dinero sin usarlo",
      "Usar dinero para generar más dinero",
      "Gastar sin pensar",
      "Pedir prestado"
    ],
    correcta: 1,
    explicacion: "Invertir significa usar dinero para hacerlo crecer.",
    consejo: "Consejo: Invierte solo si entiendes cómo funciona."
  },
  {
    pregunta: "¿Qué institución guarda dinero?",
    opciones: ["Banco", "Mercado", "Fábrica", "Tienda"],
    correcta: 0,
    explicacion: "Los bancos guardan dinero de forma segura.",
    consejo: "Consejo: Usa cuentas bancarias para mayor seguridad."
  },
  {
    pregunta: "¿Qué es inflación?",
    opciones: [
      "Subida general de precios",
      "Bajada de precios",
      "Un salario",
      "Un descuento"
    ],
    correcta: 0,
    explicacion: "Inflación es el aumento general de precios.",
    consejo: "Consejo: Ahorra para protegerte de la inflación."
  },
  {
    pregunta: "¿Qué es una meta financiera?",
    opciones: [
      "Comprar sin pensar",
      "Ahorrar para algo específico",
      "Una deuda",
      "Un impuesto"
    ],
    correcta: 1,
    explicacion: "Una meta financiera es ahorrar para algo concreto.",
    consejo: "Consejo: Define metas claras."
  },
  {
    pregunta: "¿Qué es deuda?",
    opciones: [
      "Dinero que debes pagar",
      "Dinero que recibes",
      "Un ahorro",
      "Una ganancia"
    ],
    correcta: 0,
    explicacion: "Deuda es dinero que debes devolver.",
    consejo: "Consejo: Evita deudas innecesarias."
  },
  {
    pregunta: "¿Qué es salario?",
    opciones: [
      "Pago por trabajar",
      "Un gasto",
      "Un impuesto",
      "Un préstamo"
    ],
    correcta: 0,
    explicacion: "Salario es el dinero que recibes por trabajar.",
    consejo: "Consejo: Administra bien tu salario."
  },
  {
    pregunta: "¿Qué es capital?",
    opciones: [
      "Dinero para invertir",
      "Un gasto",
      "Un impuesto",
      "Una deuda"
    ],
    correcta: 0,
    explicacion: "Capital es dinero usado para generar más dinero.",
    consejo: "Consejo: Haz crecer tu capital."
  },
  {
    pregunta: "¿Qué es consumo responsable?",
    opciones: [
      "Comprar solo lo necesario",
      "Gastar sin pensar",
      "Endeudarse",
      "Comprar por impulso"
    ],
    correcta: 0,
    explicacion: "Consumo responsable es comprar lo necesario.",
    consejo: "Consejo: Piensa antes de gastar."
  },
  {
    pregunta: "Si ganas 200 y gastas 150, ¿cuánto ahorras?",
    opciones: ["50", "100", "150", "30"],
    correcta: 0,
    explicacion: "200 - 150 = 50.",
    consejo: "Consejo: Siempre ahorra una parte."
  },
  {
    pregunta: "¿Qué es fondo de emergencia?",
    opciones: [
      "Dinero guardado para imprevistos",
      "Un gasto",
      "Un préstamo",
      "Un impuesto"
    ],
    correcta: 0,
    explicacion: "Sirve para emergencias inesperadas.",
    consejo: "Consejo: Ten mínimo 3 meses de ahorro."
  },
  {
    pregunta: "¿Qué es emprendimiento?",
    opciones: [
      "Actividad para generar ingresos",
      "Un gasto",
      "Una deuda",
      "Un impuesto"
    ],
    correcta: 0,
    explicacion: "Un emprendimiento permite generar ingresos propios.",
    consejo: "Consejo: Emprender desarrolla habilidades."
  },
  {
    pregunta: "¿Qué es interés?",
    opciones: [
      "Ganancia por prestar dinero",
      "Un gasto",
      "Un impuesto",
      "Una deuda"
    ],
    correcta: 0,
    explicacion: "Interés es dinero adicional ganado o pagado.",
    consejo: "Consejo: Aprende sobre interés compuesto."
  },
  {
    pregunta: "¿Qué es planificación financiera?",
    opciones: [
      "Organizar ingresos y gastos",
      "Gastar todo",
      "Evitar ahorrar",
      "Pedir préstamos"
    ],
    correcta: 0,
    explicacion: "Es organizar correctamente el dinero.",
    consejo: "Consejo: Planifica tu futuro financiero."
  },
  {
    pregunta: "¿Qué es ahorro a largo plazo?",
    opciones: [
      "Guardar dinero por mucho tiempo",
      "Gastar hoy",
      "Endeudarse",
      "Comprar impulsivamente"
    ],
    correcta: 0,
    explicacion: "Es ahorrar pensando en el futuro.",
    consejo: "Consejo: Piensa en metas grandes."
  },
  {
    pregunta: "¿Qué es ingreso pasivo?",
    opciones: [
      "Dinero que se gana sin trabajar activamente",
      "Salario mensual",
      "Un impuesto",
      "Un gasto"
    ],
    correcta: 0,
    explicacion: "Es dinero que entra sin trabajar directamente.",
    consejo: "Consejo: Busca ingresos pasivos."
  },
  {
    pregunta: "¿Qué es diversificar?",
    opciones: [
      "Invertir en diferentes cosas",
      "Gastar todo en una sola cosa",
      "No ahorrar",
      "Pedir deuda"
    ],
    correcta: 0,
    explicacion: "Diversificar reduce riesgos.",
    consejo: "Consejo: No pongas todo tu dinero en un solo lugar."
  }
];

let indice = 0;
let puntaje = 0;
let tiempo = 60;
let intervalo;
let respondido = false;

const preguntaEl = document.getElementById("pregunta");
const opcionesEl = document.getElementById("opciones");
const resultadoEl = document.getElementById("resultado");
const timerEl = document.getElementById("timer");

/* 🔥 MEZCLAR OPCIONES AUTOMÁTICAMENTE */
function mezclarOpciones(pregunta) {
  const opcionesMezcladas = pregunta.opciones
    .map((opcion, index) => ({
      texto: opcion,
      esCorrecta: index === pregunta.correcta
    }))
    .sort(() => Math.random() - 0.5);

  pregunta.opciones = opcionesMezcladas.map(op => op.texto);
  pregunta.correcta = opcionesMezcladas.findIndex(op => op.esCorrecta);
}

function iniciarTemporizador() {
  clearInterval(intervalo);
  tiempo = 60;
  timerEl.textContent = "⏱ " + tiempo;

  intervalo = setInterval(() => {
    tiempo--;
    timerEl.textContent = "⏱ " + tiempo;
    if (tiempo === 0 && !respondido) siguiente();
  }, 1000);
}

function mostrarPregunta() {
  respondido = false;
  const actual = preguntas[indice];

  mezclarOpciones(actual);

  preguntaEl.textContent = actual.pregunta;
  opcionesEl.innerHTML = "";
  resultadoEl.classList.add("oculto");
  resultadoEl.innerHTML = "";

  actual.opciones.forEach((op, i) => {
    const btn = document.createElement("button");
    btn.textContent = op;
    btn.onclick = () => verificarRespuesta(i, actual.correcta, actual);
    opcionesEl.appendChild(btn);
  });

  iniciarTemporizador();
}

function verificarRespuesta(elegida, correcta, actual) {
  if (respondido) return;

  respondido = true;
  clearInterval(intervalo);

  const botones = document.querySelectorAll(".opciones button");

  botones.forEach((btn, i) => {
    btn.disabled = true;
    if (i === correcta) btn.classList.add("correcta");
    if (i === elegida && i !== correcta) btn.classList.add("incorrecta");
  });

  if (elegida === correcta) puntaje++;

  resultadoEl.classList.remove("oculto");
  resultadoEl.innerHTML = `
    <p>${elegida === correcta ? "✅ Correcto" : "❌ Incorrecto"}</p>
    <p><strong>Respuesta correcta:</strong> ${actual.opciones[correcta]}</p>
    <p>${actual.explicacion}</p>
    <p style="color:#b71c1c;"><strong>${actual.consejo}</strong></p>
    <button class="btn-siguiente" onclick="siguiente()">Siguiente ➡️</button>
  `;
}

function siguiente() {
  indice++;
  if (indice < preguntas.length) {
    mostrarPregunta();
  } else {
    finQuiz();
  }
}

function finQuiz() {
  let porcentaje = Math.round((puntaje / preguntas.length) * 100);

  let videoURL = "";
  let mensaje = "";
  let color = "";
  let medalla = "";

  if (porcentaje >= 80) {
    videoURL = "https://www.youtube.com/watch?v=8-EGlOCiZvE";
    mensaje = "¡Excelente trabajo! Eres un crack en economía 💰";
    color = "#2e7d32";
    medalla = "🥇";
  } 
  else if (porcentaje >= 50) {
    videoURL = "https://www.youtube.com/watch?v=0QrWvnc6Qpo";
    mensaje = "Buen trabajo, pero puedes mejorar 📈";
    color = "#f9a825";
    medalla = "🥈";
  } 
  else {
    videoURL = "https://www.youtube.com/watch?v=DB9pjZRxBzs";
    mensaje = "Necesitas reforzar tus conocimientos 📚";
    color = "#c62828";
    medalla = "🥉";
  }

  document.querySelector(".quiz-container").innerHTML = `
    <div class="resultado-box">
      <div class="medalla">${medalla}</div>
      <h2>Resultado Final</h2>

      <div class="resultado-datos">
        <p><strong>${puntaje}</strong> de ${preguntas.length} correctas</p>
        <h3 style="color:${color};">${porcentaje}% de aciertos</h3>
      </div>

      <div class="barra-contenedor">
        <div class="barra-progreso" 
             style="width:${porcentaje}%; background:${color};">
        </div>
      </div>

      <p class="mensaje-final">${mensaje}</p>

      <a href="${videoURL}" 
         target="_blank" 
         class="btn-video"
         style="background:${color};">
         📺 Ver video recomendado
      </a>

      <button class="btn-inicio" onclick="window.location.href='secundaria.html'">
        🏠 Ir al inicio
      </button>
    </div>
  `;
}


window.onload = mostrarPregunta;
