$(document).ready(function () {
    $("#btn-todos").click(function (e) {
        $.get("https://fakestoreapi.com/products").done(function (r) {
            console.log(r);
            let num_productos = r.length;
            $("#resultados").empty();
            for (let i = 0; i < num_productos; i++) {
                let titulo = r[i].title;
                let precio = r[i].price;
                let imagen = r[i].image;
                let descripcion = r[i].description;                
                $('#resultados').append(
                    '<p>' + '<img width="120" src="' + imagen + '"></p>' +
                    '<p>Título: ' + titulo + '</p>' +
                    '<p>Descripción: ' + descripcion + '</p>' +
                    '<p>Precio: ' + precio + '€</p>');
            }
        }).fail( function (){
            alert("Error cargando datos del servidor");
            }
        );
    });
    $("#btn-producto").click(function () {
        let codigo = $("#codProducto").val();
        $.get("https://fakestoreapi.com/products/" + codigo).done(function (respuesta) {
            console.log(respuesta);
            let titulo = respuesta.title;
            let precio = respuesta.price;
            let imagen = respuesta.image;
            let descripcion = respuesta.description;
            $("#resultados").empty();
            $('#resultados').append(
                '<p>' + '<img width="120" src="' + imagen + '"></p>' +
                '<p>Título: ' + titulo + '</p>' +
                '<p>Descripción: ' + descripcion + '€</p>' +
                '<p>Precio: ' + precio + '€</p>');
        }).fail(function (respuesta) {
            alert("Error cargando datos del servidor");
        });
    })
});