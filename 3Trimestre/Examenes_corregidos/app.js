function localizador() {
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';

    for (let i = 0; i < 12; i++) {
        result += letras.charAt(Math.floor(Math.random() * letras.length));
    }
    return result;
}

$(document).ready(function () {
    $.datepicker.regional['es'] = {
        closeText: 'Cerrar',
        prevText: '< Ant',
        nextText: 'Sig >',
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
    $('#vuelta').prop('disabled', true);
    $('#idayvuelta').change(function () {
        if (this.checked) {
            $('#vuelta').val("");
            $('#vuelta').prop('disabled', false);
        } else {
            $('#vuelta').prop('disabled', true);
        }
    });
    $('#ida').datepicker({
        minDate: '+1D',
        maxDate: '+1M',
        dateFormat: 'dd-mm-yy',
        onClose: function (selectedDate) {
            if (!$('#idayvuelta').prop('checked')) {
                $('#vuelta').datepicker("option", "minDate", selectedDate);
            }
        }
    });
    $('#vuelta').datepicker({
        dateFormat: 'dd-mm-yy'
    });
    $('#reservation-form').submit(function (e) {
        e.preventDefault();
        let fVuelta = $('#vuelta').val();
        let vuelta = "";
        if (fVuelta!='' && $('#idayvuelta').prop('checked'))
            vuelta = 'Fecha de Vuelta: ' + fVuelta + '<br>';
        else
            vuelta = '';
        let resumen = 'Nombre: ' + $('#name').val() + '<br>' +
                      'Apellidos: ' + $('#surname').val() + '<br>' +
                      'Email: ' + $('#email').val() + '<br>' +
                      'DNI: ' + $('#dni').val() + '<br>' +
                      'Fecha de Ida: ' + $('#ida').val() + '<br>' +
                      vuelta +
                      'Localizador: ' + localizador();
                      (!$('#idayvuelta').prop('checked') ? 'Fecha de Vuelta: ' + $('#vuelta').val() : '');
        $('#resumen').html(resumen);
        $('#qrcode').html('<img src=\"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+resumen+'\"/>');      
    });
});
