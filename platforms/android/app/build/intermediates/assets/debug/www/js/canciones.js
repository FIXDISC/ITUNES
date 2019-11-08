// JavaScript Document

function busca_canciones(){
var storedText;

fetch('https://itunes.apple.com/search?term=in+utero&mediaType=music&limit=20', {mode: 'cors'})
  .then(function(response) {
    response.text().then(function(text) {
      text = text.replace(/\s/g, '');
      muestra_canciones(text);
    });
  });
}


function muestra_canciones(data){
	alert(data);
}