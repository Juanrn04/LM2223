$(document).ready(function () {
    $('#buscar').click(function () {
        let usuario = $('#usuario').val();
        
  

        // Llamada AJAX utilizando jQuery
        $.ajax({
            url: 'https://api.github.com/users/'+usuario,
            success: function (data) {
                console.log(data);
                $('#resultado').html(`
                    <h2>${data.login}</h2>
                    <img width="50" src="${data.avatar_url}">
                    <p>${data.type}</p>
                    `);         
            },
            fail: function (){
                $('#resultado').html('<p>No se encontró el usuario.</p>');
            },
            error: function () {
                $('#resultado').html('<p>Error al buscar el usuario.</p>');
            },
        });
    });
});