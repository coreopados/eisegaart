$(document).ready(function(){
    if($('.slider-main-page').length>0){
      var swiper = new Swiper('.slider-main-page', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
    if($('.jardin-slider').length>0){
      var swiper1 = new Swiper('.jardin-slider', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
  })