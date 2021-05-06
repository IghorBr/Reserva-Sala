function edit(nome, descricao) {
    $("#modal-editar-cargo").modal('show');

    document.getElementById('edit-nome').innerText = nome;
    document.getElementById('edit-descricao').innerText = descricao;
    $("#edit-descricao").val(descricao);

    $("#button-editar-cargo").on('click', function() {
        alert("Usuário alterado com sucesso");
        $("#modal-editar-cargo").modal('hide');
    });

    $("#delete-event-img").on('click', function() {
        $("#modal-delete-cargo").modal('show');
        $("#button-delete-cargo").on('click', function() {
            $("#modal-delete-cargo").modal('hide');
            $("#modal-editar-cargo").modal('hide');
            alert("Usuário deletado");
        })
    });
}