$(".button").on('click', function(){
    $(".container").css("display", "block");		//displays the previously hidden container class block
    lastElementTop = $('.container').position().top ; //finds the position of the container class and assigns to variable
    $('html, body').animate({scrollTop: lastElementTop}, 'slow'); //scrolls to the position found in last line
});

$(".projects").on('click', function(){
    //jQuery function which triggers when developers link clicked
    $(".container").css("display", "block");		//displays the previously hidden container class block
    lastElementTop = $('.container').position().top ; //finds the position of the container class and assigns to variable
    $('html, body').animate({scrollTop: lastElementTop}, 'slow'); //scrolls to the position found in last line
});

$(".about").on('click', function(){
    //jQuery function which triggers when developers link clicked
    $(".click-contact").css("display", "block");		//displays the previously hidden container class block
    lastElementTop = $('.click-contact').position().top ; //finds the position of the container class and assigns to variable
    $('html, body').animate({scrollTop: lastElementTop}, 'slow'); //scrolls to the position found in last line
});


$(".contact").on('click', function(){
    //jQuery function which triggers when developers link clicked
    $(".click-contact").css("display", "block");		//displays the previously hidden container class block
    lastElementTop = $('.click-contact').position().top ; //finds the position of the container class and assigns to variable
    $('html, body').animate({scrollTop: lastElementTop}, 'slow'); //scrolls to the position found in last line
});

$('#logo').on('click', function(){					//jQuery function which triggers when camp icon is clicked
    $('html, body').animate({ scrollTop: 0 }, 'slow'); //scrolls to position 0 (top of page)
})
