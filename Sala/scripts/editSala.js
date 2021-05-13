function edit(nome, descricao, restrito, cargos) {
    $("#modal-editar-sala").modal('show');

    $("#edit-nome").val(nome);
    $("#edit-descricao").val(descricao);
    
    if(restrito == '1') {
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

        $(".editar").each(function() {
            this.setAttribute('class', 'editar from-group col-md-3')
        });
    }
    else {
        $("#restrito-sala-nao-edit").prop('checked', true);
        $("#div-cargos-edit").hide();

        $(".editar").each(function() {
            this.setAttribute('class', 'editar from-group col-md-4')
        })

        $(".cargos").each(function() {
            this.checked = false;
        });
    }

    $("#restrito-sala-sim-edit").on('click', function() {
        $(".editar").each(function() {
            this.setAttribute('class', 'editar from-group col-md-3')
        })

        $("#div-cargos-edit").show();
    })

    $("#restrito-sala-nao-edit").on('click', function() {
        $(".editar").each(function() {
            this.setAttribute('class', 'editar from-group col-md-4')
        });
        
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