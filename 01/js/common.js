$( document ).ready( function() {
	
	$( ".cal" ).datepicker({ 
	    dateFormat: "yy년 mm월",
	    showButtonPanel: true,
	    buttonImageOnly: true
 	}); // datepicker
	
	/* start PLUS Select***********************************/
	// Common
	var select_root = $('div.smselect');
	var select_value = $('.my_value');
	var select_li = $('div.smselect>ul>li');
	var select_a = $('div.smselect>ul>li>a');
	var select_none = $('div.smselect>ul>li.selNone');
	
	// Show
	function show_option(target){
		//console.log($(this));
		//alert(target.parents('div.smselect:first').toggleClass());
		//target.parents('div.smselect:first').toggleClass('open');
		target.toggleClass('open');
	}
	// Hover
	function i_hover(){
		$(this).parents('ul:first').children('li').removeClass('hover');
		$(this).parents('li:first').toggleClass('hover');
	}
	// Hide
	function hide_option(){
		var t = $(this);
		setTimeout(function(){
			//t.parents('div.smselect:first').removeClass('open');
			t.parents('ul').prev('.my_value').removeClass('open');
		}, 1);
	}
	// Set Anchor
	function set_anchor(){
		var v = $(this).text();
		$(this).parents('ul:first').prev('.my_value').text('').append(v);
		$(this).parents('ul:first').prev('.my_value').addClass('selected');
	}
	// Anchor Focus Out
	$('*:not("div.smselect a")').focus(function(){
		$('.a_list').parent('.select').removeClass('open');
	});
	/*select_value.click(show_option);*/
	select_value.bind('click', function(){
		show_option($(this));
	});
	select_root.removeClass('open');
	select_value.removeClass('open');
	select_root.mouseleave(function(){$(this).removeClass('open')});
	select_a.click(set_anchor).click(hide_option).focus(i_hover).hover(i_hover);
	select_li.click(set_anchor).click(hide_option).focus(i_hover).hover(i_hover);
	/* end PLUS Select Projdect ***********************************/
	
	var pushLeft = new Menu({
		wrapper: '#section_cen',
		type: 'slide-left',
		menuOpenerClass: '.c-button',
		maskId: '#c-mask'
	});
	$(document).on('click', '#c-button--slide-left', function(e){
		e.preventDefault;
		pushLeft.open();
	});
	
	var select = $(".selectSet select");
	select.change(function(){
		var select_name = $(this).children("option:selected").text();
		$(this).siblings("strong").text(select_name);
	});
	for (i=0; i<$(".selectSet select").length; i++){
		var select_ = $(".selectSet select").get(i);
		if($(select_).is(":disabled")) $(select_).siblings('strong').css('opacity','0.5');
	} // select disabled opacity

	/* device */
	var isMobile = function () {
		return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	};
	if (isMobile()){
	}
	var isMobile2 = function () {
		//return /iPhone|iPad|iPod/i.test(navigator.userAgent);
		return /Android/i.test(navigator.userAgent);
	};
	if (isMobile2()){
		$('body').addClass('androidCase');
	} else {
		$('body').addClass('iosCase');
	}
	/* end device */
});

