$(document).ready(function() {
    function getUser(posicao) {
        var users = [
            {
                nome: 'Admin Admin',
                perfil: 'admin',
                cargo: 'Estagiário',
                area: 'SER 2'
            },
            {
                nome: 'Solic Solic',
                perfil: 'solicitante',
                cargo: 'Estagiário',
                area: 'SER 2'
            },
            {
                nome: 'Autorz Autorz',
                perfil: 'autorizador',
                cargo: 'Estagiário',
                area: 'SER 2'
            }
        ];

        return users[posicao];
    }

    let user = getUser(0);

    if(user.perfil == "solicitante") {
        $("#analisar-btn").hide();
    }


})

$(function() {

    function getUser(posicao) {
        var users = [
            {
                nome: 'Admin Admin',
                perfil: 'admin',
                cargo: 'Estagiário',
                area: 'SER 2'
            },
            {
                nome: 'Solic Solic',
                perfil: 'solicitante',
                cargo: 'Estagiário',
                area: 'SER 2'
            },
            {
                nome: 'Autorz Autorz',
                perfil: 'autorizador',
                cargo: 'Estagiário',
                area: 'SER 2'
            }
        ];

        return users[posicao];
    }

    let user = getUser(0);


    $("#settings").on('click', function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");    
    });

    // $("#editar-usuario-link").on('click', function() {
    //     if (user.perfil == 'admin') {
    //         alert('Foi para a tela de pesquisa')
    //     } else {
    //         alert('Foi para a tela de cadastro');
    //     }
    // })
});