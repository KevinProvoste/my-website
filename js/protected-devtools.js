// Bloquear clic derecho
document.addEventListener('contextmenu', function(event) {
  event.preventDefault();
  // alert('El clic derecho está deshabilitado.');
});

// Bloquear teclas específicas
document.addEventListener('keydown', function(event) {
  // Bloquear F12
  if (event.key === 'F12') {
    event.preventDefault();
    // alert('El uso de herramientas de desarrollo está deshabilitado.');
  }

  // Bloquear Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
  if ((event.ctrlKey && event.shiftKey && ['I', 'J'].includes(event.key)) || 
      (event.ctrlKey && event.key === 'U')) {
    event.preventDefault();
    // alert('Esta acción está deshabilitada.');
  }
});

// Detección de DevTools (método básico)
setInterval(function() {
  if (window.outerHeight - window.innerHeight > 200 || 
      window.outerWidth - window.innerWidth > 200) {
    alert('Se detectaron herramientas de desarrollo. Por favor, desactívelas.');
    window.location.href = 'about:blank'; // Redirigir o cerrar
  }
}, 1000);