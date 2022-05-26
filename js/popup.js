

  updateList = function() {
    var input = document.getElementById('file_input');
    var output = document.getElementById('fileList');

    for (var i = 0; i < input.files.length; ++i) {
      output.innerHTML += '<li>' + input.files.item(i).name + '</li>';
    }

  }

  var html = document.getElementsByTagName('html')[0];
  var popup = document.querySelector('.popup-form');
  var openform = document.querySelector('.contact-form');
  var closepopup = document.querySelector('.close-form');


  openform.addEventListener('click', function(event){
    event.preventDefault();
    popup.classList.add('active')
    html.classList.add('hidden')
  })
  closepopup.addEventListener('click', function(event){
    event.preventDefault();
    popup.classList.remove('active')
    html.classList.remove('hidden')
  })


