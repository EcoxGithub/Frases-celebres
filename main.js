const frases = [
    "La mejor forma de predecir el futuro es inventándolo. - (Alan Kay)",
    "Más vale la pena en la cara que la mancha en el corazón. - (Miguel de Cervantes)",
    "La creatividad es la inteligencia divirtiéndose. - (Albert Einstein)",
    "Las heridas que no se ven son las más profundas. - (William Shakespeare)",
    "La simplicidad es la sofisticación definitiva. - (Leonardo da Vinci)",
    "Recordar es fácil para quien tiene memoria. Olvidar es difícil para el que tiene corazón. - (Gabriel García Márquez)",
    "La educación es el arma más poderosa que puedes usar para cambiar el mundo. - (Nelson Mandela)",
    "Errar en el camino propio es mejor que acertar en el camino de alguien más. - (Fiódor Dostoyevsky)",
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día. - (Robert Collier)",
    "Los verdaderos amigos te apuñalan por delante. - (Oscar Wilde)",
    "La felicidad no es algo hecho. Viene de tus propias acciones. - (Dalai Lama)"
  ];

  function generarFrase() {
    // Selecciona una frase aleatoria del arreglo
    const indiceFrase = Math.floor(Math.random() * frases.length);
    const fraseSeleccionada = frases[indiceFrase];

    // Actualiza el texto del párrafo en el HTML
    const parrafoFrase = document.getElementById("frases");
    parrafoFrase.innerText = fraseSeleccionada;
  }
  generarFrase();
