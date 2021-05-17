function createEvent(calendar, date) {
    let nomeForm            = $("#create-titulo").val();
    let descricao           = $("#create-descricao").val();
    let dataEvento          = $("#create-data-evento").val();
    let salaSolicitada      = $("#create-sala-solicitada").val();
    let isVideoConferencia  = $("#create-video-conferencia").val();
    let isCoffeeBreak       = $("#create-cofee-break").val();
    let horaInicio          = $("#create-hora-inicio").val();
    let horaFim             = $("#create-hora-fim").val();
    let qtdPessoas          = $("#create-qtd-pessoas").val()
    let usuarioLogado       = getUsuarioLogado();

    
    
    let dateStart = new Date(dataEvento + "T" + horaInicio);    
    
    
    let tempoEstimado = calculaEstimativaTempo(horaInicio, horaFim);
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
            allow: "Aguardando Autorização",
            descricao: descricao,
            salaSolicitada: salaSolicitada,
            videoConferencia: isVideoConferencia,
            coffeeBreak: isCoffeeBreak,
            qtdPessoas: qtdPessoas,
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
    var qtdPessoas          = document.getElementById('show-qtd-pessoas');

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
    qtdPessoas.innerText        = event.extendedProps.qtdPessoas + " pessoas"

    let dataCriacao = new Date(event.extendedProps.dataCriacao)
    dataCriacaoEvento.innerText += dataCriacao.getDate() + "/" + (dataCriacao.getMonth() + 1) + "/" + dataCriacao.getFullYear();

    if (event.extendedProps.allow == "Aguardando Autorização") {
        situacao.innerText = "Aguardando Autorização";
        divSituacao.setAttribute('style', 'background-color: #ffff66')
    } else if (event.extendedProps.allow == "Permitido") {
        situacao.innerText = "Permitido";
        divSituacao.setAttribute('style', 'background-color: #99ff66')
    } else if (event.extendedProps.allow == "Rejeitado") {
        situacao.innerText = "Rejeitado";
        divSituacao.setAttribute('style', 'background-color: #ff6666')
    }
}

function showEditModal(calendar, arg) {
    $("#modal-show-event").modal("hide");
    window.setTimeout(() => {
        var event = arg.event._def;
        let nomeForm            = event.title.split('-')[1];
        let descricaoForm       = event.extendedProps.descricao;
        let dataEvento          = event.extendedProps.dataEvento;
        let tempoEstimadoForm   = event.extendedProps.tempoEstimado;
        let salaSolicitada      = event.extendedProps.salaSolicitada;
        let isVideoConferencia  = event.extendedProps.videoConferencia;
        let isCoffeeBreak       = event.extendedProps.coffeeBreak;
        let horaInicio          = event.extendedProps.horaInicio;
        let horaFim             = event.extendedProps.horaFim;
        let responsavel         = event.extendedProps.responsavelSala;
        let dateStart           = event.extendedProps.dateStart;
        let solicitanteSala     = event.extendedProps.solicitanteSala;
    
        $("#update-titulo").val(nomeForm);
        $("#update-descricao").val(descricaoForm);
        $("#update-data-evento").val(dataEvento);
        $("#update-tempo-estimado").val(tempoEstimadoForm);
        $("#update-sala-solicitada").val(salaSolicitada);
        $("#update-video-conferencia").val(isVideoConferencia);
        $("#update-cofee-break").val(isCoffeeBreak);
        $("#update-hora-inicio").val(horaInicio);
        $("#update-hora-fim").val(horaFim);
        $("#update-solicitante-sala").val(solicitanteSala);
    
        $("#modal-update-event").modal('show');

    }, 300);

    $("#button-update-event").on('click', function() {
        editarEvento(calendar, arg);
        $("#modal-update-event").modal('hide');
    });
}

function editarEvento(calendar, arg) {
    let nomeForm            = $("#update-titulo").val();
    let descricaoForm       = $("#update-descricao").val();
    let dataEvento          = $("#update-data-evento").val();
    let tempoEstimadoForm   = $("#update-tempo-estimado").val();
    let salaSolicitada      = $("#update-sala-solicitada").val();
    let isVideoConferencia  = $("#update-video-conferencia").val();
    let isCoffeeBreak       = $("#update-cofee-break").val();
    let horaInicio          = $("#update-hora-inicio").val();
    let horaFim             = $("#update-hora-fim").val();
    let responsavel         = $("#update-responsavel-sala").val();
    let solicitante         = $("#update-solicitante-sala").val();
    let dateStart           = new Date(dataEvento + "T" + horaInicio);

    arg.event.setProp('title',"-" + nomeForm);
    arg.event.setStart(dateStart);
    arg.event.setExtendedProp('descricao', descricaoForm);
    arg.event.setExtendedProp('salaSolicitada', salaSolicitada);
    arg.event.setExtendedProp('videoConferencia', isVideoConferencia);
    arg.event.setExtendedProp('coffeeBreak', isCoffeeBreak);
    arg.event.setExtendedProp('responsavelSala', responsavel);
    arg.event.setExtendedProp('horaInicio', horaInicio);
    arg.event.setExtendedProp('horaFim', horaFim);
    arg.event.setExtendedProp('dataEvento', dataEvento);
    arg.event.setExtendedProp('dateStart', dateStart);
    arg.event.setExtendedProp('tempoEstimado', tempoEstimadoForm);
    arg.event.setExtendedProp('solicitanteSala', solicitante);
    arg.event.setExtendedProp('coffeeBreak', isCoffeeBreak);
}

function getUsuarioLogado() {
    return {
        nome: "Ighor Brito",
        cargo: 'Estagiário',
        area: 'SER 2',
        perfil: "Solicitante"
    }
}

function calculaEstimativaTempo(horaInicio, horaFim) {
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

    minuto = Math.round(parseFloat(minuto) * 60);

    if (hora == 0) {
        return minuto + ' minutos';
    } else {
        return hora + "h:" + minuto + 'min';
    }
}

$(function() {
    function adicionaZero(numero){
        if (numero <= 9) 
            return "0" + numero;
        else
            return numero; 
    }


    $("#create-data-evento").change(function() {
        let hoje = new Date();
        let dataEvento = $("#create-data-evento").val();
        dataEvento = dataEvento.split('-');
        
        dataEvento = dataEvento.map(function(i) {
            return parseInt(i);
        });
      
        if (dataEvento[2] < hoje.getDate() && dataEvento[1] <= (hoje.getMonth() + 1) && dataEvento[0] <= hoje.getFullYear()) {
            window.alert("Data inválida");
            $("#create-data-evento").val(adicionaZero(hoje.getFullYear()) + "-" + adicionaZero((hoje.getMonth() + 1)) + "-" + adicionaZero(hoje.getDate()));
        }

    })
})