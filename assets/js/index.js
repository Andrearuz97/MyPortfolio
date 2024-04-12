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
        closeNavbar();
    });
});

  // Funzione per chiudere la navbar
function closeNavbar() {
  let navbarCollapse = document.querySelector('.navbar-collapse');
  if (navbarCollapse.classList.contains('show')) {
    document.querySelector('.navbar-toggler').click();
  }
}
 // Chiusura NavBar
document.addEventListener('click', function(event) {
    let insideNavbar = document.querySelector('.navbar').contains(event.target);
    let isNavbarToggler = event.target.classList.contains('navbar-toggler') || event.target.closest('.navbar-toggler') != null;
    let navbarCollapse = document.querySelector('.navbar-collapse');
    let isNavbarOpen = navbarCollapse.classList.contains('show');

    // Chiude la navbar se è aperta e se il click è avvenuto fuori dalla navbar e non sul toggler
    if (isNavbarOpen && !insideNavbar && !isNavbarToggler) {
      closeNavbar();
    }
});

// Chiudi la navbar al cambio della lingua
document.getElementById('language-switcher').addEventListener('change', function() {
  var language = this.value;
  changeLanguage(language);
  closeNavbar();
});
// Chiudi la navbar alla selezione di un link
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', closeNavbar);
});


    

document.addEventListener('DOMContentLoaded', function () {
    // Imposta la lingua italiana come predefinita al caricamento della pagina
    changeLanguage('it');

    // Imposta il selettore di lingua su italiano
    document.getElementById('language-switcher').value = 'it';

    // Listener per il cambio di lingua tramite il selettore
    document.getElementById('language-switcher').addEventListener('change', function() {
      var language = this.value;
      changeLanguage(language);
    });
});

function changeLanguage(language) {
    for (const key in translations[language]) {
      const element = document.getElementById(key);
      if (element) {
        element.textContent = translations[language][key];
      }
    }
    // Aggiorna il selettore di lingua
    document.getElementById('language-switcher').value = language;
}
      
    const translations = {
        it: {
          'title': 'Ciao, sono Andrea Ruzittu',
          'aboutMe': `Ciao, sono Andrea. Dopo una laurea in Economia, ho iniziato a lavorare nell'amministrazione di una catena alberghiera, acquisendo competenze in gestione e servizio clienti. La mia passione per la tecnologia mi ha poi portato a frequentare un bootcamp di programmazione, dove mi sono specializzato in sviluppo web Full Stack. Oggi, integro la mia comprensione del business con le competenze tecniche per sviluppare soluzioni web innovative, sempre con un occhio al continuo apprendimento e alla collaborazione.`,
          'fullStack': 'SVILUPPATORE FULL-STACK',
          'ab':`Su di me...`,
          'progetti':`Progetti`,
          'contattami':`Contattami`,
          'skills':`Competenze`,
          'formMail':`Indirizzo Email`,
          'formMessage':`Messaggio`,
          'nomme':`Nome`,
          'formSend':`Inviami un messaggio`,
          'view':`Visualizza progetto`
          
        },
        en: {
          'title': `Hello, i'm Andrea Ruzittu`,
          'aboutMe': `Hi, I'm Andrea. After a degree in Economics, I started working in the administration of a hotel chain, acquiring skills in management and customer service. My passion for technology then led me to attend a programming bootcamp, where I specialized in Full Stack web development. Today, I integrate my understanding of business with the technical skills to develop innovative web solutions, always with an eye on continuous learning and collaboration.`,
          'fullStack': 'FULL-STACK DEVELOPER',
          'ab':`About me...`,
          'progetti':`Projects`,
          'contattami':`Contact me`,
          'skills':`Skills`,
          'formMail':`Email address`,
          'formMessage':`Message`,
          'nomme':`Name`,
          'formSend':`Send me a message`,
          'view':`View project`

        }
      };

    
// Anno aggiornato in tempo reale
    var anno= document.getElementById("anno");
    var data = new Date().getFullYear();
    anno.innerHTML=data
//Reset del form dopo invio!
    document.getElementById('contactForm').addEventListener('submit', function(e) {
      setTimeout(function() {
          document.getElementById('contactForm').reset();
      }, 1000); 
  });
  