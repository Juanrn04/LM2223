$(document).ready(function () {
    $('#buscar').click(function () {
        let foto = $('#nombre').val();
        let apiKey = '208b0b3e0b3ca5b13bdaf68c455469ad'; // Reemplaza esto con tu propia API key

        // Llamada AJAX utilizando jQuery
        $.ajax({
            url: "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key="+apiKey+"&text="+foto+"&format=json&nojsoncallback=1",
            success: function (data) {
                $('#resultado').html(`
            <img src="https://farm${data.photos.photo[0].farm}.staticflickr.com/${data.photos.photo[0].server}/${data.photos.photo[0].id}_${data.photos.photo[0].secret}.jpg" >
                `);
            },
            fail: function() {
                $('#resultado').html('<p>No se pudo obtener la imagen desada</p>');
            },
            error: function () {
                $('#resultado').html('<p>Error al buscar la imagen</p>');
            },
        });
    });
});