# AMOR SECRETO(codigo César).
El objetivo de AMOR SECRETO, es cifrar y descifrar texto para que asi  las parejas o amigo(as) puedan enviarse mensajes que no quieren que otras personas sepan elcontenidode este, para que el destinatario  pueda descifrar el mensaje solo necesita conocer el número del desplazamiento.

##Pantallas del sitio web

[![vista cifrar](pantalla donde se cifra el texto "vista cifrar")](https://github.com/osiris25/CDMX010-cipher/blob/master/pantallas_appweb/pantalla%20de%20cifrar.PNG "vista cifrar")

[![vista descifrar](pantalla donde se descifra el texto "vista descifrar")](https://github.com/osiris25/CDMX010-cipher/blob/master/pantallas_appweb/pantalla%20descifrar.png "vista descifrar")
## Código del sitio web
####Javascript　

```javascript
//funcionabilidad entre botonesy pantallas
function openPage(pageName) {
  let i, tabcontent;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById(pageName).style.display = "block";
}
  document.getElementById("defaultOpen").click();

  
  //Convienrte el texto a mayusculas conforme se va escribiendo
  function UpperCase(){
    document.getElementById("textCifrar").addEventListener("keyup",function(){
      document.getElementById("textCifrar").value = document.getElementById("textCifrar").value.toUpperCase();
    });
  }

  //CIPHER

   const cipher = {
  
    encode(textCifrar,offset){
    let msjCifrado="";
    let textCifrarM=textCifrar.toUpperCase();
    let desp = parseInt(offset);

    for(i = 0; i<textCifrarM.length; i++){ 
    let cifrarTexto= textCifrarM[i];
    console.log(cifrarTexto);
    let valor=cifrarTexto.charCodeAt();
    console.log("valor"+valor);
    let textFormula = (( valor - 65 + desp)%26 + 65);
    if (cifrarTexto < 65 || cifrarTexto > 90) {
      msjCifrado+=" ";
      } else {
    msjCifrado += String.fromCharCode(textFormula);
    console.log(msjCifrado);
    console.log(desp);
  }
    }
    console.log(offset);
    return msjCifrado;
    },  
    decode(textDescifrar,offset){
    let msjCifrado="";
    let textDescifrarM=textDescifrar.toUpperCase();
    let desp = parseInt(offset);
    for(i = 0; i<textDescifrarM.length; i++){ 
      let descifrarTexto= textDescifrarM[i];
      console.log(descifrarTexto);
      let valor=descifrarTexto.charCodeAt();
      console.log("valor"+valor);
      let textFormula = (( valor + 65 - desp)%26 + 65);
      if (descifrarTexto < 65 || descifrarTexto > 90) {
        msjCifrado+=" ";
        } else {
      msjCifrado +=String.fromCharCode(textFormula);
      console.log(msjCifrado);
      console.log(desp);
        }
    }
    console.log(offset);
    return msjCifrado;
    } 
    
  }; 
  //BOTON CIFRAR
  document.getElementById("btnCifrar").addEventListener("click",function(){
  let textCifrar = document.getElementById("textCifrar").value;
  let offset = document.getElementById("despId").value;
  document.getElementById("textCifrado").value=cipher.encode(textCifrar,offset);
    });
    //BOTON DECIFRAR
    document.getElementById("btnDescifrar").addEventListener("click", function(){
      let textDescifrar= document.getElementById("textDescifrar").value;
      let offset = document.getElementById("despId").value;
      document.getElementById("textDescifrado").value=cipher.decode(textDescifrar,offset);
    });

    //Funcion Limpiar 
  let input = document.querySelector('#btnLimpiar');
  let input2 = document.querySelector('#btnLimpiar2');
  let textarea1 = document.querySelector('#textCifrar');
  let textarea2= document.querySelector('#textCifrado');
  let textarea3= document.querySelector('#textDescifrar');
  let textarea4= document.querySelector('#textDescifrado');
  input.addEventListener('click', function () {
    textarea1.value = '';
    textarea2.value = '';
    textarea3.value = '';
    textarea4.value = '';
  }, false);
  input2.addEventListener('click', function () {
    textarea3.value = '';
    textarea4.value = '';
  }, false);
```

####HTML code

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Caesar Cipher</title>
    <link rel="stylesheet" href="style.css" />
    <meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=1.0, maximum-scale-1.0,minimum-scale=1.0">
  </head>
 <body>
  <div class="contenedorGeneral">
    <div id="NombrePagina">
      <h1>AMOR SECRETO</h1>
      
    </div>

    <div id="Desplazamiento">
     
      <input id="despId" type="text" placeholder="DESPLAZAMIENTO">
    </div>

    <div id="contentDiv">
      <div>
        <button id="defaultOpen" class="tablink" onclick="openPage('Cifrado')">Cifrado</button>
        <button id="btnMenu" class="tablink" onclick="openPage('Descifrado')" >Descifrado</button>
      </div>
      <div id="Cifrado" class="tabcontent">
        <br>
        <label id="textLabel" for="textCifrar">INGRESA EL TEXTO A CIFRAR</label>
        <textarea class="textarea" name="" id="textCifrar" cols="100" rows="10"></textarea><br>
        <label id="textLabel" for="textCifradote">TEXTO CIFRADO</label><br>
        <textarea class="textarea"readonly="readonly"  name="" id="textCifrado" cols="100" rows="10"></textarea>
        <button id="btnCifrar">CIFRAR</button>
        <button id="btnLimpiar" >LIMPIAR</button>
      </div>

      <div id="Descifrado" class="tabcontent">
        <br>
        <label class="textarea"id="textLabel" for="textDescifrar">INGRESA EL TEXTO A DESCIFRAR</label>
        <textarea name="" id="textDescifrar" cols="100" rows="10"></textarea><br>
        <label id="textLabel" for="textCifradote">TEXTO DESCIFRADO</label><br>
        <textarea class="textarea"readonly="readonly"  name="" id="textDescifrado" cols="100" rows="10"></textarea>
        <button id="btnDescifrar">DESCIFRAR</button>
        <button id="btnLimpiar2" >LIMPIAR</button>
      </div>
    </div>
 
</div>

 
<script  src="index.js" ></script>
    
  </body>
</html>

```
####Código  CSS
```css

@import url('https://fonts.googleapis.com/css2?family=Graduate&display=swap');
/* Style body */

body {
  background-image: url('./img/CORAZONES.jpg');
  background-size: auto;
  background-repeat: no-repeat;
  display: flex;
  
}
*{
font-family: 'Graduate', cursive; 
}


/* Style tab links */
.tablink {
  background-color: #D2CBCB;
  color: black;
  float: center;
  border:inset ;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  font-size: 1.2vw;
  width: 25%;

}

#defaultOpen:active {
  background-color: #cc0000;
  color: white;
  font-weight: bolder;

}
#defaultOpen:focus {
  background-color: #cc0000;
  color: white;
  border-color: #cc0000;
  font-weight: bolder;
}
#btnMenu:active {
  background-color: #b30000;
  color: white;
  font-weight: bolder;
}
#btnMenu:focus {
  background-color: #b30000;
  color: white;
  border-color:  #b30000;
  font-weight: bolder;
}



