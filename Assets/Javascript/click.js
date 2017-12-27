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
        $('.projects').css({"-webkit-animation": "fadeIn 15s", "animation": "fadeIn 15s"});
        $('.about').css({"-webkit-animation": "fadeIn 15s", "animation": "fadeIn 15s"});
        $('.contact').css({"-webkit-animation": "fadeIn 15s", "animation": "fadeIn 15s"});
        // $('#logo').css({"-webkit-animation": "fadeIn 15s", "animation": "fadeIn 15s"});
        $('.Header').css({"-webkit-animation": "animated rubberBand 10s", "animation": "animated rubberBand 10s"});
        $('.links').css({"border-radius": "none", "margin-top": "-5px", "margin-right": "-5px", "margin-bottom": "-1px", "box-shadow": "inset -80px 0px 100px 1px #ABABAB, 5px 5px 100px -95px #DDDDDD"});
        // $('#logo').css({"border-radius": "none", "margin-top": "3px", "margin-left": "-5px", "margin-bottom": "-50px", "box-shadow": "inset 2px 0px 100px 1px #ABABAB, 5px 5px 100px -95px #DDDDDD"});
        // $('.name').css('display' , 'none');
      } else {
        $('.navbar').css('background' , 'none');
        $('.projects').css('animation' , 'none');
        $('.about').css('animation' , 'none');
        $('.contact').css('animation' , 'none');
        $('.links').css('box-shadow' , 'none');
        // $('#logo').css('box-shadow' , 'none');
        // $('.name').css('display' , 'block');
      }
    });
  }
});

// $("header").append("<div class='glitch-window'></div>");
// //fill div with clone of real header
// $( "h1.glitched" ).clone().appendTo( ".glitch-window" );



// $(window).scroll(function(){
//     $(".arrow").css("opacity", 1 - $(window).scrollTop() / 250);
//   //250 is fade pixels
//   });

// $(function () {
//   $(window).scroll(function () {
//     var currentScrollTop = $(window).scrollTop();
//     $('.navbar').css('opacity', currentScrollTop/$('.navbar').height());
//   });
// });

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
        scrollTop: $('.click-contact').offset().top
      }, 2000); //scrolls to the position found in last line
});

$('#logo').on('click', function(){					//jQuery function which triggers when camp icon is clicked
    $('html, body').animate({ scrollTop: 0 }, 'slow'); //scrolls to position 0 (top of page)
})
