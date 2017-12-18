//Navbar Color Change Function
$(document).ready(function(){
  var scroll_start = 0;
  var button = $('.button');
  var offset = button.offset();
    if (button.length) {
    $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
        $('.navbar').css('background', 'url("Assets/Images/superhero.png")');
        $('.navbar').css('1s');
      } else {
        $('.navbar').css('background' , 'none');
      }
    });
  }
});

//Click Buttons

$(".button").on('click', function(){
    $('html, body').animate({
        scrollTop: $('.container').offset().top
      }, 1000); //scrolls to the position found in last line
});

$(".projects").on('click', function(){
    $('html, body').animate({
        scrollTop: $('.container').offset().top
      }, 1000); //scrolls to the position found in last line
});

$(".about").on('click', function(){
    $('html, body').animate({
        scrollTop: $('.mal-fluid').offset().top
      }, 2000); //scrolls to the position found in last line
});

$(".contact").on('click', function(){
    $('html, body').animate({
        scrollTop: $('.about-title').offset().top
      }, 2000); //scrolls to the position found in last line
});

$('#logo').on('click', function(){					//jQuery function which triggers when camp icon is clicked
    $('html, body').animate({ scrollTop: 0 }, 'slow'); //scrolls to position 0 (top of page)
})
