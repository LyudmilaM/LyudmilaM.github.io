$(function(){

	$("#phone").mask("+7(999) 999-9999");

	//проверка загружаемого файла
	//проверка на размер загружаемого файла - в contacts.php

	$("input[type=file]").change(function(){
		var filename = $(this).val().replace(/.*\\/, " ");
		$("#file-name").text(filename);
	});

	$(".projects_uslugi_aboutMe").tabs();

	$(".menu li").on("click", function(){
		$(".menu li").removeClass("active_tab");
		$(this).addClass("active_tab");
	});

});

jQuery(window).on("load", function(){
	(function($){
		$(".rain").fadeOut();
		$(".preloader").delay(350).fadeOut("slow");
		$("body").delay(350).css("overflow", "visible");
	})(jQuery);
});
