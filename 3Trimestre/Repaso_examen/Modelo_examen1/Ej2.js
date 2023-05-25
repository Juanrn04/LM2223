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

$(document).ready(function (){
    $("#btn-producto").click(function(){
        let libro = $("#codProducto").val();

        $.ajax({
            url:"https://fakestoreapi.com/products/"+libro,
            succes: function(data){
                console.log(data);
                $("#resultados").html(`
                <h1>Titulo: ${data.title} </h1>
                <h2>Precio: ${data.price}</h2>
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
});