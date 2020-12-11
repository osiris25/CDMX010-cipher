import cipher from "./cipher.js";

	//funcionabilidad entre botones y pantallas
	//boton cifrar
	document.getElementById("defaultOpen").addEventListener("click",function openPage(){
	let tabcontent;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (let i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";}
	document.getElementById("Cifrado").style.display = "block";
	} ); document.getElementById("defaultOpen").click();

	//boton descifrar
	document.getElementById("btnMenu").addEventListener("click",function openPage(){
	let tabcontent;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (let i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";}
	document.getElementById("Descifrado").style.display = "block";
	} );

    //Convienrte el texto a mayusculas conforme se va escribiendo
	document.getElementById("textCifrar").addEventListener("keyup",function(){
	document.getElementById("textCifrar").value = document.getElementById("textCifrar").value.toUpperCase();
	});
  
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