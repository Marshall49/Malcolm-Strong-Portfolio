$(".button").on('click', function(){
    $(".services").css("display", "block");		//displays the previously hidden container class block
    lastElementTop = $('.services').position().top ; //finds the position of the container class and assigns to variable
    $('html, body').animate({scrollTop: lastElementTop}, 'slow'); //scrolls to the position found in last line
});

$(".links-port").on('click', function(){
    //jQuery function which triggers when developers link clicked
    $(".services").css("display", "block");		//displays the previously hidden container class block
    lastElementTop = $('.services').position().top ; //finds the position of the container class and assigns to variable
    $('html, body').animate({scrollTop: lastElementTop}, 'slow'); //scrolls to the position found in last line
});

$(".links-about").on('click', function(){
    //jQuery function which triggers when developers link clicked
    $(".click").css("display", "block");		//displays the previously hidden container class block
    lastElementTop = $('.click').position().top ; //finds the position of the container class and assigns to variable
    $('html, body').animate({scrollTop: lastElementTop}, 'slow'); //scrolls to the position found in last line
});


$(".links-contact").on('click', function(){
    //jQuery function which triggers when developers link clicked
    $(".click-contact").css("display", "block");		//displays the previously hidden container class block
    lastElementTop = $('.click-contact').position().top ; //finds the position of the container class and assigns to variable
    $('html, body').animate({scrollTop: lastElementTop}, 'slow'); //scrolls to the position found in last line
});

$('#logo').on('click', function(){					//jQuery function which triggers when camp icon is clicked
    $('html, body').animate({ scrollTop: 0 }, 'slow'); //scrolls to position 0 (top of page)
})
