$( function() {
    $( "input" ).checkboxradio();
    } );


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
$(document).ready(function() {
});
$( "#fecha" ).datepicker({ minDate: 1, maxDate: "+2W",beforeShowDay: $.datepicker.noWeekends, regional: "es",  
onSelect: function(selectedDate) {var fechab = $(this).datepicker("getDate");
fechab.setDate(fechab.getDate() + 1);
}
});


$("#reserva").click(function(e){
    e.preventDefault();
    let fecha = $("#fecha").val();
    let hora = $("#hora").val();
    let numportatiles = 0;
    if(fecha==""){
        alert("¡Error! Debe seleccionar una fecha de reserva");
        $("#diaReserva").html("");
    }
    else
    {
        $("#diaReserva").html("Reserva el "+fecha+" de "+hora);
        $("#totalPortatiles").html();

    }
})

