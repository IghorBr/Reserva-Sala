function edit(nome, descricao) {
    $("#modal-editar-area").modal('show');

    document.getElementById('edit-nome').innerText = nome;
    document.getElementById('edit-descricao').innerText = descricao;
    $("#edit-descricao").val(descricao);

    $("#button-editar-area").on('click', function() {
        alert("Usuário alterado com sucesso");
        $("#modal-editar-area").modal('hide');
    });

    $("#delete-event-img").on('click', function() {
        $("#modal-delete-area").modal('show');
        $("#button-delete-area").on('click', function() {
            $("#modal-delete-area").modal('hide');
            $("#modal-editar-area").modal('hide');
            alert("Usuário deletado");
        })
    });
}