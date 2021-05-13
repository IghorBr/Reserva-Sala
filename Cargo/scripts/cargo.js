$(document).ready(function() {
    $("#panel-result").hide();
});


function search() {

    document.getElementById('list-result-search').innerHTML = "";

    function getUsers(valor, searchAll) {
        var users = [
            {
                nome: 'Inconfidencia',
                descricao: '3 andar'
            },
            {
                nome: 'Ouro Preto',
                descricao: '3 andar'
            },
            {
                nome: 'Tiradentes',
                descricao: '3 andar'
            },
            {
                nome: 'Vila Rica',
                descricao: '3 andar'
            },
            {
                nome: 'Sala da Diretoria',
                descricao: '9 andar'
            }
        ];

        if (searchAll) {
            return users;
        }

        var searchedUsers = [];

        users.forEach(user => {
            if (user.nome == valor) {
                searchedUsers.push(user);
            }
        });

        return searchedUsers;
    }

    let searchAll = false;
    
    if ($("#search-nome").val() == "") {
        searchAll = true;
    }

    $("#panel-result").show();

    var users = getUsers($("#search-nome").val(), searchAll);

    users.forEach(user => {
        let btn = document.createElement('button');
        btn.setAttribute('type', 'button');
        btn.setAttribute('class', 'list-group-item');
        btn.setAttribute('onclick', 'mostrarDados("'+ user.nome + '","' + user.descricao + '")');
        btn.innerText = user.nome;

        document.getElementById('list-result-search').appendChild(btn);
    });
}

$(function() {
    $("#adicionar-cargo").on('click', function() {
        $("#modal-create-cargo").modal('show');

        $("#button-create-cargo").on('click', function() {
            alert('Cargo criado');
            $("modal-create-cargo").modal('hide');
        });
    }); 
});

$(function() {
    $("#logo").on('click', function() {
        alert("Voltou para a tela inicial");
    });

    $("#voltar-tela-inicial").on('click', function() {
        alert("Voltou para a tela inicial");
    });
})