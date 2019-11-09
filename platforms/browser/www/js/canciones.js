// JavaScript Document

function busca_canciones(){
var url = "https://itunes.apple.com/search?term=in+utero&mediaType=music&limit=20";
var url = "1.txt";

fetch(url, {mode: 'cors'})
  .then(function(response) {
    response.text().then(function(text) {
      text = text.replace(/\s/g, '');

      setTimeout(function(){
			muestra_canciones(JSON.parse(text));  
		},3000);
    });
  });
}


function muestra_canciones(data){
	tot_res = data.resultCount;
	results = data.results
	
	console.log(results);

	listado = [];
	for (v=0;v<tot_res;v++){
		arte = '{"arte": "'+results[v].artworkUrl100+'",';
		album = '"album": "'+results[v].collectionName+'",';
		artista = '"artista": "'+results[v].artistName+'"}';
		itemn = arte+album+artista;
		listado.push(itemn);
		//console.log(itemn);
	}
	listado="["+listado+"]";
	listado = JSON.parse(listado);
	console.log(listado);
	
	
	document.getElementById('con').style.display='none';
	document.getElementById('rec').style.display='block';
	setTimeout(function(){
		load_p('canciones.html','contenedor',0);
	},2000);	
	
	setTimeout(function(){
		document.getElementById('foto').src = listado[0].arte;
	},2100);
	
}