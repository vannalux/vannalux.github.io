jQuery(document).ready(function($){

// адаптивность изображений
$('img').each(function(){ 
	$(this).removeAttr('height');
});

// обработка полей фильтра
$('[name=search]').submit(function(e){
	form = $(this);
	if($(this).find('[name=s]').val() === ''){
		$(this).find('[name=s]').removeAttr('name');	
	}
	$(this).find('[data-taxonomy]').each(function(){
		values = [];
		taxonomy = $(this).attr('data-taxonomy');
		$(this).find('input:checked:enabled').each(function(){
			values.push($(this).val());
			$(this).removeAttr('name');
		})
		form.append('<input type = "hidden" name = "'+taxonomy+'" value = "'+values.join(',')+'">');
	});
});
	
// слайдер диапозонов значений
$('[data-range-slider]').each( function(){
	field = $(this).attr('data-range-slider');
	$(this).slider({
	step: parseInt($(this).attr('data-ui-slider')), 
	range: true,
	min: parseInt($("[name=min_pm_"+field+"]").attr('data-value')),
	max: parseInt($("[name=max_pm_"+field+"]").attr('data-value')),
	values: [ parseInt($("[name=min_pm_"+field+"]").val()), parseInt($("[name=max_pm_"+field+"]").val()) ], 
	slide: function(event, ui) { 
		$("[name=min_pm_"+field+"]").val(ui.values[0]).keyup(); 
		$("[name=max_pm_"+field+"]").val(ui.values[1]).keyup();
	}
	});
});
	
});