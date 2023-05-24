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
$(".datepicker").datepicker({
appendText: 
' <br/>Haga click para introducir una fecha<br>'+
'Para cambiar de mes, clic en los extremos superiores del calendario'
});
});
$( "#f_ida" ).datepicker({ minDate: 1, maxDate: "+1M", regional: "es",  
onSelect: function(selectedDate) {var fechab = $(this).datepicker("getDate");
fechab.setDate(fechab.getDate() + 1);
$( "#f_vuelta" ).datepicker("option", "minDate", fechab);} });
$( "#f_vuelta" ).datepicker({ minDate: 1, maxDate: "+1Y", regional: "es" });

function datos(){
    let nombre= document.getElementById("name").value;
    let apellidos= document.getElementById("surname").value;
    let email= document.getElementById("email").value;
    let dni = document.getElementById("dni").value;

    if(nombre==""){
        document.getElementById("resumen").innerHTML=""
    }
    else{
        document.getElementById("resumen").innerHTML="Nombre: " + nombre;
    }

    if(apellidos==""){
        document.getElementById("resumen").innerHTML="";
    }
    else{
        document.getElementById("resumen").innerHTML="Nombre: "+apellidos;
    }

    if(email==""){
        document.getElementById("resumen").innerHTML="";
    }
    else{
        document.getElementById("resumen").innerHTML="Email: "+email;
    }

    if(dni==""){
        document.getElementById("resumen").innerHTML="";
    }
    else{
        document.getElementById("resumen").innerHTML="DNI: "+dni;
    }

}
