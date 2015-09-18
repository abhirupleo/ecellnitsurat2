$(document).ready(function() {
	$(window).scroll(function(){
        var y = $(document).scrollTop();
        var menu = $(".menubar"); 
        if(y>30){
    	menu.addClass("fixed");
    } 
    else{
    	menu.removeClass("fixed");
    } 
    }) 
});