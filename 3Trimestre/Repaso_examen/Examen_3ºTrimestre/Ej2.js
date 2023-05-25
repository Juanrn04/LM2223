$(document).ready(function(){
    $("#btn-generico").click(function(){
        $.ajax({
            url: "https://randomuser.me/api/",
            success:function(data){
                console.log(data);
                $("#circle").html(`
                <img style="border-radius:50px;" src="${data.results[0].picture.medium}">
                `),
                $("#fullname").html(`
                <p>${data.results[0].name.first} ${data.results[0].name.last}</p>
                `),
                $("#username").html(`
                <p>${data.results[0].login.username}</p>
                `),
                $("#email").html(`
                <p>${data.results[0].email}</p>
                `),
                $("#city").html(`
                <p>${data.results[0].location.city}</p>
                `);
            }
        });
    });

    $("#btn-espanol").click(function(){
        $.ajax({
            url: "https://randomuser.me/api/?nat=es",
            success:function(data){
                console.log(data);
                $("#circle").html(`
                <img style="border-radius:50px;" src="${data.results[0].picture.medium}">
                `),
                $("#fullname").html(`
                <p>${data.results[0].name.first} ${data.results[0].name.last}</p>
                `),
                $("#username").html(`
                <p>${data.results[0].login.username}</p>
                `),
                $("#email").html(`
                <p>${data.results[0].email}</p>
                `),
                $("#city").html(`
                <p>${data.results[0].location.city}</p>
                `);
            }
        });
    });

    $("#btn-varios").click(function (e) {
        e.preventDefault();
        $.ajax({
                url:"https://randomuser.me/api/?nat=es&results=5",
                success: function (data) {
                    console.log(data);
                    let num_productos = data.results.length;
                    $("#circle").empty();
                    $("#fullname").empty();
                    $("#username").empty();
                    $("#email").empty();
                    $("#city").empty();
                    for (let i = 0; i < num_productos; i++) {
                        $("#circle").html(`
                        <img src="multiple.png">
                        `),
                        $("#fullname").append(`
                        <p>${data.results[i].name.first} ${data.results[i].name.last}</p>
                        `),
                        $("#username").append(`
                        <p>${data.results[i].login.username}</p>
                        `),
                        $("#email").append(`
                        <p>${data.results[i].email}</p>
                        `),
                        $("#city").append(`
                        <p>${data.results[i].location.city}</p>
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