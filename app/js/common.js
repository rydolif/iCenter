$(function() {

//----------------------------wowJS-------------------------------
  var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null // optional scroll container selector, otherwise use window
    }
  );
  wow.init();
  
//----------------------------------------up----------------------------------
  $(window).scroll(function(){
      if($(this).scrollTop()>100){
          $('.up').addClass('up--active');
      }
      else if ($(this).scrollTop()<100){
          $('.up').removeClass('up--active');
      }
  });

  if($(this).scrollTop()>100){
      $('.up').addClass('up--active');
  }


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

  jQuery.validator.addMethod("phoneno", function(phone_number, element) {
     return this.optional(element) || phone_number.match(/\+[0-9]{1}\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}/);
  }, "Введите Ваш телефон");

  $(".form").each(function(index, el) {
    $(el).addClass('form-' + index);

    $('.form-' + index).validate({
      rules: {
        phone: {
          required: true,
          phoneno: true
        },
        name: 'required',
      },
      messages: {
        name: "Введите Ваше имя",
        lastname: "Введите Вашу фамилию",
        phone: "Введите Ваш телефон",
        email: "Введите Вашу почту",
      },
      submitHandler: function(form) {
        var t = {
          name: jQuery('.form-' + index).find("input[name=name]").val(),
          lastname: jQuery('.form-' + index).find("input[name=lastname]").val(),
          phone: jQuery('.form-' + index).find("input[name=phone]").val(),
          email: jQuery('.form-' + index).find("input[name=email]").val(),
          subject: jQuery('.form-' + index).find("input[name=subject]").val()
        };
        ajaxSend('.form-' + index, t);
      }
    });

  });

  function ajaxSend(formName, data) {
    jQuery.ajax({
      type: "POST",
      url: "sendmail.php",
      data: data,
      success: function() {
        $(".modal").popup("hide");
        $("#thanks").popup("show");
        setTimeout(function() {
          $(formName).trigger('reset');
        }, 2000);
      }
    });
  }

});
