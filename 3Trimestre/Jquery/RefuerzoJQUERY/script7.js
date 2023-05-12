$(document).ready(function () {
    $('#buscar').click(function () {
        let foto = $('#nombre').val();
        let apiKey = 'fsCDTo96q10hGjfkkolLmvKVoRT2N0qo'; // Reemplaza esto con tu propia API key

        // Llamada AJAX utilizando jQuery
        $.ajax({
            url: "https://api.giphy.com/v1/gifs/search?api_key="+apiKey+"&q="+foto,
            success: function (data) {
                $('#resultado').html(`
                <img src="${data.data[0].images.original.url}">
                `);
            },
            fail: function(){
                $('#resultado').html('<p>No se pudo encontrar el gif desado</p>');
            },
            error: function () {
                $('#resultado').html('<p>No se pudo obtener el gif desado</p>');
            },
        });
    });
});