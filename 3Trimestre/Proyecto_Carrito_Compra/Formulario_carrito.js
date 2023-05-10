function validacion(){
    if(document.getElementById("nombre").value=="")
    {
        document.getElementById("valnombre").innerHTML="Debe rellenar este campo";
    }
    else
    {
        document.getElementById("valnombre").innerHTML='';
    }



    if(document.getElementById("apellidos").value=="")
    {
        document.getElementById("valapellidos").innerHTML="Debe rellenar este campo";
    }
    else
    {
        document.getElementById("valapellidos").innerHTML='';
    }



    if(document.getElementById("dni").value=="")
    {
        document.getElementById("valdni").innerHTML="Debe introducir un DNI";
    }
    else
    {
        if(document.getElementById("dni").value.length!=9)
        {
            document.getElementById("valdni").innerHTML="Longitud del DNI incorrecta"
        }
        else
        {
            var dni = document.getElementById("dni").value;
            var opciones = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
            var num = parseInt(dni[0]+ dni[1]+ dni[2]+ dni[3]+ dni[4]+ dni[5]+ dni[6]+ dni[7]);
            var letra = num % 23;
            if(dni[8]!=opciones[letra])
            {
                document.getElementById("valdni").innerHTML="DNI incorrecto";
            }
            else
            {
                document.getElementById("valdni").innerHTML="";
            }
        }    
    }



    function valEmail(valor){
    if (/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(valor))
    {   
        document.getElementById("valcorreo").innerHTML="";
    } 
    else 
    {
        document.getElementById("valcorreo").innerHTML="Formato de correo erróneo"
    }
    }   


    if(document.getElementById("correo").value=="")
    {
        document.getElementById("valcorreo").innerHTML="Debe rellenar este campo";
    }
    else
    {
        valEmail(document.getElementById("correo").value);
    }
    
    if (document.getElementById("caja").checked)
    {
        document.getElementById("valcaja").innerHTML="";  
    }
    else
    {
        document.getElementById("valcaja").innerHTML = "Debes aceptar las condiciones del formulario";
    }


    function validarTarjeta(numTarjeta) {
        var suma = 0;
        var numTarjetaArr = numTarjeta.toString().split("").reverse();
      
        for (var i = 0; i < numTarjetaArr.length; i++) {
          var num = parseInt(numTarjetaArr[i]);
      
          if (i % 2 !== 0) {
            num *= 2;
            document.getElementById("valnumtarjeta").innerHTML="Tarjeta no valida";
            if (num > 9) {
              num -= 9;
              document.getElementById("valnumtarjeta").innerHTML="";
            }
          }
          suma += num;
        }
      
        return suma % 10 === 0;
        }
      

        if(document.getElementById("numtarjeta").value=="")
        {
        document.getElementById("valnumtarjeta").innerHTML="Debe rellenar este campo";
        }
        else
        {
            if(document.getElementById("numtarjeta").value.length!=16)
            {
                document.getElementById("valnumtarjeta").innerHTML="Longitud del número incorrecta";
            }
            else
            {
                validarTarjeta(document.getElementById("numtarjeta").value)
            }
        }


    if(document.getElementById("fechatarjeta").value=="")
    {
        document.getElementById("valfechatarjeta").innerHTML="Debe rellenar este campo";
    }
    else
    {
        document.getElementById("valfechatarjeta").innerHTML='';
    }
    

    if(document.getElementById("codtarjeta").value=="")
    {
        document.getElementById("valcodtarjeta").innerHTML="Debe rellenar este campo";
    }
    else
    {
        if(document.getElementById("codtarjeta").value.length!=3)
        {
            document.getElementById("valcodtarjeta").innerHTML="La longitud del CVV debe ser de 3 números";
        }
        else
        {
            document.getElementById("valcodtarjeta").innerHTML='';
        }
    }
}