/* Style the tab content*/
.tabcontent {
  color: black;
  display: none;
  border:solid transparent;
  width: 90%;
  
}
#contentDiv{
  width: 70%;
  margin-left: 60%;
    transform: translateX(-60%);
}
#Cifrado{
background-color: #cc0000; 
}

 #Descifrado{
  background-color:  #b30000; 
}
textarea{ 
  width: 80%;
  margin-left: 50%;
    transform: translateX(-50%);
    font-size: 1vw;
}

label{
  margin: 35px 0px 0px 35px;  
  font-size: 1.1vw;
  font-weight: bolder;
}


#btnCifrar,#btnDescifrar,
#btnLimpiar,#btnLimpiar2{
  border-radius: 3px;
  background-color:  #ffcc00;
  color: black;
  border-color: transparent;
    float: center;
    outline: none;
    cursor: pointer;
    padding: 10px 12px;
    font-size: 1vw;
    font-weight: bolder;
    width: 25%; 
    margin-left: 20%;
    transform: translateX(-20%);
    margin-top: 2%;
    margin-bottom: 2%;
    overflow: hidden;
    transition-duration: 0.4s;

  
}
#btnLimpiar,#btnLimpiar2{
  background-color:  #003cb3;
}
#btnCifrar:after,
#btnDescifrar:after,
#btnLimpiar:after,
#btnLimpiar2:after{
  content: "";
  background: #a6a6a6;
  display: block;
  position: absolute;
  padding-top: 300%;
  padding-left: 350%;
  margin-left: -20px !important;
  margin-top: -120%;
  opacity: 0;
  transition: all 0.8s
}

#btnCifrar:active:after,
#btnDescifrar:active:after,
#btnLimpiar:active:after,
#btnLimpiar:active:after {
  padding: 0;
  margin: 0;
  opacity: 2;
  transition: 0s
}

#textLabel{
  font-size:1.1vw;
  margin-top: 1%;
  margin-bottom: 2%;
  color: white;
}


#NombrePagina{
  width: 100%;
  color: #e60000; 
  margin-top: 2%;              
  font-weight: bold;
  text-align: center;
  font-size:2vw;
  text-shadow: -1px 0 #414D68, 0 1px #414D68, 1px 0 #414D68, 0 -1px #414D68, -2px 2px 0 #414D68, 2px 2px 0 #414D68, 1px 1px #414D68, 2px 2px #414D68, 3px 3px #414D68, 4px 4px #414D68, 5px 5px #414D68; 6px 6px #414D68, 7px 7px #414D68, 8px 8px #414D68, 9px 9px #414D68;

}
#Desplazamiento{
  margin-bottom: 2%;
  margin-top: 5%;
  margin-left: 65%;
  width: 60%;
}

input{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 2px;
  border-color: #b30000;
  width: 32%;
  text-align: center;
  font-size: 1.5vw;
}
.contenedorGeneral{
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  overflow: hidden;
  flex: 0 0 auto;
}



