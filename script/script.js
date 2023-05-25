function mostrarTarjetasAleatorias() {
    var container = document.getElementById("card-container");
    var cards = container.children;
    
    // Copiar y mezclar las tarjetas en orden aleatorio
    var shuffledCards = Array.from(cards).sort(function() { return 0.5 - Math.random() });
    
    // Vaciar el contenedor
    container.innerHTML = "";
    
    // Agregar las tarjetas nuevamente en el nuevo orden aleatorio
    shuffledCards.forEach(function(card) {
      container.appendChild(card);
    });
  }
  
  // Llamar a la función cuando se carga la página
  window.onload = function() {
    mostrarTarjetasAleatorias();
  };