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
$( "#f_entrada" ).datepicker({ minDate: 1, maxDate: "+1Y", regional: "es",  
onSelect: function(selectedDate) {var fechab = $(this).datepicker("getDate");
fechab.setDate(fechab.getDate() + 1);
$( "#f_salida" ).datepicker("option", "minDate", fechab);} });
$( "#f_salida" ).datepicker({ minDate: 1, maxDate: "+1Y", regional: "es" });

$("#calculo").click(function(e){
    e.preventDefault();
            let i = $("#num_individuales").val();
            let d = $("#num_dobles").val();
            let t = $("#num_triples").val();
            let desde = $("#f_entrada").datepicker('getDate');
            let hasta = $("#f_salida").datepicker('getDate');
            let difer = hasta - desde;
            let dias = difer/1000/60/60/24;
            let precio = dias*i*25+dias*d*45+dias*t*80;
            if (precio<0 || difer<0){
                $("#totalDias").html("Total días: 0");
                $("#totalPrecio").html("Precio: 0 €");
            }
            else{
                $("#totalDias").html("Total días: " + dias);
                $("#totalPrecio").html("Precio: " + precio + " €");
            }

});
});