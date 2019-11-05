$(function() {

//-------------------------responsive---------------------------------------
  var swiper = new Swiper('.raffle__wrap', {
    slidesPerView: 2,
    pagination: {
      el: '.raffle__pagination',
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
    direction: 'vertical',
    slidesPerView: 1,
    mousewheel: true
  });

//-------------------------скорость якоря---------------------------------------
$(".click").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top - 40}, 'slow', 'swing');
});

//-------------------------------попандер---------------------------------------
  $('.modal').popup({transition: 'all 0.3s'});

//---------------------------tabs-----------------------
  $('.tabs__wrap').hide();
  $('.tabs__wrap:first').show();
  $('.tabs__list a:first').addClass('active');
   $('.tabs__list a').click(function(event){
    event.preventDefault();
    $('.tabs__list a').removeClass('active');
    $(this).addClass('active');
    $('.tabs__wrap').hide();
     var selectTab = $(this).attr('href');
    $(selectTab).fadeIn();
  });


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

});
