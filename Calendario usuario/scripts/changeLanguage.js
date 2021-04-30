/**
 * Altera o idioma dos botões ao carregar a pagina
 */

$(document).ready(function() {
    document.getElementsByClassName('fc-dayGridMonth-button fc-button fc-button-primary ' + 
        'fc-button')[0].innerText = 'Mês';

    document.getElementsByClassName('fc-timeGridWeek-button fc-button fc-button-primary')[0].innerText = 'Semana';
    document.getElementsByClassName('fc-timeGridDay-button fc-button fc-button-primary')[0].innerText = 'Dia';
    document.getElementsByClassName('fc-listMonth-button fc-button fc-button-primary')[0].innerText = 'Lista';
    document.getElementsByClassName('fc-today-button fc-button fc-button-primary')[0].innerText = 'Hoje';

});

/**
 * Altera o idioma ao se clicar em um botao
 */

$(function() {

    //Esses são os botoes do cabeçalho

    $("button[type='button']")
    .on('click', function() {
        document.getElementsByClassName('fc-dayGridMonth-button fc-button fc-button-primary ' + 
            'fc-button')[0].innerText = 'Mês';

        document.getElementsByClassName('fc-timeGridWeek-button fc-button fc-button-primary')[0].innerText = 'Semana';
        document.getElementsByClassName('fc-timeGridDay-button fc-button fc-button-primary')[0].innerText = 'Dia';
        document.getElementsByClassName('fc-listMonth-button fc-button fc-button-primary')[0].innerText = 'Lista';
        document.getElementsByClassName('fc-today-button fc-button fc-button-primary')[0].innerText = 'Hoje';
    });


    //Esses são os botões (numeros da datas) do calendário
    $(".fc-daygrid-day-number")
    .on('click', function() {
        window.setTimeout(() => {
            let mesM = document.getElementsByClassName('fc-dayGridMonth-button fc-button fc-button-primary fc-button')[0].innerText;
            mesM = mesM.substr(0, 3);
            document.getElementsByClassName('fc-dayGridMonth-button fc-button fc-button-primary fc-button')[0].innerText = mesM;

            let semanaS = document.getElementsByClassName('fc-timeGridWeek-button fc-button fc-button-primary')[0].innerText;
            semanaS = semanaS.substr(0, 6);
            document.getElementsByClassName('fc-timeGridWeek-button fc-button fc-button-primary')[0].innerText = semanaS;

            let dia = document.getElementsByClassName('fc-timeGridDay-button fc-button fc-button-primary')[0].innerText;
            dia = dia.substr(0, 3);
            document.getElementsByClassName('fc-timeGridDay-button fc-button fc-button-primary')[0].innerText = dia

            let lista = document.getElementsByClassName('fc-listMonth-button fc-button fc-button-primary')[0].innerText;
            lista = lista.substr(0, 5);
            document.getElementsByClassName('fc-listMonth-button fc-button fc-button-primary')[0].innerText = lista;

            let hoje = document.getElementsByClassName('fc-today-button fc-button fc-button-primary')[0].innerText;
            hoje = hoje.substr(0, 4);
            document.getElementsByClassName('fc-today-button fc-button fc-button-primary')[0].innerText = hoje;
        }, 100);
    })
});
