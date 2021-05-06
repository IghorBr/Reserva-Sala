function edit(nome, cargo, perfil, area) {
    $("#modal-editar-usuario").modal('show');

    document.getElementById('edit-nome').innerText = nome;
    $("#edit-cargo").val(cargo);
    $("#edit-perfil").val(perfil);
    $("#edit-area").val(area);

    $("#button-editar-usuario").on('click', function() {
        alert("Usuário alterado com sucesso");
        $("#modal-editar-usuario").modal('hide');
    });

    $("#delete-event-img").on('click', function() {
        $("#modal-delete-user").modal('show');
        $("#button-delete-user").on('click', function() {
            $("#modal-delete-user").modal('hide');
            $("#modal-editar-usuario").modal('hide');
            alert("Usuário deletado");
        })
    });
}