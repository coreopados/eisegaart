
// langs class
var currentLang = document.querySelector(".current-lang");
var langs = document.querySelectorAll(".langs li");


for(var i=0; i<langs.length; i++){
  lang = langs[i]
  lang.addEventListener('click', function(){

    for(var j=0; j<langs.length; j++){
      lang1 = langs[j]
      lang1.classList.remove('current-lang')
    }
    
    this.classList.add('current-lang')
  })
}

// menu button
var mobbutton = document.querySelector(".mobile-button");
var closemenu = document.querySelector(".close-menu");
var mobmenu = document.querySelector(".head-wrap nav ul");
// open
mobbutton.addEventListener('click', function(event){
  event.preventDefault();
  mobmenu.classList.add('active')
})
// close
closemenu.addEventListener('click', function(event){
  event.preventDefault();
  mobmenu.classList.remove('active')
})