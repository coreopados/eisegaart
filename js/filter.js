// langs class
var currentFilter = document.querySelector(".current-filter");
var filters = document.querySelectorAll(".filter li");


for(var i=0; i<filters.length; i++){
  filter = filters[i]
  filter.addEventListener('click', function(){

    for(var j=0; j<filters.length; j++){
      filter1 = filters[j]
      filter1.classList.remove('current-filter')
    }
    
    this.classList.add('current-filter')
  })
}