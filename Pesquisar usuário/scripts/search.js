$(function() {

    function getUsers(valor, searchAll) {
        var users = [
            {
                nome: 'Admin Admin',
                perfil: 'Administrador',
                cargo: 'Cargo 1',
                area: 'Área 1'
            },
            {
                nome: 'Solic Solic',
                perfil: 'Solicitante',
                cargo: 'Cargo 2',
                area: 'Área 1'
            },
            {
                nome: 'Autorz Autorz',
                perfil: 'Autorizador',
                cargo: 'Cargo 2',
                area: 'Área 1'
            },{
                nome: 'Admin Admin',
                perfil: 'Administrador',
                cargo: 'Cargo 1',
                area: 'Área 1'
            },
            {
                nome: 'Solic Solic',
                perfil: 'Solicitante',
                cargo: 'Cargo 1',
                area: 'Área 1'
            },
            {
                nome: 'Autorz Autorz',
                perfil: 'Autorizador',
                cargo: 'Cargo 2',
                area: 'Área 2'
            },
            {
                nome: 'Admin Admin',
                perfil: 'Administrador',
                cargo: 'Cargo 2',
                area: 'Área 2'
            },
            {
                nome: 'Solic Solic',
                perfil: 'Solicitante',
                cargo: 'Cargo 1',
                area: 'Área 2'
            },
            {
                nome: 'Autorz Autorz',
                perfil: 'Autorizador',
                cargo: 'Cargo 2',
                area: 'Área 2'
            },
            {
                nome: 'Admin Admin',
                perfil: 'Administrador',
                cargo: 'Cargo 1',
                area: 'Área 2'
            },
            {
                nome: 'Solic Solic',
                perfil: 'Solicitante',
                cargo: 'Cargo 2',
                area: 'Área 2'
            },
            {
                nome: 'Autorz Autorz',
                perfil: 'Autorizador',
                cargo: 'Cargo 2',
                area: 'Área 2'
            }
        ];

        if (searchAll) {
            return users;
        }

        var searchedUsers = [];

        users.forEach(user => {
            if (user.perfil == valor) {
                searchedUsers.push(user);
            }
        });

        return searchedUsers;
    }


    $("#search-button").on('click', function() {
        let searchAll = false;
        
        if ($("#search-perfil").val() == "") {
            searchAll = true;
        }

        var users = getUsers($("#search-perfil").val(), searchAll);

        users.forEach(user => {
            let btn = document.createElement('button');
            btn.setAttribute('type', 'button');
            btn.setAttribute('class', 'list-group-item');
            btn.setAttribute('onclick', 'mostrarDados("'+ user.nome + '","' + user.cargo + '","' + user.perfil + '","' + user.area + '")');
            btn.innerText = user.nome;

            document.getElementById('list-result-search').appendChild(btn);
        });
    });


});