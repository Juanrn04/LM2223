/* Ponemos los selectores de fecha en español */
$.datepicker.regional['es'] = {
    closeText: 'Cerrar',
    prevText: '<Ant',
    nextText: 'Sig>',
    currentText: 'Hoy',
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
    dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
    weekHeader: 'Sm',
    dateFormat: 'dd/mm/yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
};
$.datepicker.setDefaults($.datepicker.regional['es']);
$(document).ready(function () {
$("#fecha").datepicker({ minDate: 1, maxDate: "+1W"});
$("#reserva").click(function (e) { 
    e.preventDefault();
    $("#totalPrecio").html("Precio: 0€");
    let hora = $("#hora").val();
    let luz = $("#luz").val();
    let total = 0;
    switch (hora)
    {
        case "1":
        case "2":
        case "3":
        case "4":
            total = 10;
            break;
        case "5":
        case "6":
            total = 12;
            break;
        case "7":
        case "8":
        case "9":
            total = 16;
            break;
    }
    $("#diaReserva").html("Reserva el "+$("#fecha").val() + " la pista " + $("#pista").val());
    if ($('#luz').is(':checked')){
        total += 4 ;
        $("#totalPrecio").html("Precio: " + total + "€ luz incluida");
    }
    else
    {
        $("#totalPrecio").html("Precio: " + total + "€ sin luz");
    }
});
});