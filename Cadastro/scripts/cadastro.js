$(function() {
    function getUsuarios(posicao) {
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

    var user = getUsuarios(0);

    if (user.perfil !== 'admin') {
        $('#div-perfil-cadastro').hide();
    }
})