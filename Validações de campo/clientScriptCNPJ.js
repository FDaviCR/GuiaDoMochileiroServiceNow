// Informe um CNPJ para teste na variável cnpjParaValidar
var cnpjParaValidar = '';

var numeroCnpj = cnpjParaValidar.replace(/[^0-9]/g,'');
var regex = /[a-z]|[A-Z]/g;

var arrayVerificador1 = [5,4,3,2,9,8,7,6,5,4,3,2];
var arrayVerificador2 = [6,5,4,3,2,9,8,7,6,5,4,3,2];
var somatorio1 = 0;
var somatorio2 = 0;
var dig1 = 0;
var dig2 = 0;

if(regex.test(cnpjParaValidar)){
	gs.info("Um CNPJ não contém letras, favor verificar.");
}

else if(numeroCnpj.length != 14){
	gs.info("Um CNPJ tem 14 dígitos, favor verificar.");
}

else{
	for(var i = 0; i < arrayVerificador1.length; i++){
		somatorio1 = somatorio1 + (arrayVerificador1[i] * numeroCnpj[i]);
	}

	var resto1 = somatorio1 % 11;
	
	if(resto1 < 2){
		dig1 = 0;
	}else{
		dig1 = 11 - resto1;
	}
	
	for(var j = 0; j < arrayVerificador2.length; j++){
		somatorio2 = somatorio2 + (arrayVerificador2[j] * numeroCnpj[j]);
	}

	var resto2 = somatorio2 % 11;
	
	if(resto2 < 2){
		dig2 = 0;
	}else{
		dig2 = 11 - resto2;
	}

	if(numeroCnpj[12] == dig1 && numeroCnpj[13] == dig2){
		gs.info("O CNPJ " + cnpjParaValidar + " é válido!");
	}
}
