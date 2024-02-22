$(document).ready(function () {
    $('#carrosel-imagens').slick({
        autoplay: true,
    });
    $('.menu-hamburger').click(() => {
        $('nav').slideToggle();
    });

    $('#name').mask('A', {
        translation: {
            "A": { pattern: /^[a-zA-Z]+$/, recursive: true }
        }
    });

    $('#phone_with_ddd').mask('(00) 0000-0000', {
        placeholder: "(00) 0000-0000"
    });
    $('form').validate({
        rules: {
            name: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true
            },
            veiculoDeInteresse: {
                required: false
            },
        },
        messages: {
            name: 'Por favor, insira o seu nome',
            telefone: 'Por favor digite o seu numero de telefone',
            email: "Por favor digite o seu endereço de e-mail"
        },
        submitHandler: function (form) {
            console.log(form)
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existme ${camposIncorretos} campos incorretos`)
            }
        }
    })
})