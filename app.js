$(document).ready(function () {
    $('#carrosel-imagens').slick({
        autoplay: true,
    });
    $('.menu-hamburger').click(() => {
        $('nav').slideToggle();
    });

    // mascaras
    $('#name').mask('A', {
        translation: {
            "A": { pattern: /^[a-zA-Z]+$/, recursive: true }
        }
    });
    $('#phone_with_ddd').mask('(00)0000-0000', {
        placeholder: "(00) 0000-0000"
    });
    $('#email').mask("A", {
        placeholder: "you@example.com",
        translation: {
            "A": { pattern: /[\w@\-.+]/, recursive: true }
        }
    });

    // validações
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
            telefone: 'Por favor, insira o seu numero de telefone',
            email: "Por favor, insira o seu endereço de e-mail"
        },
        submitHandler: function (form) {
            console.log(form)
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $('.lista-veiculos button').click(function () {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})