/* $(document).ready(function (){
    $("#btn-producto").click(function(){
        let libro = $("#codProducto").val();
        $.ajax({
            url : "https://fakestoreapi.com/products/" + libro,
            dataType:"Json",
            succes: function(data){
                console.log(data);
            }
        })
    })
})*/

$(document).ready(function () {
    $("#btn-producto").click(function () {
        let libro = $("#codProducto").val();

        $.ajax({
            url: "https://fakestoreapi.com/products/"+libro,
            success: function (data) {
                console.log(data);
                $("#resultados").html(`
                <p>${data.title} </p>
                <img height="150px" src="${data.image}" >
                <p>Precio: ${data.price}€<p>
                <p>${data.description}</p>
                `);
            },
            fail: function(){
                $("#resultados").html("<p>No se encontró el libro.</p>");
            },
            error: function(){
                $("#resultados").html("<p>Error al buscar el libro</p>");
            },
        });
    });

    $("#btn-todos").click(function () {
        $.ajax({
            url: "https://fakestoreapi.com/products/",
            success: function (data) {
                console.log(data);
                let num_productos = data.length;
                $("#resultados").empty();
                for (let i = 0; i < num_productos; i++) {
                $("#resultados").append(`
                <p>${data[i].title} </p>
                <img height="150px" src="${data[i].image}" >
                <p>Precio: ${data[i].price}€<p>
                <p>${data[i].description}</p>
                `);
                }
            },
            fail: function()
            {
                $("#resultados").html("<p>No se encontró el libro.</p>");
            },
            error: function()
            {
                $("#resultados").html("<p>Error al buscar el libro</p>");
            },
        });
    });
});