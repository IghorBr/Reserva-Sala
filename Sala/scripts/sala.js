$(document).ready(function() {
    $("#panel-result").hide();
    $("#div-cargos-create").hide();
});


function search() {

    document.getElementById('list-result-search').innerHTML = "";

    function getUsers(valor, searchAll) {
        var users = [
            {
                nome: 'Inconfidencia',
                descricao: '3 andar',
                restrito: '1',
                cargos: [
                    1,
                    2
                ]
            },
            {
                nome: 'Ouro Preto',
                descricao: '3 andar',
                restrito: '0'
            },
            {
                nome: 'Tiradentes',
                descricao: '3 andar',
                restrito: '0'
            },
            {
                nome: 'Vila Rica',
                descricao: '3 andar',
                restrito: '0'
            },
            {
                nome: 'Sala da Diretoria',
                descricao: '9 andar',
                restrito: '0'
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
        btn.setAttribute('onclick', 'mostrarDados("'+ user.nome + '","' + user.descricao + '", "' + user.restrito + '","' + user.cargos +'")');
        btn.innerText = user.nome;

        document.getElementById('list-result-search').appendChild(btn);
    });
}

$(function() {
    $("#adicionar-sala").on('click', function() {
        $("#modal-create-sala").modal('show');

        $("#button-create-sala").on('click', function() {
            alert('Sala criada');
            $("modal-create-sala").modal('hide');
        })
    }) 
})

$(function() {
    $("#restrito-sala-sim-create").on('click', function() {
        $("#div-cargos-create").show();
    })

    $("#restrito-sala-nao-create").on('click', function() {
        $("#div-cargos-create").hide();
        $(".cargos-create").each(function() {
            this.checked = false;
        }); 
    })
    
});