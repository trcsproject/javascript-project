
//Convertendo primeira letra da string para maiusculo
function titleCase(str) {
 return str.replace(/\w\S*/g, function(str) {
	return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
 });
}

//Start
document.write(titleCase("testando a sTriNG"));

