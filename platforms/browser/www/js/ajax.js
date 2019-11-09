// JavaScript Document
function nuevoAjax(xmlhttp){
     try {
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP.5.0");
    } catch (e) {
        try {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (E) {
            xmlhttp = false;
        }
    }
    if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
        xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp;
}

function load_p(page,cont,delay){
	if (page=="productos.html"){
		setTimeout(function(){
			if(document.getElementById('bot_prods')){
				document.getElementById('bot_prods').src = "img/bot_prods.png";
				document.getElementById('bot_prods').src = "img/bot_prods_1.png";
			}
		},1);
	}

	setTimeout(function(){
			var contenedor;
			var ajax;
			contenedor = window.document.getElementById(cont);
			//alert(contenedor);	
			ajax = nuevoAjax(ajax);
			ajax.open("GET", page, true);
			ajax.onreadystatechange=function() {
				if (ajax.readyState==4) {
					contenedor.innerHTML = ajax.responseText;
					if (page=="index0.html"){
						document.getElementById('menu').style.display="none";
						document.getElementById('bot_imprime').src = "img/bot_imprime.png";
						document.getElementById('bot_mail').src = "img/bot_mail.png";
						document.getElementById('bot_fono').src = "img/bot_fono.png";				
						document.getElementById('boleta').style.display="none";				
						document.getElementById('video').style.display = "none";
						document.getElementById('gun').style.display = "none";
							tot_prod = 0;
							for (v=0; v<compra.length;v++){
								tot_prod = tot_prod + parseInt(compra[v].cantidad);
							}
						document.getElementById("item_count").innerHTML = tot_prod;
						document.getElementById("item_count_0").innerHTML = tot_prod;
						Quagga.stop();
					}
					if (page=="productos.html"){
						var eleme = document.querySelector('.main-carousel');
						$('#lightSlider').lightSlider({
							gallery: true,
							item: 2,
							autoWidth: false,
							slideMove: 1, // slidemove will be 1 if loop is true
							loop: false,
							slideMargin: 250,
							thumbItem: 3,
							adaptiveHeight:true,
							cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
							easing: 'linear', //'for jquery animation',////
						});
						document.getElementById('video').style.display = "none";
						document.getElementById('gun').style.display = "none";
						Quagga.stop();
					}
		
					if (page=="ventas.html"){
						document.getElementById('video').style.display = "none";
						document.getElementById('gun').style.display = "none";
						Quagga.stop();
					}
				}
			}
			ajax.send(null);
	},delay);
}

function cambia_cantidad(obj,indice){
	compra[indice].cantidad = obj.value;
	carga_compras();
	tot_prod = 0;
	for (i=0; i<compra.length; i++){
		tot_prod = tot_prod + parseInt(compra[i].cantidad);
	}

	document.getElementById("item_count").innerHTML = tot_prod;	
	document.getElementById("cir_com").style.backgroundImage = "url('img/cir_compras_2.png')";
	if(document.getElementById("item_count_0")){
		document.getElementById("item_count_0").innerHTML = tot_prod;
		document.getElementById("cir_com_0").style.backgroundImage = "url('img/cir_compras_2.png')";
	}	
}

function go_home(){
 document.getElementById('contenedor').innerHTML = home;	
}