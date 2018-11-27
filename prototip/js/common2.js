$(function(){

	$(".checkbox_label").on("click", function(){
		$("#agreement_text").css({
			"opacity": 1,
 			"z-index": 20
		});
	});
	$(".cl_agr1").on("click", function(){
		$("#agreement_text").css({
			"opacity": 0,
 			"z-index": -2
		});
	});
	$(".cl_agr2").on("click", function(){
		$(".formError").css("display", "none");
	});
	$("#phone").mask("+7(999) 999-9999");

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

 	$(".foote_modal_button").on("click", function(){
 		$(".modal_form_wrapper").css({
 			"opacity": 1,
 			"z-index": 11
 		});
 	});

 	$(".close_modal_form").on("click", function(){
    	$(".modal_form_wrapper").css({
    		"opacity": 0,
 			"z-index": -1
    	});
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

 	 
 	var $window = $(window);

 	$window.on('scroll', function(){
 	 	if ($(this).scrollTop() > 150) {
 	 		$(".upppz").fadeIn();
 	 		$(".articles_nav").css({
 	 			"position": "fixed"		
 	 		});
 	 	}else{
 	 		$(".upppz").fadeOut();
 	 		$(".articles_nav").css({
 	 			"position": "absolute"
 	 		});
 	 	}
 	});

 	$('.upppz').on("click", function(){
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
  	});

  	//**************   страница SERVISES ВКЛАДКИ		***********************//

  	$('.tab_list').each(function(){ // Находим список вкладок
  		var $this = $(this);   // Сохраняем этот список
  		var $tab = $this.find('li.active_tab');// Получаем активный элемент списка
  		var $link = $tab.find('a');// Получаем ссылку из активной вкладки
  		var $panel = $($link.attr('href'));// Получаем активную панель
 
 		$this.on('click', '.tab_control', function(e) {// При щелчке по вкладке
 			e.preventDefault();// Отменяем действие ссылки
 			var $link = $(this);// Сохраняем текущую ссылку
 			var id = this.hash;// Получаем href нажатой вкладки

 			if (id && !$link.is('.active_tab')) {// Если уже не активны
 				$panel.removeClass('active_tab');// Деактивируем панель
 				$tab.removeClass('active_tab');// Деактивируем вкладку

 				$panel = $(id).addClass('active_tab');// Делаем новую панель активной
 				$tab   = $link.parent().addClass('active_tab');// Делаем новую вкладку активной
 			}
 		});
 	});

 	//$("#trudnoe").css({
  	//	"color" : "green"
  	//}); 
 
	//***************** страница SERVICES AJAX И JSON **************************//
	
	//код в файле common2.js на сервере!!!!!

	//************************ GALLERY PAGE**********************//
	

	/*   АККОРДИОН из КНИГИ   */

	$(".accordion").on("click", ".accordion-control", function(e){   // При щелчке 
		e.preventDefault();  // Отменяет стандартное действие кнопки 
		$(this)  // Получаем нажатый пользователем элемент
			.toggleClass("active-accordion-control")
			.next(".accordion-panel") // Выбираем следующую панель
			.toggleClass("active-accordion-panel")
			.not(":animated") // Если она не в процессе анимации 
			.slideToggle("fast");   // Выводим или скрываем ее с помощью slideToggle()
		//$(".accordion-control").not(this).removeClass("active-accordion-control"); 
	});


/****   ВСПЛЫВАЮЩАЯ ПОДСКАЗКА НА СТРАНИЦЕ ГАЛЕРЕИ В РАЗДЕЛЕ КАЛЕНДАРИ для окон просмотра больше 500px *****/

	function tipShowHide(){
		
		$(".calendar_image").mousemove(function(e){
			var x = e.offsetX;//по горизонтали
			var y = e.offsetY;//по вертикали

			var posTop = y - 5 + "px";
			var posLeft = x - 5 + "px";

			var id = $(this).attr("data-toolTit");
			
			$("#toolT" + id).css({"top": posTop, "left": posLeft}).slideDown();
		}).mouseout(function(){
			
			var id = $(this).attr("data-toolTit");
			$("#toolT" + id).slideUp();//.css({"top": "0px", "left": "0px"});
		});	
	}

	tipShowHide();

	
	$window.on('resize', function () {
	    if ($window.width() > 500) {
	        tipShowHide();
	    } else {
	        $(".calendar_image").off("mousemove");// отменяем обработчик событий mousemove
	    }
	});

//3d карусель в разделе полиграфия

	//var i = 0;

	function threeDCarusel(){
		$(".kc-wrap").on("mouseover", function(){
			//$(".kc-item").each(function(){
			//	$(this).removeClass("it" + (i + 1)).addClass("it" + (i + 2));
			//	i++;
			//	if(i == 8){//последний it8 становится it9, теперь как-то надо, 
			//		$(".it9").removeClass(".it9").addClass("it1");// чтобы it9 стал it1
			//		i = 0;
			//	}
			//});
			$(".it9").removeClass("it9").addClass("it0");
			$(".it8").removeClass("it8").addClass("it9");
			$(".it7").removeClass("it7").addClass("it8");
			$(".it6").removeClass("it6").addClass("it7");
			$(".it5").removeClass("it5").addClass("it6");
			$(".it4").removeClass("it4").addClass("it5");
			$(".it3").removeClass("it3").addClass("it4");
			$(".it2").removeClass("it2").addClass("it3");
			$(".it1").removeClass("it1").addClass("it2");
			$(".it0").removeClass("it0").addClass("it1");
		});
	}

	threeDCarusel();
	

	$window.on('resize', function () {
	    if ($window.width() > 940) {
	        threeDCarusel();
	    } else {
	        $(".kc-wrap").off("mouseover");// отменяем обработчик событий mouseover
	    }
	});

	

	//*************** 	POP-UP GALLERY	********************//

	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,//правая и левая навигационные кнопки
			navigateByImgClick: true,//смена фотографий при клике на фото в окне
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>Дизайн-бюро Прототип</small>';
			}
		}
	});

