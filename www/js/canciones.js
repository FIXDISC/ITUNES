// JavaScript Document
home="";
function busca_canciones(termino){
	home = document.getElementById('contenedor').innerHTML;
	document.getElementById('esp').style.display='none';
		document.getElementById('con').style.display='block';
	if (document.getElementById('termino').value==""){alert('DEBE INGRSAR UN TEXTO');return;}
	termino = document.getElementById('termino').value.replace(/\s/g,"+");
var url = "https://itunes.apple.com/search?term="+termino+"&mediaType=music&limit=20";
console.log(url)
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

	//CONVERSION A LISTADO JSON
	listado = [];
	for (v=0;v<tot_res;v++){
		arte = '{"arte": "'+results[v].artworkUrl100+'",';
		album = '"album": "'+results[v].collectionName+'",';
		artista = '"artista": "'+results[v].artistName+'",';
		previewUrl = '"previewUrl": "'+results[v].previewUrl+'"}';
		itemn = arte+album+artista+previewUrl;
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
		//GENERACION DE TR PARA TABLA
		console.log(listado.length);
		var table1 = document.getElementById("tab_listado");
		for (v=3;v<listado.length+3;v++){
			var row = table1.insertRow(v);
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			var cell3 = row.insertCell(2);
			var cell4 = row.insertCell(3);
			table2 ="<table width='100%' border='0' cellspacing='0' cellpadding='0'>"+
					"  <tr>"+
					"    <td width='100'>ALBUM</td>"+
					"    <td style='text-align:left;'>&nbsp;"+listado[v-3].album+"</td>"+
					"    </tr>"+
					"  <tr>"+
					"    <td>BANDA</td>"+
					"    <td style='text-align:left;'>&nbsp;"+listado[v-3].artista+"</td>"+
					"    </tr>"+
					"  <tr>"+
					"    <td>&nbsp;</td>"+
					"    <td>&nbsp;</td>"+
					"    </tr>"+
					"</table>"      
			cell1.innerHTML = "<img id='foto' name='foto' src='"+listado[v-3].arte+"' width='100' height='100' alt='img'>";
			cell2.innerHTML = table2;
			cell3.innerHTML = "????";
			cell4.innerHTML = "<iframe style='border:0; background-color='' src='"+listado[v-3].previewUrl+"' width='100%'></iframe> ";
		}
	},2100);
	

	
}