$('document').ready(function(){
	$('#sizePicker').submit(function makeGrid(e) {
		e.preventDefault();
		let column = $('#inputHeight').val();
		let row = $('#inputWidth').val();
		const pixelCanvas = $('#pixelCanvas');
		let tableTag = pixelCanvas.html('<table class="grid-cells"></table>');

		for(let x = 0;x < row; x++){
			let tr = tableTag.append('<tr>');

			for(let y=0; y < column; y++){
				$(tr).append('<td></td>');
			}

		}
	});

	$('table').on('click', 'td', function() {
		$( this ).css('background-color','#000');
	});
	$(colorPicker).on('change',function(){
		let colorPicker = $('#colorPicker').val();
		$('table').on('click', 'td', function() {
			$( this ).css('background-color',colorPicker);
		});
	});
});

