$('document').ready(function(){

    $('#sizePicker').submit(function makeGrid(e) {
  e.preventDefault();

		// Select size input
		let column = $('#input_height').val();
		let row = $('#input_width').val();
		// When size is submitted by the user, call makeGrid()
		let pixel_canvas = $('#pixel_canvas');

		var tableTag = pixel_canvas.html('<table class="grid-cells"></table>');
			for(var x = 0;x < row; x++){
					tableTag.append('<tr>');

				for(var y=0; y < column; y++){
					$(tableTag).append('<td></td>');
				}

				tableTag.append('</tr>');
			}

	});


$(colorPicker).on('change',function(){
         // Select color input
    let colorPicker = $('#colorPicker').val();
          $('table').on('click', 'td', function() {
              $( this ).css('background-color',colorPicker);
          });
        });


});

