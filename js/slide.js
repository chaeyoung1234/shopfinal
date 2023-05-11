$(function(){

function prev() {
    $('.slide li:last').prependTo('.slide');
    $('.slide').css({ marginLeft: -1400 });
    $('.slide').stop().animate({ marginLeft: 0 },500);
}

function next() {
    $('.slide').stop().animate({ marginLeft: -1400 },500, function () {
    $('.slide li:first').appendTo('.slide');
    $('.slide').css({ marginLeft: 0 });
    });
}

function slide() {
    $('.slide').stop().animate({ marginLeft: -1400 }, function () {
    $('.slide li:first').appendTo('.slide');
    $('.slide').css({ marginLeft: 0 });
    });
}

setInterval(slide, 3000);

$('.prev').click(function () {
    prev();
});

$('.next').click(function () {
    next();
})

});
