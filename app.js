$(document).ready(function() {
	$('form').on('submit', function(event) {
		event.preventDefault();
		var toAdd = $('input[class="inputblank"]').val();
		$('#notes').append('<li><input type="checkbox">' + toAdd + '<input type="submit" class="cancel" value="X"></li>');
		countChecked();
	});
	$("#notes").on('click', '[type=checkbox]', function() {
		$(this).parent('li').toggleClass('notes');
		countChecked();
	});
	$("ul li:last-child").click(function(event) {
		event.preventDefault();
		$(".notes").hide();
	});
	$("#Completed").click(function(event) {
		event.preventDefault();
		$(".notes").show();
	});
	var countChecked = function() {
		var n = $( "input:checked" ).length;
		$( "#countholder" ).text( n + (n === 1 ? " is" : " are") + " is checked!" );
	};
	countChecked();
	$("#notes").on('click', '.cancel', function() {
		$(this).parent('li').remove();
	});
	$( ".cancel" ).css( "width", function( index ) {
		return index * 50;
	});
});