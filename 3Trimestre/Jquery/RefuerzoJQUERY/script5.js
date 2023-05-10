$(document).ready(function(){
    $('#buscar').click(function(){
        var titulo = $('#titulo').val();
        var key = 'AIzaSyBaaHWZ8qFOjM3frT9EEJx-RYz5B3xcAb8';
        var link = 'https://www.googleapis.com/books/v1/volumes?q=intitle:'+titulo+'&key='+key;
        $.ajax({
            url: link,
            success: function(data){
                var miString="";
                for(var i=0;i<data.items.length;i++){
                        miString+="<li>"+data.items[i].volumeInfo.title+"</li>";
                }
                $('#resultado').html(`<p style="font-weight:bold">Se ha encontrado ${data.items.length} libros</p><ol>${miString}</ol>`);
            }
        }).fail( function(){
                $('#resultado').html(
                    `<p>No se ha encontrado el libro</p>`);
            })
    })
})