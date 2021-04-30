function createEvent(calendar, date) {
    let nomeForm            = $("#create-titulo").val();
    let descricao           = $("#create-descricao").val();
    let dataEvento          = $("#create-data-evento").val();
    let salaSolicitada      = $("#create-sala-solicitada").val();
    let isVideoConferencia  = $("#create-video-conferencia").val();
    let isCoffeeBreak       = $("#create-cofee-break").val();
    let horaInicio          = $("#create-hora-inicio").val();
    let horaFim             = $("#create-hora-fim").val();

    let dateStart = new Date(dataEvento + "T" + horaInicio);
    let usuarioLogado = getUsuario();
    let allow;

    let tempoEstimado = calculaTempoEstimado(horaInicio, horaFim);
    if (tempoEstimado == false) {
        alert("Horas inseridas inválidas");
        return false;
    }

    if (usuarioLogado.perfil == "Autorizador") {
        allow = "Autorizado"
    }
    

    let event = {
        id: 3,
        title: "-" + nomeForm,
        start: dateStart,
        backgroundColor: 'yellow',
        displayEventTime: true,
        allday: false,
        extendedProps: {
            allow: allow,
            descricao: descricao,
            salaSolicitada: salaSolicitada,
            videoConferencia: isVideoConferencia,
            coffeeBreak: isCoffeeBreak,
            horaInicio: horaInicio,
            horaFim: horaFim,
            dataEvento: dataEvento,
            dateStart: dateStart,
            tempoEstimado: tempoEstimado,
            dataCriacao: date,
            usuario: usuarioLogado
        }
    };

    calendar.addEvent(event);
}

function showEvent(arg) {
    var event = arg.event._def;
    var nome                = document.getElementById("show-titulo");
    var descricao           = document.getElementById("show-descricao");
    var data                = document.getElementById("show-data");
    var sala                = document.getElementById("show-sala-solicitada");
    var horaInicio          = document.getElementById("show-hora-inicio");
    var horaFim             = document.getElementById("show-hora-fim");
    var situacao            = document.getElementById("show-situacao");
    var solicitanteSala     = document.getElementById('show-solicitante-sala');
    var tempoEstimado       = document.getElementById('show-tempo-estimado');
    var coffeeBreak         = document.getElementById('show-coffee-break');
    var videoConferencia    = document.getElementById('show-video-conferencia');
    var dataCriacaoEvento   = document.getElementById('show-data-criacao');
    var cargo               = document.getElementById('show-cargo-solicitante');
    var area                = document.getElementById('show-area-solicitante');
    var usuarioLogado       = getUsuario();

    var divSituacao = document.getElementById('situacao-color');
    
    nome.innerText              = event.title != undefined ? event.title.split('-')[1] : "";
    data.innerText              = event.extendedProps.dataEvento != undefined ? new Date(event.extendedProps.dataEvento).toLocaleDateString('pt-BR', {timeZone: 'UTC'}) : "";
    descricao.innerText         = event.extendedProps.descricao != undefined ? event.extendedProps.descricao : "";
    horaInicio.innerText        = event.extendedProps.horaInicio != undefined ? event.extendedProps.horaInicio : "";
    horaFim.innerText           = event.extendedProps.horaFim != undefined ? event.extendedProps.horaFim : "";
    sala.innerText              = event.extendedProps.salaSolicitada != undefined ? event.extendedProps.salaSolicitada : "";
    solicitanteSala.innerText   = event.extendedProps.usuario.nome != undefined ? event.extendedProps.usuario.nome : "";
    tempoEstimado.innerText     = event.extendedProps.tempoEstimado != undefined ? event.extendedProps.tempoEstimado : "";
    coffeeBreak.innerText       = event.extendedProps.coffeeBreak != undefined ? event.extendedProps.coffeeBreak : "";
    videoConferencia.innerText  = event.extendedProps.videoConferencia != undefined ? event.extendedProps.videoConferencia : "";

    cargo.innerText             = event.extendedProps.usuario.cargo;
    area.innerText              = event.extendedProps.usuario.area;

    let dataCriacao = new Date(event.extendedProps.dataCriacao)
    dataCriacaoEvento.innerText = "Criado em: " + dataCriacao.getDate() + "/" + (dataCriacao.getMonth() + 1) + "/" + dataCriacao.getFullYear()


    if (event.extendedProps.allow == "Aguardando Autorização") {
        situacao.innerText = "Aguardando Autorização";
        divSituacao.setAttribute('style', 'background-color: #ffff66')
    } 
    else if (event.extendedProps.allow == "Autorizado") {
        situacao.innerText = "Autorizado";
        divSituacao.setAttribute('style', 'background-color: #99ff66');

        let divResponsavel = document.createElement('b');
        divResponsavel.innerText = "Responsavel";
        document.getElementById('show-content-right').appendChild(divResponsavel);


        let paragraphResponsavel = document.createElement('p');
        paragraphResponsavel.setAttribute('class', 'lead');
        paragraphResponsavel.innerText = getUsuario().nome;
        divResponsavel.appendChild(paragraphResponsavel);

        hideButtons();
    } 
    else if (event.extendedProps.allow == "Rejeitado") {
        situacao.innerText = "Rejeitado";
        divSituacao.setAttribute('style', 'background-color: #ff6666');

        var divRejeicao = document.createElement('b');
        divRejeicao.innerText = "Motivo Rejeição:";
        document.getElementById('show-content-left').appendChild(divRejeicao);

        var divP = document.createElement('p');
        divP.setAttribute('class', 'lead');
        divP.innerText = event.extendedProps.motivoRejeicao;
        divRejeicao.appendChild(divP);

        let divResponsavel = document.createElement('b');
        divResponsavel.innerText = "Responsavel";
        document.getElementById('show-content-right').appendChild(divResponsavel);


        let paragraphResponsavel = document.createElement('p');
        paragraphResponsavel.setAttribute('class', 'lead');
        paragraphResponsavel.innerText = getUsuario().nome;
        divResponsavel.appendChild(paragraphResponsavel);

        hideButtons();
    }
}

