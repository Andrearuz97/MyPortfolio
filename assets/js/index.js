document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('theme-switcher').addEventListener('click', function() {
        // Attiva/Disattiva il tema scuro per il body
        document.body.classList.toggle('dark-theme'); 

        // Attiva/Disattiva il tema scuro per l'header
        document.querySelector('header').classList.toggle('dark-theme');

        // Attiva/Disattiva il tema scuro per il footer
        document.querySelector('footer').classList.toggle('dark-theme');
    });
});

  
  // Chiusura NavBar
  document.addEventListener('click', function(event) {
    let insideNavbar = document.querySelector('.navbar').contains(event.target);
    let isNavbarToggler = event.target.classList.contains('navbar-toggler') || event.target.closest('.navbar-toggler') != null;
    let navbarCollapse = document.querySelector('.navbar-collapse');
    let isNavbarOpen = navbarCollapse.classList.contains('show');
    
    // Controlla se il click è sul selettore di lingua e se il selettore di lingua è aperto
    let isLanguageSwitcher = event.target.id === 'language-switcher' || event.target.closest('#language-switcher') != null;
    let languageSwitcherExpanded = document.getElementById('language-switcher') === document.activeElement;

    // Aggiungi la condizione per il selettore di lingua qui
    if (isNavbarOpen && !insideNavbar) {
        if (!isLanguageSwitcher || !languageSwitcherExpanded) {
            document.querySelector('.navbar-toggler').click();
        }
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