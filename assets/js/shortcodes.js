/**
 * parallax
 * flatCounter
 * popupVideo
 * btnQuantity
 * tabs
 * flatAccordion
 * popupGallery
 */

 (function ($) {
    "use strict";
  
    var isMobile = {
      Android: function () {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function () {
        return (
          isMobile.Android() ||
          isMobile.BlackBerry() ||
          isMobile.iOS() ||
          isMobile.Opera() ||
          isMobile.Windows()
        );
      },
    };
  
    var parallax = function () {
      if ($().parallax && isMobile.any() == null) {
        $(".parallax").parallax("50%", 0.2);
      }
    };
  
    var flatCounter = function () {
      if ($(document.body).hasClass("counter-scroll")) {
        var a = 0;
        $(window).scroll(function () {
          var oTop = $(".box").offset().top - window.innerHeight;
          if (a == 0 && $(window).scrollTop() > oTop) {
            if ($().countTo) {
              $(".box")
                .find(".number")
                .each(function () {
                  var to = $(this).data("to"),
                    speed = $(this).data("speed");
  
                  $(this).countTo({
                    to: to,
                    speed: speed,
                  });
                });
            }
            a = 1;
          }
        });
      }
    };

    var popupVideo = function () {
      if ($().magnificPopup) {
        $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
          type: "iframe",
          mainClass: "mfp-fade",
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false,
        });
      }
    };
  
  
  var btnQuantity = function () {
      $('.minus-btn').on('click', function(e) {
          e.preventDefault();
          var $this = $(this);
          var $input = $this.closest('div').find('input');
          var value = parseInt($input.val());
      
          if (value > 1) {
              value = value - 1;
          } 
      
      $input.val(value);
      
      });
      
      $('.plus-btn').on('click', function(e) {
          e.preventDefault();
          var $this = $(this);
          var $input = $this.closest('div').find('input');
          var value = parseInt($input.val());
      
          if (value > 0) {
              value = value + 1;
          } 
      
          $input.val(value);
      });
  }


  
  var tabs = function(){
    $('.flat-tabs,.flat-tabs-style2,.flat-tabs-style3').each(function(){
        $(this).find('.content-tab').children().hide();
        $(this).find('.content-tab').children().first().show();
        $(this).find('.menu-tab').children('li').on('click',function(){
            var liActive = $(this).index();
            var contentActive=$(this).siblings().removeClass('active').parents('.flat-tabs,.flat-tabs-style2,.flat-tabs-style3').find('.content-tab').children().eq(liActive);
            contentActive.addClass('active').fadeIn("slow");
            contentActive.siblings().removeClass('active');
            $(this).addClass('active').parents('.flat-tabs,.flat-tabs-style2,.flat-tabs-style3').find('.content-tab').children().eq(liActive).siblings().hide();
            swiper_tab();
            swiper_tab2();
            swiper_tab3();
        });
    });
    
};

var swiper_tab = function(){
  var swiper_tab =  new Swiper(".carousel-auto-with", {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    }, 
    slidesPerView: 2,   
    loop: true,
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
  });
};

var swiper_tab2 = function(){
  var swiper_tab2 = new Swiper(".carousel-3", {
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        },
    slidesPerView: 1,
    loop: true, 
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1366: {
          slidesPerView: 5,
          spaceBetween: 30,
      },
    },
  });
};

var swiper_tab3 = function(){
    var swiper_tab3 = new Swiper(".carousel-4", {
      // autoplay: {
      //     delay: 5000,
      //     disableOnInteraction: false,
      //     },
      slidesPerView: 1,
      loop: true, 
      spaceBetween: 30,
      navigation: {
          clickable: true,
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      breakpoints: {
          768: {
              slidesPerView: 1,
              spaceBetween: 30,
          },
          1024: {
              slidesPerView: 1,
              spaceBetween: 30,
          },
      },
    });
  };

  
var flatAccordion = function() {
  var args = {duration: 600};
  $('.flat-toggle .toggle-title.active').siblings('.toggle-content').show();

  $('.flat-toggle.enable .toggle-title').on('click', function() {
      $(this).closest('.flat-toggle').find('.toggle-content').slideToggle(args);
      $(this).toggleClass('active');
  }); // toggle 

  $('.flat-accordion .toggle-title').on('click', function () {
      if( !$(this).is('.active') ) {
          $(this).closest('.flat-accordion').find('.toggle-title.active').toggleClass('active').next().slideToggle(args);
          $(this).toggleClass('active');
          $(this).next().slideToggle(args);
      } else {
          $(this).toggleClass('active');
          $(this).next().slideToggle(args);
      }     
  }); // accordion
}; 

var no_link = function(){
  $('a.nolink').click(function(e)
{
    e.preventDefault();
});
}

var popupGallery = function () {
  if ($().magnificPopup) {
    $(".popup-gallery").magnificPopup({
      type: "image",
      tLoading: "Loading image #%curr%...",
      removalDelay: 600,
      mainClass: "my-mfp-slide-bottom",
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1],
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      },
    });
  }
};

    $(function () {
      flatCounter();
      popupVideo();
      tabs();
      new WOW().init();
      btnQuantity();
      flatAccordion();
      $(window).on("load resize", function () {
        parallax();
      });
      swiper_tab();
      swiper_tab2();
      swiper_tab3();
      no_link();
      popupGallery();
    });
  })(jQuery);
