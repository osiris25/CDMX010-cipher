
 const cipher = {
	 //Aqui van las funciones
	 wendy:function(){
	 	return "hola soy Wendy"
	 }
	};

export default cipher;

const cipher = {
	
	 	encode(textCifrar,offset){
	 	let msjCifrado="";
		for(i = 0; i<textCifrar.length; i++){ 
		let cifrarTexto= textCifrar[i];
		let textFormula = ((cifrarTexto.charCodeAt() - 65 - offset)%26 + 65);
		msjCifrado += String.fromCharCode(textFormula);
		console.log(msjCifrado);
		}
		console.log(offset);
		return msjCifrado;
		},	
		decode(textDescifrar,offset){
			let msjDescifrado="";
			for (i = 0; i < textDescifrar.length; i++) {
				let descifrarTexto=textDescifrar[i];
				let textFormula=(( descifrarTexto.charCodeAt() - 65 - offset)%26 + 65);
				msjDescifrado += String.fromCharCode(textFormula);
				console.log(msjDescifrado);
					}
					return msjDescifrado;
		}
	
	  
	};
