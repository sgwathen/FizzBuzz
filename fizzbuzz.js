// JavaScript Document
$(document).ready(function() {
	var blank = $('#entNum').val("");
	$('#fizzbutt').click(function() {
		event.preventDefault();
		$('ul').empty();
		var num = +$('#entNum').val();
		var blank = $('#entNum').val("");
		if(isNaN(num)) {
			alert("Please enter a \"real\" number!");
			blank;
		} else if (num == "") {
			alert("Don't forget to enter a number!");
			blank;
		} else if (num % 1 != 0) {
			alert("Enter a whole number!");	
			blank;
		} else {
			runLoop(num);
		}
	});
	var runLoop = function(uI) {
		for (i = 1; i <= uI ; i++) {
			if (i % 5 === 0 && i % 3 === 0) {
				$('ul').append('<li>' + "FizzBuzz!" + '</li>');
				blank;
			} else if (i % 5 === 0) {
				$('ul').append('<li>' + "Buzz!" + '</li>');
				blank;
			} else if (i % 3 === 0) {
				$('ul').append('<li>' + "Fizz!" + '</li>');
				blank;
			} else {
				$('ul').append('<li>' + i + '</li>');
				blank;
			}
		}
	}
	$('#entNum').keypress(function(e) {
		if(e.which == 13) {
			event.preventDefault();
			$('#fizzbutt').click();
		}
	});
	$('#reset').click(function() {
		$('ul').empty();
	});
});

