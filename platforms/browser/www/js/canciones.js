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
	canciones = [];
	Object.keys(data).forEach(function(k){
		//console.log(k + ' - ' + data[k]);
		//canciones.push(data.results[0].artworkUrl100);
		console.log(data[k]);
			for(v=0;v<data[k].length;v++){
				//console.log(data[k][v]);
				//console.log("ART: "+data[k][v].artistName);
				canciones.push("{"+data[k][v].artworkUrl100+","+data[k][v].collectionName+"}");
			}
	});
	
	console.log(canciones);
	return;
	
	document.getElementById('con').style.display='none';
	document.getElementById('rec').style.display='block';
	setTimeout(function(){
		load_p('canciones.html','contenedor',0);
	},2000);	
	
	setTimeout(function(){
		document.getElementById('foto').src = data.results[0].artworkUrl100;
	},2100);
	
}