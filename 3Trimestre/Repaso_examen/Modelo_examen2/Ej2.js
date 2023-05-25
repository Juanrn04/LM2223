$(document).ready(function () {


    $("#btn-todos").click(function (e) {
        e.preventDefault();
        $.ajax({
                url:"https://gutendex.com/books/",
                success: function (data) {
                    console.log(data);
                    let num_productos = data.results.length;
                    $("#resultados").empty();
                    for (let i = 0; i < num_productos; i++) {
                    $("#resultados").append(`
                    <p>${data.results[i].title}</p>
                    <p>Autor: + ${data.results[i].authors.name} +</p> 
                    <img src="${data.results[i].formats['image/jpeg']}">
                    <p><a href="${data.results[i].formats["text/plain"]}" target="_blanck">Descargar aqui</a></p>
                    <p>Num de descargas: ${data.results[i].download_count}</p>
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



    $("#btn-libro").click(function(){
        let codlibro = $("#codLibro").val();
        $.ajax({
            url: "https://gutendex.com/books/"+codlibro,
            success:function(data){
            console.log(data)
            $("#resultados").html(`
            <p>Titulo: ${data.title}</p>
            <p>Autor: ${data.authors[0].name}</p> 
            <img src="${data.formats['image/jpeg']}">
            <p><a href="${data.formats["text/plain"]}" target="_blanck">Descargar aqui</a></p>
            <p>Num de descargas: ${data.download_count}</p>
            `);
        },
        error: function(){
            $("#resultados").html("Hay un error al intentar buscar dicho libro")
        }
        
    })
    
});




});