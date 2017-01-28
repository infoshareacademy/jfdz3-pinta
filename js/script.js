
// minimize navbar on scroll after 200px

$(document).on('scroll', function() {
    if($(document).scrollTop()>200) {
        $('nav').removeClass('large').addClass('small');
    } else {
        $('nav').removeClass('small').addClass('large');
    }
});

// smooth scroll from navbar to anchor

$(document).on('click', 'a', function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
});

// scroll to the top

$('#toTop').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
});

$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});