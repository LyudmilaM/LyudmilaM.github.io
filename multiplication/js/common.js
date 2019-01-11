$(function(){

	function choice_of_number(){
		var randomArray = [2,3,4,5,6,7,8,9];
		var randomIndex = Math.floor(Math.random()*8);
		var randomNumber = randomArray[randomIndex];
		return randomNumber;
	}

	var firstFactor = choice_of_number();
	var secondFactor = choice_of_number();

	var result = firstFactor * secondFactor;
	var count = 0;

	$(".first_factor").text(firstFactor);
	$(".second_factor").text(secondFactor);

	$(".submit_form").on("submit", function(e){
		e.preventDefault();
		var newText = $("input:text").val();	
		if(result == newText){
			$(".result").removeClass("wrong_answer").addClass("correctly_answer").text("Молодец!!!");
			count++;
			setTimeout(function() {
				firstFactor = choice_of_number();
				secondFactor = choice_of_number();
				$(".first_factor").text(firstFactor);
				$(".second_factor").text(secondFactor);
				result = firstFactor * secondFactor;
				$("input:text").val("");
				$(".result").text("");
				$(".count").text(count);
			}, 1500);
		} else{
			$(".result").removeClass("correctly_answer").addClass("wrong_answer").text("Подумай...");
			$("input:text").val("");
		}
	});	
});