function edit(nome, descricao) {
    $("#modal-editar-sala").modal('show');

    document.getElementById('edit-nome').innerText = nome;
    document.getElementById('edit-descricao').innerText = descricao;
    $("#edit-descricao").val(descricao);

    $("#button-editar-sala").on('click', function() {
        alert("Usuário alterado com sucesso");
        $("#modal-editar-sala").modal('hide');
    });

    $("#delete-event-img").on('click', function() {
        $("#modal-delete-sala").modal('show');
        $("#button-delete-sala").on('click', function() {
            $("#modal-delete-sala").modal('hide');
            $("#modal-editar-sala").modal('hide');
            alert("Usuário deletado");
        })
    });
}