
var iframe = document.querySelectorAll("iframe");
var iframe_src = '';
var iframe_regex = /exoclick/i;
var iframe_match = false;
for(index = 0;index < iframe.length; index++){
	iframe_src = iframe[index].src;
	iframe_match = iframe_regex.exec(iframe_src);
	if(iframe_match){iframe[index].outerHTML = "";}
}
