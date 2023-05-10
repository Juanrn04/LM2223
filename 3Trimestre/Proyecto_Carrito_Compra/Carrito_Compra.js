var pc1 
pc1 = "<img src='Imagenes/Torre1.png'>";
document.getElementById("pc_a").innerHTML=pc1

var tcl1;
tcl1 = "<img src='Imagenes/teclado1.png'>";
document.getElementById("teclado_a").innerHTML=tcl1;

var rt1;
rt1 = "<img src='Imagenes/raton1.png'>";
document.getElementById("ratones_a").innerHTML=rt1;

var alt1;
alt1 = "<img src='Imagenes/altavoz4.png'>";
document.getElementById("altavoces_a").innerHTML=alt1;



var contordenador = 0;
document.getElementById("contordenador").textContent = contordenador;
function sumar1() {
    contordenador++;
  document.getElementById("contordenador").textContent = contordenador;
  document.getElementById("numpc").textContent ="Ordenador x "+contordenador;
  localStorage.setItem("contordenador",JSON.stringify(contordenador));
  guardado();
}
function restar1() {
    if (contordenador<=0)
    {
        document.getElementById("contordenador").textContent = 0;
        document.getElementById("numpc").textContent ="";

    }
    else 
    {
    contordenador--;
      document.getElementById("contordenador").textContent = contordenador;
      document.getElementById("numpc").textContent ="Ordenador x "+ contordenador;
      localStorage.setItem("contordenador",JSON.stringify(contordenador));
      guardado();
    }
    }




var conteclado = 0;
document.getElementById("conteclado").textContent = conteclado;
function sumar2() {
    conteclado++;
  document.getElementById("conteclado").textContent = conteclado;
  document.getElementById("numteclado").textContent ="Teclado x "+ conteclado;
  localStorage.setItem("conteclado",JSON.stringify(conteclado));
  guardado();
}
function restar2() {
    if (conteclado<=0)
    {
        document.getElementById("conteclado").textContent = 0;
        document.getElementById("numteclado").textContent ="";
    }
    else 
    {
    conteclado--;
    document.getElementById("conteclado").textContent = conteclado;
    document.getElementById("numteclado").textContent ="Teclado x "+ conteclado;
    localStorage.setItem("conteclado",JSON.stringify(conteclado));
    guardado();
    }
    
}




var contraton = 0;
document.getElementById("contraton").textContent = contraton;
function sumar3() {
    contraton++;
  document.getElementById("contraton").textContent = contraton;
  document.getElementById("numraton").textContent ="Raton x "+ contraton;
  localStorage.setItem("contraton",JSON.stringify(contraton));
  guardado();
}
function restar3() {
    if (contraton<=0)
    {
        document.getElementById("contraton").textContent = 0;
        document.getElementById("numraton").textContent ="";
    }
    else 
    {
    contraton--;
  document.getElementById("contraton").textContent = contraton;
  document.getElementById("numraton").textContent ="Raton x "+ contraton;
  localStorage.setItem("contraton", JSON.stringify(contraton));
  guardado();
    }
    }




var contaltavoz = 0;
document.getElementById("contaltavoz").textContent =contaltavoz;
function sumar4() {
    contaltavoz++;
  document.getElementById("contaltavoz").textContent =contaltavoz;
  document.getElementById("numaltavoz").textContent ="Altavoz x "+ contaltavoz;
  localStorage.setItem("contaltavoz", JSON.stringify(contaltavoz));
  guardado();
}
function restar4() {
    if (contaltavoz<=0)
    {
        document.getElementById("contaltavoz").textContent = 0;
        document.getElementById("numaltavoz").textContent ="";
    }
    else 
    {
    contaltavoz--;
        document.getElementById("contaltavoz").textContent = contaltavoz;
        document.getElementById("numaltavoz").textContent ="Altavoz x "+ contaltavoz;
        localStorage.setItem("contaltavoz", JSON.stringify(contaltavoz));
        guardado();
    }
    }


    function infopc()
  {
    if(document.getElementById("ocultar1").style.display==="none")
    {
        document.getElementById("ocultar1").style.display="block";
        
    }
    else
    {
        document.getElementById("ocultar1").style.display="none";
    }
  }


  function infoteclado()
  {
    if(document.getElementById("ocultar2").style.display==="none")
    {
        document.getElementById("ocultar2").style.display="block";
        
    }
    else
    {
        document.getElementById("ocultar2").style.display="none";
    }
  }


  function inforaton()
  {
    if(document.getElementById("ocultar3").style.display==="none")
    {
        document.getElementById("ocultar3").style.display="block";
        
    }
    else
    {
        document.getElementById("ocultar3").style.display="none";
    }
  }



  function infoaltavoz()
  {
    if(document.getElementById("ocultar4").style.display==="none")
    {
        document.getElementById("ocultar4").style.display="block";
        
    }
    else
    {
        document.getElementById("ocultar4").style.display="none";
    }
  }



  /*function borrar()
  {
  }*/


  function guardado()
  {
     var guardadopc = localStorage.getItem("contordenador");
     document.getElementById("contordenador").innerHTML=guardadopc
     document.getElementById("numpc").innerHTML="Ordenador x "+guardadopc

     var guardadoteclado = localStorage.getItem("conteclado");
     document.getElementById("conteclado").innerHTML=guardadoteclado
     document.getElementById("numteclado").innerHTML="Teclado x "+guardadoteclado

     var guardadoraton = localStorage.getItem("contraton");
     document.getElementById("contraton").innerHTML=guardadoraton
     document.getElementById("numraton").innerHTML="Raton x "+guardadoraton

     var guardadoaltavoz = localStorage.getItem("contaltavoz");
     document.getElementById("contaltavoz").innerHTML=guardadoaltavoz
     document.getElementById("numaltavoz").innerHTML="Altavoz x "+guardadoaltavoz

     var total = parseInt(guardadopc)*799.99 + parseInt(guardadoteclado)*39.99 + parseInt(guardadoraton)*19.99 + parseInt(guardadoaltavoz)*59.99+"€";
     document.getElementById("total").innerHTML= "Total = "+ total
  }

window.onload
{
  guardado()
} 


  