$(document).ready(function(){	
	$('.number_input').bind('keypress',function(e){
		if(e.which==13) {
			
		}
		else if((e.which < 48  || e.which > 57 ) && e.which!=13 && e.which!=8 && e.which!=127 &&  e.which!=0)
		{
			e.preventDefault();
			return false;
		}
	});//*/
	
	$(this).bind('keydown',function(e){
		//F1-F12 : 112-123
		if(e.which>=112 && e.which<=123 && e.which !=116)
		{
			alert(e.which);
			e.preventDefault();
		}
	});
});