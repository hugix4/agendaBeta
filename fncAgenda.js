function ocultaFormulario(){
	var oculta_muestra = document.getElementById('formulario');
	var link_OM = document.getElementById('linkM');
	var bG = document.getElementById('btnG');
	console.log(oculta_muestra);
	if(oculta_muestra.style.display == 'none'){			  		
		oculta_muestra.style.display = '';
		console.log(bG);
		console.log(link_OM);
		document.getElementById("linkM").innerHTML = "Cancelar";
	}else{
		oculta_muestra.style.display = 'none';
		document.getElementById("linkM").innerHTML = "Anadir";
	}
}

function iError(id){
	if(document.getElementById(id).value == ''){
		document.getElementById(id).classList.add('input_invalid');
		document.getElementById('tag_'+id).classList.add('tag_invalid');
		alert('Faltan datos, por favor llena los campos en rojo');
		return false;	
	}
	else return true;
	
}

function iValid(id){
	if(document.getElementById(id).value != ''){
  	document.getElementById(id).classList.remove('input_invalid');
  	document.getElementById('tag_'+id).classList.remove('tag_invalid');
  	return true;
 }
 else return false;
}

function validaF(){
	valid = 0;
	if( iValid('nombre') && iValid('telefono1') && iValid('email')  && iValid('direccion') ){
		return true;
	}else{
		if( iError('nombre') && iError('telefono1')  && iError('email')  && iError('direccion') ){
			return false;
		}else return false;
	}
}

function validaFA(){
	console.log("*******estamos en validaFA**********")	;
	valid = 0;
	if( iValid('usuario') && iValid('clave') ){
		return true;
	}else{
		if( iError('usuario') && iError('clave') ){
			return false;
		}else return false;
	}
}


var counter = 1;
var limit = 3;
function addInput(divName){
 if (counter == limit)  {
      alert("Alcanzaste el limite de " + counter + " campos");
 }
 	else {
		var newdiv = document.createElement('div');
		newdiv.innerHTML = "Telefono " + (counter + 1) + ": <br><input type='text' id='telefono" + (counter + 1) + "' name='telefono" + (counter + 1) + "'>";
		document.getElementById(divName).appendChild(newdiv);
		counter++;

 	}
}


function verResultados(usuario) {
				if (window.XMLHttpRequest) {
					// code for IE7+, Firefox, Chrome, Opera, Safari
					xmlhttp=new XMLHttpRequest();
				} else { // code for IE6, IE5
					xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
				}
				xmlhttp.onreadystatechange=function(){
					if (xmlhttp.readyState==4 && xmlhttp.status==200){
						document.getElementById("resultado").innerHTML=xmlhttp.responseText;
					}
				}
				xmlhttp.open("GET","tabla.phtml?u="+usuario,true);
				xmlhttp.send();
			}