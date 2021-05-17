function edit(nome, descricao, capacidade, recursos, restrito, cargos) {
    $("#modal-editar-sala").modal('show');

    $("#edit-nome").val(nome);
    $("#edit-descricao").val(descricao);
    $("#edit-capacidade").val(capacidade);
    $('.recursos').each(function() {
        this.checked = false;
    });

    if (recursos != "") {
        recursos = recursos.split(',');
        $('.recursos').each(function() {
            for (let i = 0; i < recursos.length; i++) {
                if (this.value == recursos[i]) {
                    this.checked = true;
                }
            }
        });
    }
    
    if(restrito == 'true') {
        $("#div-cargos-edit").show();
        $("#restrito-sala-sim-edit").prop('checked', true);
        cargos = cargos.split(',');
        $(".cargos").each(function() {
            for (let i = 0; i < cargos.length; i++) {
                if (this.value == cargos[i]) {
                    this.checked = true;
                }
            }
        });
    }
    else {
        $("#restrito-sala-nao-edit").prop('checked', true);
        $("#div-cargos-edit").hide();
        $(".cargos").each(function() {
            this.checked = false;
        });
    }

    $("#restrito-sala-sim-edit").on('click', function() {
        $("#div-cargos-edit").show();
    })

    $("#restrito-sala-nao-edit").on('click', function() {      
        $("#div-cargos-edit").hide();

        $(".cargos").each(function() {
            this.checked = false;
        });        
    })

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