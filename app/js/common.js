$(function() {

//-------------------------responsive---------------------------------------
  var swiper = new Swiper('.raffle__wrap', {
    slidesPerView: 2,
    pagination: {
      el: '.raffle__pagination',
      clickable: true,
    },
    breakpoints: {
      767: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
  });

//-------------------------slider---------------------------------------
  var swiper = new Swiper('.slider__container', {
    // direction: 'vertical',
    slidesPerView: 1,
    mousewheel: true,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.slider__pagination',
      clickable: true,
    },
  });

//-------------------------скорость якоря---------------------------------------
  // $(".click").on("click","a", function (event) {
  //     event.preventDefault();
  //     var id  = $(this).attr('href'),
  //         top = $(id).offset().top;
  //     $('html').animate({scrollTop: top - 0}, 'slow', 'swing');
  // });

//-------------------------------попандер---------------------------------------
  $('.modal').popup({transition: 'all 0.3s'});

//---------------------------free-----------------------
  $('.free__wrap').hide();
  $('.free__wrap:first').show();
  $('.free .link').click(function(event){
    event.preventDefault();
    $(this).addClass('active');
    $('.free__wrap').hide();
     var selectTab = $(this).attr('href');
    $(selectTab).fadeIn();
  });

//------------------------------------form-------------------------------------------
  $('input[type="tel"]').mask('+0 (000) 000-00-00');


});
