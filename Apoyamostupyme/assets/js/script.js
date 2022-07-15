function seleccionarLenguaje(){
    let cbxLenguajes = document.getElementById('cbxLenguajes');
    let lenguaje = cbxLenguajes.value;

	$(document).ready(function(){

		if(lenguaje == "todo"){

			function showAll(){
				$('.gift__card').show();
				$('.gift__card').css('transform', 'scale(1)');
			} setTimeout(showAll,400);
		}
		else{
			// OCULTANDO PRODUCTOS =========================
			$('.gift__card').css('transform', 'scale(0)');
			function hideProduct(){
				$('.gift__card').hide();
			} setTimeout(hideProduct,400);
	
			// MOSTRANDO PRODUCTOS =========================
			function showProduct(){
				$('.gift__card[category="'+lenguaje+'"]').show();
				$('.gift__card[category="'+lenguaje+'"]').css('transform', 'scale(1)');
			} setTimeout(showProduct,400);
		}

	



		});


	

	};
