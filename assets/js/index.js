document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('theme-switcher').addEventListener('click', function() {
        document.body.classList.toggle('dark-theme'); 

    });

});
  
  


    document.getElementById('language-switcher').addEventListener('change', function() {
        var language = this.value;
        console.log("Lingua selezionata:", language);
    });

    var anno= document.getElementById("anno");
    var data = new Date().getFullYear();
    anno.innerHTML = data
