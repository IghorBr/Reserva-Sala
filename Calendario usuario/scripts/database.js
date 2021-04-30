function getEvent(position){
    var date = new Date();
    
    var eventList = [
        {
            id: 1,
            title: "-" + "Tarefa Teste",
            start: new Date('Wed Apr 30 2021 10:00:00 GMT-0300 (GMT-03:00'),
            backgroundColor: 'yellow',
            displayEventTime: true,
            textColor: 'black',
            allday: false,
            extendedProps: {
                allow: "Aguardando Autorização",
                descricao: "Tarefa de Teste",
                salaSolicitada: "SALA 1",
                videoConferencia: "Sim",
                coffeeBreak: "Sim",
                responsavelSala: "Responsavel 1",
                horaInicio: '10:00',
                horaFim: '11:30',
                tempoEstimado: calculaTempoEstimado('10:00', '11:30'),
                dataEvento: '2021-04-30',
                dateStart: new Date('Wed Apr 21 2021 10:00:00 GMT-0300 (GMT-03:00'),
                dataCriacao: date,
                usuario: {
                        nome: 'Ighor Brito',
                        cargo: 'Estagiário',
                        area: 'SER 2'
                }
            }
        },
        {
            id: 2,
            title: "-" + "Tarefa do outro usuario",
            start: new Date('Wed Apr 30 2021 10:00:00 GMT-0300 (GMT-03:00'),
            backgroundColor: 'yellow',
            displayEventTime: true,
            textColor: 'black',
            allday: false,
            extendedProps: {
                allow: "Aguardando Autorização",
                descricao: "Tarefa de Teste",
                salaSolicitada: "SALA 1",
                videoConferencia: "Sim",
                coffeeBreak: "Sim",
                responsavelSala: "Responsavel 1",
                horaInicio: '10:00',
                horaFim: '10:30',
                tempoEstimado: calculaTempoEstimado('10:00', '10:30'),
                dataEvento: '2021-04-30',
                dateStart: new Date('Wed Apr 21 2021 10:00:00 GMT-0300 (GMT-03:00'),
                dataCriacao: date,
                usuario:  {
                    nome: 'Usuario Usuario',
                    cargo: 'Desenvolvimento',
                    area: 'SER2'
                }
            }
        }
    ]

    return eventList[position];
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