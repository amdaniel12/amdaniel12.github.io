window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var links = navbar.getElementsByTagName('a');
    var logoOriginal = document.getElementById('logoOriginal');
    var logoScrolled = document.getElementById('logoScrolled');
  
    if (window.scrollY > 100) {
      navbar.style.backgroundColor = '#000'; // Cambia el fondo del navbar
      logoOriginal.style.opacity = 0; // Oculta el primer logo
      logoOriginal.style.visibility = 'hidden';
      logoScrolled.style.opacity = 1; // Muestra el segundo logo
      logoScrolled.style.visibility = 'visible';
  
      // Cambia el color de los enlaces a blanco
      for (var i = 0; i < links.length; i++) {
        links[i].style.color = '#fff';
      }
    } else {
      navbar.style.backgroundColor = '#fff'; // Vuelve al fondo transparente
      logoOriginal.style.opacity = 1; // Muestra el primer logo
      logoOriginal.style.visibility = 'visible';
      logoScrolled.style.opacity = 0; // Oculta el segundo logo
      logoScrolled.style.visibility = 'hidden';
  
      // Vuelve al color de los enlaces original
      for (var i = 0; i < links.length; i++) {
        links[i].style.color = '#000';
      }
    }
});  