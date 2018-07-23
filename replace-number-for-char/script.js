function replaceStringForNumber(str){
	for(var x = 0; x <= str.length; x++){
		for(var y = 0; y < 10; y++){
			str = str.replace(y,"");
		}
	}
	return str;
}
//Execução
document.write(replaceStringForNumber("Na1r22uto v34en556ce98u Sa09832suke!"));
document.write("<br>");

function replaceNumberForString(str){

	var listChar = ['A', 'E', 'I', 'O', 'U', 'Q', 'K', 'R', 'T', 'P'];

	for(var x = 0; x <= str.length; x++){ //19
		for(var y = 0; y <= listChar.length; y++){ //10
			str = str.replace(y,listChar[y]); 
		}
	}
	return str;
}
//Execução
document.write(replaceNumberForString("N0r4t3 v1nc14 S0s4k1!"));