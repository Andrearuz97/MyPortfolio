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
    // Controlla se il click è all'interno della navbar
    let insideNavbar = document.querySelector('.navbar').contains(event.target);
    // Controlla se il click è sul toggler della navbar
    let isNavbarToggler = event.target.classList.contains('navbar-toggler') || event.target.closest('.navbar-toggler') != null;

    // Stato della navbar (aperta o chiusa)
    let navbarCollapse = document.querySelector('.navbar-collapse');
    let isNavbarOpen = navbarCollapse.classList.contains('show');

    // Chiude la navbar se il click è fuori dalla navbar o all'interno della navbar ma non sul toggler
    if ((isNavbarOpen && !insideNavbar) || (insideNavbar && !isNavbarToggler && isNavbarOpen)) {
        document.querySelector('.navbar-toggler').click();
    }
});

  
  


    document.getElementById('language-switcher').addEventListener('change', function() {
        var language = this.value;
        console.log("Lingua selezionata:", language);
    });
    
// Anno aggiornato in tempo reale
    var anno= document.getElementById("anno");
    var data = new Date().getFullYear();
    anno.innerHTML = data
