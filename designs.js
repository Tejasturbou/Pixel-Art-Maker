alert('1.Select Grid size and submit\n2.Select Color\n3.Fill color using left click and remove color using right click');

$('.menu').click(function(){
	$(this).addClass('hide');
	$('.canvas').css('margin-left', '28%');
	$('.choose').css('width', '377px');
});

let row, column;
$("input[type = 'submit']").click(function(evt){
	evt.preventDefault();
	row = $('#inputHeight').val();
	column = $('#inputWeight').val();
	$('#pixelCanvas').empty();

	if (row > 100 || column > 100) {
		alert ('Height and Weight must be less than or equal to 100.');
		evt.end();
	}

	$('.choose').css('width', '0');
	$('.canvas').css('margin-left', '0');
	$('.menu').removeClass('hide');

	makeGrid();
	let pixels = $('.pixel');
	pixels.click(function(){
		const colour = $('#colorPicker').val();
		$(this).css('background-color', colour);
	});

	pixels.contextmenu(function(evt){
		evt.preventDefault();
		$(this).css('background-color', 'white');
	});


});

$('#close').click(function(){
	$('.choose').css('width', '0');
	$('.canvas').css('margin-left', '0');
	$('.menu').removeClass('hide');
});

function makeGrid() {
	for(let i = 1; i <= row; i++){
		 $('table').append('<tr></tr>');
		for(let j = 1; j <= column; j++){
			$('tr:last').append('<td></td>');
		}
	}
	$('td').addClass('pixel');
}