function acceptEvent(calendar, arg) {

    $("#modal-accept-event").modal('show');

    $("#button-accept-evento").on('click', function() {
        let event = calendar.getEventById(arg.event.id);

        if (event._def.extendedProps.allow === "Aguardando Autorização")  {
            event.setExtendedProp('allow', 'Autorizado');
            event.setProp('backgroundColor', 'green');
        }
        
        $("#modal-accept-event").modal('hide');
        $("#modal-show-event").modal('hide');
        
    });
}

function rejectEvent(calendar, arg) {
    $("#modal-reject-event").modal('show');
    
    
    $("#button-reject-evento").on('click', function() {
        var motivoRejeicao = $("#select-motivo-rejeicao").val();
        
        if ($("#select-motivo-rejeicao").val() == "") {
            alert("Selecione o motivo da rejeicao");
            return false;
        }
        let event = calendar.getEventById(arg.event.id);
        if (event._def.extendedProps.allow === "Aguardando Autorização")  {
            event.setExtendedProp('allow', 'Rejeitado');
            event.setExtendedProp('motivoRejeicao', motivoRejeicao);
            event.setProp('backgroundColor', 'red');
        }
        
        $("#modal-reject-event").modal('hide');
        $("#modal-show-event").modal('hide');
    });
}

function hideButtons() {
    $("#button-reject").hide();
    $("#button-accept").hide();
}

function getUsuario() {
    return {
        nome: 'Admin Admin',
        cargo: 'Desenvolvedor',
        area: 'SER 2',
        perfil: 'Autorizador'
    }
}

function calculaTempoEstimado(horaInicio, horaFim) {

    var horaInicioInt, minutoInicioInt, horaFimInt, minutoFimInt,
    horaInicioMin, horaFimMin, tempoEstimado;
    horaInicioInt = parseInt(horaInicio.substr(0, 2));
    minutoInicioInt = parseInt(horaInicio.substr(3, 4));

    horaFimInt = parseInt(horaFim.substr(0, 2));
    minutoFimInt = parseInt(horaFim.substr(3, 4));

    horaInicioMin   = (horaInicioInt * 60) + minutoInicioInt;
    horaFimMin      = (horaFimInt * 60) + minutoFimInt;

    if (horaInicioMin >= horaFimMin) {
        return false;
    }

    tempoEstimado = parseFloat((horaFimMin - horaInicioMin) / 60);
    tempoEstimado = tempoEstimado.toString();
    
    tempoEstimado = tempoEstimado.split('.');

    let hora = parseInt(tempoEstimado[0]);
    let minuto = "0." + tempoEstimado[1];

    minuto = parseFloat(minuto) * 60;

    if (hora == 0) {
        return minuto + ' minutos';
    } else {
        return hora + "h:" + minuto + 'min';
    }
}