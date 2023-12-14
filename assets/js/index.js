document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('theme-switcher').addEventListener('click', function() {
        // Attiva/Disattiva il tema scuro per il body
        document.body.classList.toggle('dark-theme'); 

        // Attiva/Disattiva il tema scuro per l'header
        document.querySelector('header').classList.toggle('dark-theme');

        // Attiva/Disattiva il tema scuro per il footer
        document.querySelector('footer').classList.toggle('dark-theme');

        var moonIcon = this.querySelector('.fa-moon');
        var sunIcon = this.querySelector('.fa-sun');
        moonIcon.style.display = moonIcon.style.display === 'none' ? 'block' : 'none';
        sunIcon.style.display = sunIcon.style.display === 'none' ? 'block' : 'none';
    });
});

  
  // Chiusura NavBar
  document.addEventListener('click', function(event) {
    // Controlla se il click è sul selettore di lingua
    let isLanguageSwitcher = event.target.id === 'language-switcher';

    // Il resto del codice rimane lo stesso
    let insideNavbar = document.querySelector('.navbar').contains(event.target);
    let isNavbarToggler = event.target.classList.contains('navbar-toggler') || event.target.closest('.navbar-toggler') != null;
    let navbarCollapse = document.querySelector('.navbar-collapse');
    let isNavbarOpen = navbarCollapse.classList.contains('show');

    // Aggiungi la condizione per il selettore di lingua qui
    if (isNavbarOpen && !insideNavbar && !isLanguageSwitcher) {
        document.querySelector('.navbar-toggler').click();
    }
});


  
  

    // Cambio lingua 
    document.getElementById('language-switcher').addEventListener('change', function() {
        var language = this.value;
        console.log("Lingua selezionata:", language);
    });
    
// Anno aggiornato in tempo reale
    var anno= document.getElementById("anno");
    var data = new Date().getFullYear();
    anno.innerHTML = data

    // Elimina dati del form 1 secodo dopo l'invio
    document.getElementById('contactForm').addEventListener('submit', function() {
        setTimeout(function() {
            document.getElementById('contactForm').reset();
        }, 1000); 
    });