
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

// changes page title, w nagowce

$(function () {

    var siteTitles = [];
    var newTitle = ".swapp";

    $('.navbar-nav a').each(function () {
        siteTitles.push({
            "position": $($(this).attr('href')).offset().top-150,
            "title": $(this).attr('data-siteTitle')
        });
    });

    $(window).scroll(function () {
        siteTitles.forEach(function (siteTitle) {
            if ($(window).scrollTop() > siteTitle.position) {
                newTitle = siteTitle.title;
            }
        });

        $('title').text(newTitle);

    });
});



$(document).ready(function() {

    /* Maps */

    var map = new GMaps({
        div: '.map',
        lat: 53.4296143,
        lng: 14.5845406,
        zoom: 12
    });


    map.addMarker({
        lat: 53.4296143,
        lng: 14.4845406,
        title: 'Lima', /* Write city name */
        infoWindow: {
            content: '<p>our office is here. </p>'
        }
    });

});
