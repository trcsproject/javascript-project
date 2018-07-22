var va = "Hello world!";
document.write(va);

var reverso = "";
for(var b=va.length-1; b>=0;b--){
	reverso = reverso + va.charAt(b);
}

document.writeln("<br>"+reverso);