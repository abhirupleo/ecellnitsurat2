$(document).ready(function() {
	$(window).scroll(function(){
        var y = $(document).scrollTop();
        var menu = $(".menubar"); 
        if(y>50){
    	menu.addClass("fixed");
    } 
    else{
    	menu.removeClass("fixed");
    } 
    }) 
});