// слайдер hc-club *******************************************
	function slide_hokkey_club(){
		var request;                         // Последнее запрошенное изображение
		var $current;                        // Текущее изображение 
		var cache = {};                      // Объект Cache
		var $frame = $('#photo-viewer');     //  Контейнер для изображения 
		var $thumbs = $('.thumb');           //  Контейнер для эскизов

		function crossfade($img) {           //  Функция для плавного перехода между изображениями 
		                                     // Передаем новое изображение в качестве параметра если изображение сейчас выводится 
		  if ($current) {                    // If there is currently an image showing
		    $current.stop().fadeOut('slow'); //  Останавливаем анимацию и плавно его скрываем 
		  }

		  //$img.css({                         // Задаем для изображения поля с помощью CSS 
		  //  marginLeft: -$img.width() / 2,   // Negative margin of half image's width
		   // marginTop: -$img.height() / 2    // Negative margin of half image's height
		  //});

		  $img.stop().fadeTo('slow', 1);     //  Останавливаем анимацию нового изображения и плавно его выводим 
		  
		  $current = $img;                   // Новое изображение становится текущим

		}

		$(document).on('click', '.thumb', function(e){ //  При щелчке по эскизу
		  var $img,                               //  Создаем локальную переменную $img 
		      src = this.href;                    //  Сохраняем путь к изображению 
		      request = src;                      //  Сохраняем последнее запрошенное изображение
		  
		  e.preventDefault();                     //  Отменяем стандартное поведение ссылки 
		  
		  $thumbs.removeClass('active');          // Удаляем класс active из всех эскизов
		  $(this).addClass('active');             // Добавляем класс active к нажатому эскизу

		  if (cache.hasOwnProperty(src)) {        // Если cache содержит это изображение
		    if (cache[src].isLoading === false) { // И если if isLoading равно false
		      crossfade(cache[src].$img);         // Вызываем функцию crossfade() 
		    }
		  } else {                                // Если его нет внутри cache 
		    $img = $('<img/>');                   //  Сохраняем пустой элемент <img/> в $img 
		    cache[src] = {                        // Сохраняем это изображение в cache 
		      $img: $img,                         // Добавляем путь к изображению 
		      isLoading: true                     // Присваиваем isLoading значение false
		    };

		    // Следующие несколько строк подготовлены заранее, но запустятся после загрузки изображения 
		    $img.on('load', function(){           //  После загрузки изображения 
		      $img.hide();                        //  Скрываем его 
		      //  Удаляем класс is-loading из контейнера и добавляем в него новое изображение  
		      $frame.removeClass('is-loading').append($img);
		      cache[src].isLoading = false;       // Обновляем isLoading внутри cache 
		      //  Если это последнее запрошенное изображение 
		      if (request === src) {
		        crossfade($img);                  //  Вызываем функцию crossfade() 
		      }                                   //  Решаем проблему с асинхронной загрузкой 
		    });

		    $frame.addClass('is-loading');        //  Добавляем в контейнер класс is-loading

		    $img.attr({                           //  Назначаем атрибуты элементу img 
		      'src': src,                         // Добавляем атрибут src для загрузки изображения 
		      'alt': this.title || ''             //  Добавляем заголовок, если таковой был в ссылке 
		    });

		  }

		});

		//  Последняя строка запускается сразу после загрузки остальной части сценария и выводит первое изображение 
		$('.thumb').eq(0).click();                //  Эмулируем щелчок по эскизу
	}

	slide_hokkey_club();
	
	//СОРТИРОВКА projects  dufferent projecs**********************************


	function slide_diff_projects(){
		var $imgs = $('#diff_projects_gallery img');                  // Сохраняем все изображения 
	  	var $buttons = $('#diff_projects_buttons');                   // Сохраняем элементы button 
	  	var tagged = {};                                //  Создаем объект tagged

	  	$imgs.each(function() {                         //  Перебираем изображения и 
	    var img = this;                               //  сохраняем их в переменную 
	    var tags = $(this).data('tags');              // Получаем теги этого элемента

	    if (tags) {                                   //  Если элемент содержит теги 
	      tags.split(',').forEach(function(tagName) { //  Разбиваем их по запятой 
	        if (tagged[tagName] == null) {            // Если нет, то 
	          tagged[tagName] = [];                   // Добавляем в объект пустой массив 
	        }
	        tagged[tagName].push(img);                //  Добавляем изображение в массив 
	      });
	    }
	  });

	  $('<button/>', {                                 //  Создаем пустую кнопку 
	    text: 'Показать все',                          // Добавляем текст 'Показать все' 
	    class: 'active',                               // Делаем ее активной 
	    click: function() {                            // Добавляем обработчик onclick 
	      $(this)                                      // Получаем нажатую кнопку 
	        .addClass('active')                        //  Добавляем класс active 
	        .siblings()                                // Получаем остальные кнопки 
	        .removeClass('active');                    //  Удаляем из них класс active 
	      $imgs.show();                                //  Выводим все изображения 
	    }
	  }).appendTo($buttons);                           // Добавляем к другим кнопкам

	  $.each(tagged, function(tagName) {               //  Для каждого тега 
	    $('<button/>', {                               // Создаем пустую кнопку 
	      text: tagName + ' (' + tagged[tagName].length + ')', //  Добавляем имя тега 
	      click: function() {                          //  Добавляем обработчик щелчка 
	        $(this)                                    // Нажатая кнопка 
	          .addClass('active')                      //  Делаем нажатый элемент активным 
	          .siblings()                              //  Получаем остальные кнопки 
	          .removeClass('active');                  // Удаляем из них класс active 
	        $imgs                                      //  Все изображения 
	          .hide("slow")                                  //  Прячем их 
	          .filter(tagged[tagName])                 //  Находим те, что имеют данный тег 
	          .show("slow");                                 //  Показываем только их 
	      }
	    }).appendTo($buttons);                         //  Добавляем к другим кнопкам 
	  });
	}

	slide_diff_projects();
});