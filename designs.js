$('document').ready(function(){
	$('#sizePicker').submit(function makeGrid(e) {
		e.preventDefault();
		let column = $('#inputHeight').val();
		let row = $('#inputWidth').val();
		let pixelCanvas = $('#pixelCanvas');
		let tableTag = pixelCanvas.html('<table class="grid-cells"></table>');

		for(var x = 0;x < row; x++){
			tableTag.append('<tr>');

			for(var y=0; y < column; y++){
				$(tableTag).append('<td></td>');
			}

			tableTag.append('</tr>');
		}
	});

	$(colorPicker).on('change',function(){
		let colorPicker = $('#colorPicker').val();
		$('table').on('click', 'td', function() {
			$( this ).css('background-color',colorPicker);
		});
	});
});

