$( document ).ready(function() {

  $("#side-toggle").on('click', function() {
    let menu = $(".side-bar");
    if (menu.hasClass('side-bar__hidden')) {
      $(this).removeClass('flipped');
      menu.removeClass('side-bar__hidden');
    } else {
      menu.addClass('side-bar__hidden');
      $(this).addClass('flipped');
    }
  });
  $("#nav-toggle").on('click', function(i) {
    let menu = $("#top-nav");
    if (menu.hasClass('navbar__fixed__deployed')) {
      $(this).removeClass('flipped');
      menu.removeClass('navbar__fixed__deployed');
    } else {
      menu.addClass('navbar__fixed__deployed');
      $(this).addClass('flipped');
    }
  });


if ( $('.slider').length ) {
  $(window).on('load', function() {

    let slider = $('.slider');
    let wrapper = $('.slider__wrapper')
    let sliderImages = $('.slider img');
    let next = $('#next');
    let prev = $('#prev');
    let sliderCount = sliderImages.length;
    let current = 0;

    function sliderGoTo(pos = 0){
      pos = (((pos) + (sliderCount)) % sliderCount);
      wrapper.css('left', `-${sliderImages.eq(pos).attr('data-left')}px`);
      slider.css('width', `${sliderImages.eq(pos).attr('data-width')}px`);
      slider.css('height', `${sliderImages.eq(pos).attr('data-height')}px`);
      current = pos;
    }

    // init data args
    let width = 0;
    sliderImages.each(function() {
      $(this).attr('data-left', width);
      if (slider.hasClass('slider__fixed')) {
        $(this).attr('data-width', '450px');
        $(this).attr('data-height', '900px');
      } else {
        $(this).attr('data-width', $(this).width());
        $(this).attr('data-height', $(this).height());
      }

      width += $(this).outerWidth(true);
    });

    next.on('click', function(){
      sliderGoTo(current + 1);
    });
    prev.on('click', function(){
      sliderGoTo(current - 1);
    });
    // prev.on('click', sliderGoTo(current - 1));

    sliderGoTo(0);
   });
  }
});
