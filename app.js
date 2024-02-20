$(document).ready(function () {
    $('#carrosel-imagens').slick({
        autoplay: true,
    });
    $('.menu-hamburger').click(() => {
        $('nav').slideToggle();
    })
})