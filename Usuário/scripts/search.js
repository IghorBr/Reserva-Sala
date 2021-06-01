$(document).ready(function() {
    $("#panel-result").hide();
});


function search() {

    document.getElementById('list-result-search').innerHTML = "";

    function getUsers(valor, searchAll) {
        var users = [
            {
                nome: 'Admin Admin',
                login: 'admin.admin',
                email: 'admin@eco',
                perfil: 'Administrador',
                cargo: 'Cargo 1',
                area: 'Área 1'
            },
            {
                nome: 'Solic Solic',
                login: 'solic.solic',
                email: 'solicitante@eco',
                perfil: 'Solicitante',
                cargo: 'Cargo 2',
                area: 'Área 1'
            },
            {
                nome: 'Autorz Autorz',
                login: 'autorz.autorz',
                email: 'autorizador@eco',
                perfil: 'Autorizador',
                cargo: 'Cargo 2',
                area: 'Área 1'
            },
            {
                nome: 'Admin Admin',
                login: 'admin.admin',
                email: 'admin@eco',
                perfil: 'Administrador',
                cargo: 'Cargo 1',
                area: 'Área 1'
            },
            {
                nome: 'Solic Solic',
                login: 'solic.solic',
                email: 'solicitante@eco',
                perfil: 'Solicitante',
                cargo: 'Cargo 1',
                area: 'Área 1'
            },
            {
                nome: 'Autorz Autorz',
                login: 'autorz.autorz',
                email: 'autorizador@eco',
                perfil: 'Autorizador',
                cargo: 'Cargo 2',
                area: 'Área 2'
            },
            {
                nome: 'Admin Admin',
                login: 'admin.admin',
                email: 'admin@eco',
                perfil: 'Administrador',
                cargo: 'Cargo 2',
                area: 'Área 2'
            },
            {
                nome: 'Solic Solic',
                login: 'solic.solic',
                email: 'solicitante@eco',
                perfil: 'Solicitante',
                cargo: 'Cargo 1',
                area: 'Área 2'
            },
            {
                nome: 'Autorz Autorz',
                login: 'autorz.autorz',
                email: 'autorizador@eco',
                perfil: 'Autorizador',
                cargo: 'Cargo 2',
                area: 'Área 2'
            },
            {
                nome: 'Admin Admin',
                login: 'admin.admin',
                email: 'admin@eco',
                perfil: 'Administrador',
                cargo: 'Cargo 1',
                area: 'Área 2'
            },
            {
                nome: 'Solic Solic',
                login: 'solic.solic',
                email: 'solicitante@eco',
                perfil: 'Solicitante',
                cargo: 'Cargo 2',
                area: 'Área 2'
            },
            {
                nome: 'Autorz Autorz',
                login: 'autorz.autorz',
                email: 'autorizador@eco',
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

    let searchAll = false;
    
    if ($("#search-perfil").val() == "") {
        searchAll = true;
    }

    $("#panel-result").show();

    var users = getUsers($("#search-perfil").val(), searchAll);

    users.forEach(user => {
        let btn = document.createElement('button');
        btn.setAttribute('type', 'button');
        btn.setAttribute('class', 'list-group-item');
        btn.setAttribute('onclick', 'mostrarDados("'+ user.nome + '","' + user.login + '","' + user.email + '","' + user.cargo + '","' + user.perfil + '","' + user.area + '")');
        btn.innerText = user.nome;

        document.getElementById('list-result-search').appendChild(btn);
    });
}