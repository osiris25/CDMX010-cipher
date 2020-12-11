	const cipher = {
		
		encode(textCifrar,offset){
			let msjCifrado="";
			let textCifrarM=textCifrar.toUpperCase();
			let desp = parseInt(offset);

			for(let i = 0; i<textCifrarM.length; i++){ 
				let cifrarTexto= textCifrarM[i];
				let valor=cifrarTexto.charCodeAt();
				let textFormula = (( valor - 65 + desp)%26 + 65);
				if (cifrarTexto < 65 || cifrarTexto > 90) {
					msjCifrado+=" ";
				} else {
					msjCifrado += String.fromCharCode(textFormula);
				}
			}
			
			return msjCifrado;
		},	
		decode(textDescifrar,offset){
			let msjCifrado="";
			let textDescifrarM=textDescifrar.toUpperCase();
			let desp = parseInt(offset);
			for(let i = 0; i<textDescifrarM.length; i++){ 
				let descifrarTexto= textDescifrarM[i];
				let valor=descifrarTexto.charCodeAt();
				let textFormula = (( valor + 65 - desp)%26 + 65);
				
				if (descifrarTexto < 65 || descifrarTexto > 90) {
					msjCifrado+=" ";
				} else {
					msjCifrado +=String.fromCharCode(textFormula);
					
				}
			}
			
			return msjCifrado;
		}	
		
	};

	export default cipher;

