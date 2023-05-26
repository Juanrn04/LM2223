$( function() {
    function log( message ) {
      $( "<div>" ).text( message );
    }
    $( "#categoria" ).autocomplete({
      source: function(request, response) {
        $.ajax({
          url: "https://fakestoreapi.com/products/",
          dataType: "json",
          data: {
            search: request.term
          },
          success: function(data) {
            response(data.map(function(data) {
              return {
                label: data.category,
                value: data.category,
                id: data.category
              };
            }));
          }
        });
      },
      minLength: 2,
      select: function( event, ui ) {
        log(ui.item.value);}
    });
  } );

  $(document).ready(function () {
    $("#btn-todos").click(function (e) {
        e.preventDefault();
        let producto = $("#categoria").val();
        $.ajax({
                url:"https://fakestoreapi.com/products/category/"+producto,
                success: function (data) {
                    console.log(data);
                    let num_productos = data.length;
                    $("#resultados").empty();
                    for (let i = 0; i < num_productos; i++) {
                    $("#resultados").append(`
                    <p>Objeto: ${data[i].title}</p>
                    <p>Precio: ${data[i].price}€</p>
                    <img height="150px" src="${data[i].image}">
                    <p>Descripción: ${data[i].description}</p>
                    <p>Categoria: ${data[i].category}</p>
                    <p>Puntuación: ${data[i].rating.rate}</p>
                    `);
                    }
                },
                error: function()
                {
                    $("#resultados").html("<p>Error cargando datos del sevidor</p>");
                },
            });
        });
    });