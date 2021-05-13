function edit(nome, descricao) {
    $("#modal-editar-area").modal('show');

    $("#edit-area-nome").val(nome);
    document.getElementById('edit-descricao').innerText = descricao;

    $("#button-editar-area").on('click', function() {
        alert("Área alterada com sucesso");
        $("#modal-editar-area").modal('hide');
    });

    $("#delete-event-img").on('click', function() {
        $("#modal-delete-area").modal('show');
        $("#button-delete-area").on('click', function() {
            $("#modal-delete-area").modal('hide');
            $("#modal-editar-area").modal('hide');
            alert("Área apagada");
        })
    });
}