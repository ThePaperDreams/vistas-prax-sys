jQuery(function(){
	jQuery(".pretty-file-input").fileinput({
	    language: "es",
	});
	jQuery("aside .list-group ul").css("display", "none");

	jQuery("aside .list-group .list-group-item").click(function(e){		
		e.stopPropagation();
		var ul = jQuery(this).find("ul");

		if(jQuery(this).hasClass("open")){
			jQuery(this).removeClass("open");
		} else {
			jQuery(this).addClass("open");
		}

		if(ul.length){
			ul.slideToggle();			
			return false;
		}
	});

	jQuery("aside .list-group .list-group-item ul a").click(function(e){
		e.stopPropagation();		
	});
});