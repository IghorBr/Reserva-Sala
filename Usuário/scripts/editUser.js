function edit(nome, login, email, cargo, perfil, area) {
    $("#modal-editar-usuario").modal('show');

    document.getElementById('edit-nome').innerText = nome;
    document.getElementById('edit-login').innerText = login;
    document.getElementById('edit-email').innerText = email;

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