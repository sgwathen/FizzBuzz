// JavaScript Document
$(document).ready(function() {
	$('#fizzbutt').click(function() {
		event.preventDefault();
			$('ul').empty();
		var num = $('#entNum').val();
		if(isNaN(num)) {
			alert("Please enter a \"real\" number!");
			$('#entNum').val("");
		} else if (num == "") {
			alert("Don't forget to enter a number!");
			$('#entNum').val("");	
		} else if (num % 1 != 0) {
			alert("Enter a whole number!");	
			$('#entNum').val("");
		} else {
			runLoop(num);
		}
	});
	
	var runLoop = function(uI) {
		for (i = 1; i <= uI ; i++) {
			if (i % 5 === 0 && i % 3 === 0) {
				$('ul').append('<li>' + "FizzBuzz!" + '</li>');
			} else if (i % 5 === 0) {
				$('ul').append('<li>' + "Buzz!" + '</li>');
			} else if (i % 3 === 0) {
				$('ul').append('<li>' + "Fizz!" + '</li>');
			} else {
				$('ul').append('<li>' + i + '</li>');
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

