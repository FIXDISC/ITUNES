// JavaScript Document

function busca_canciones(){
var url = "https://itunes.apple.com/search?term=in+utero&mediaType=music&limit=20";
var url = "1.txt";

fetch(url, {mode: 'cors'})
  .then(function(response) {
    response.text().then(function(text) {
      text = text.replace(/\s/g, '');
      setTimeout(function(){muestra_canciones(JSON.parse(text));},3000);
    });
  });
}


function muestra_canciones(data){
	load_p('canciones.html','contenedor',0);
	alert(data.results[0].artworkUrl100);
	setTimeout(function(){document.getElementById('foto').src = data.results[0].artworkUrl100;},1000);
	
}