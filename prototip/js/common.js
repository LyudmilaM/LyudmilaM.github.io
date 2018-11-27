$(function(){

	$(".checkbox_label").click(function(){
		$("#agreement_text").css({
			"opacity": 1,
 			"z-index": 20
		});
	});
	$(".cl_agr1").click(function(){
		$("#agreement_text").css({
			"opacity": 0,
 			"z-index": -2
		});
	});
	$(".cl_agr2").click(function(){
		$(".formError").css("display", "none");
	});
	$("#phone").mask("+7(999) 999-9999");
	
});

(function() {

	var btnEl = document.getElementById('nvBtn');
	var el = document.getElementById('one');
	var $elHideMenu = $('#hideMenu');

	btnEl.onclick = function(){
		if (el.className === "nv_btn_op") {
			$elHideMenu.css("background-color", "black");
			$elHideMenu.animate({
				right: '0px'
			}, 300);
		el.className = "nv_btn_cl";
		}else{
			
			$elHideMenu.animate({
			right: '-210px'
		}, 300);
			el.className = "nv_btn_op";
			$elHideMenu.css("background-color", "transparent");
		}
	};


	var form = document.getElementById("bottomForm");  // Получаем элемент form
	var submit = document.getElementById("formSubmit"); // Получаем кнопку
    var chk = document.getElementById("agreement"); // Получаем флажок
    
    addEvent(form, 'submit', function(e) {
    	try {                               // Try the following code block
      		if (!chk.checked) {              // If the checkbox is not checked
        		$(".formError").css("display", "block");
      			e.preventDefault();  // Останавливаем отправку формы
        		return;
      		} 
    	} catch(error) {                            // If this causes an error
      	alert("Что-то пошло не так"); 
    	}
  	});
    submit.disabled = false;

    chk.onclick = function(){
    	$(".formError").css("display", "none");
    }

 	$(".foote_modal_button").click(function(){
 		$(".modal_form_wrapper").css({
 			"opacity": 1,
 			"z-index": 10
 		});
 	});

 	$(".close_modal_form").click(function(){
    	$(".modal_form_wrapper").css({
    		"opacity": 0,
 			"z-index": -1
    	});
    });

 	var $window = $(window);

 	$window.scroll(function(){
 	 	if ($(this).scrollTop() > 150) {
 	 		$(".upppz").fadeIn();
 	 	}else{
 	 		$(".upppz").fadeOut();
 	 	}
 	});

 	$('.upppz').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
  	});

 	//редактируем input type="file"

	function fileUpload(){
		$(".file_upload label input[type=file]").change(function(){
			var filenanme = $(this).val().replace(/.*\\/, " ");
			$("#file-name").val(filenanme);
			console.log($("#file-name").val());
		});
	}

	fileUpload();

	//Проверка формы перед отправкой

    function checkForm(){
    	document.getElementById("bottomForm").addEventListener("submit", function(evt){
    		var http = new XMLHttpRequest(), f = this;
    		evt.preventDefault();
    		http.open("POST", "contacts.php", true);
    		http.onreadystatechange = function(){
    			if(http.readyState == 4 && http.status == 200){
    				alert(http.responseText);
    				if(http.responseText.indexOf(f.nameFF.value) == 0){//очистить поле сообщения, если первым в ответе будет имя отправителя
    					f.messageFF.removeAttribute("value");
    					f.messageFF.value = "";
    				}
    			}
    		}
    		http.onerror = function(){
    			alert("Извините, данные не были переданы");
    		}
    		http.send(new FormData(f));
    	}, false);
    }

    checkForm();
 	
}());	