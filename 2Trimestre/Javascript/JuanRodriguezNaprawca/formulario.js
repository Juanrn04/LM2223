function validacion(){
    var contraseña=Math.floor(Math.random() * (999999-100000)+100000);
    var contnombre=0;
    var contemail=0;
    var contemail2=0;
    nombre = document.getElementById("nombre").value;
    if(nombre=="")
    {
        document.getElementById("valnombre").innerHTML=" Debe rellenar este campo";
    }
    else if(nombre.length<3)
    {
        document.getElementById("valnombre").innerHTML=" Debe tener como minimo tres caractertes";
    }
    else
    {
        document.getElementById("valnombre").innerHTML="";
        contnombre=1;
    }


    function valEmail(valor){
        if (/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(valor))
        {   
            document.getElementById("valemail").innerHTML="";
            contemail=1;
        } 
        else 
        {
            document.getElementById("valemail").innerHTML="Formato de correo erróneo";
        }
        }  

        email=document.getElementById("email").value;
        if(email=="")
        {
            document.getElementById("valemail").innerHTML=" Debe rellenar este campo";
        } 
        else
        {
            valEmail(document.getElementById("email").value);
        }

        email2=document.getElementById("email2").value
        if(email2=="")
        {
            document.getElementById("valemail2").innerHTML=" El email no es correcto"
        }
        else
        {
            if(email!=email2)
            {
                document.getElementById("valemail2").innerHTML=" Ambos correos no coinciden";
            }
            else
            {
                document.getElementById("valemail2").innerHTML="";
                contemail2=1;
            }
        }
        

        function perfil()
        {
            var nombremin = document.getElementById("nombre").value.toLowerCase();
            var emailmin = document.getElementById("email").value.toLowerCase();
            if(contnombre==1 && contemail==1 && contemail2==1)
            {
                document.getElementById("resultado").innerHTML= "El usuario generado al darse de alta es: " +nombremin[0]+nombremin[1]+nombremin[2]+emailmin[0]+emailmin[1]+emailmin[2]+ " y su password es "+contraseña;
            }
            else
            {
                document.getElementById("resultado").innerHTML="";
            }
        }

        perfil();

                    
                


}