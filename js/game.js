var arrImages = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
for (var i = 0; i < 16; i++) {
    var num = Math.ceil(Math.random() * arrImages.length) - 1; //indeks obrazka
    var img = arrImages.splice(num, 1);
    $('ol').append(
        '<li class="' + img[0] + '" id="' + i + img[0] + '">' + '<img src="game_img/' + img[0] + '.jpg' + '">' + '</li>'
    );
}
var clickCount = 0;
var imgClass1 = "";
var imgClass2 = "";
console.log('Click count: ' + clickCount);


$('body').on('click', 'li', function () {
    if (clickCount == 0 && !$(this).children('img').hasClass('matched')) {
        $(this).children("img").addClass("img_selected");
        imgClass1 = $(this).attr('class');
        imgId1 = $(this).attr('id');
        clickCount++;
    }

    else if (clickCount == 1 && $(this).attr('id') != imgId1 && !$(this).children('img').hasClass('matched')) {
        $(this).children("img").addClass("img_selected");
        imgClass2 = $(this).attr('class');

        if (imgClass1 === imgClass2) {
            $('li.' + imgClass2).children("img").addClass("matched");
            $('li.' + imgClass1).children("img").addClass("matched");
            console.log('img Class1: ' + imgClass1 + ' === img Class2: ' + imgClass2);
            clickCount = 0;
        }

        else {
            setTimeout(function () {
                $('img').not('img.matched').removeClass("img_selected");
                clickCount = 0;
            }, 2000);
        }
        clickCount++;
    }

    else {

        console.log("else");
    }

})
