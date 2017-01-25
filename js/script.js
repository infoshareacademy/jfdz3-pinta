
$(document).on('scroll', function() {

    if($(document).scrollTop()>200) {
        $('nav').removeClass('large').addClass('small');
    } else {
        $('nav').removeClass('small').addClass('large');
    }

});

$(document).on('click', 'a', function(event){
    event.preventDefault();
    $('body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
});



// to top

$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});


$("#toTop").click(function () {
    $("html, body").animate({scrollTop: 0}, 1000);
});