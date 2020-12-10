
    
//import cipher from "cipher.js";

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
	





  	
  


 



