$(document).ready(function(){

	// binding click event to determine which display was clicked and how the page renders
	$("a.toggler").bind("click", function(e){
		e.preventDefault();
		
		var theid = $(this).attr("id");
		var theitems = $("ul#items");
		var classNames = $(this).attr('class').split(' ');
		
		
		if($(this).hasClass("active")) {

			// if current button has an active class then don't do anything

			return false;
		} else {
			// or else clicking inactive button will switch view state

  			if(theid == "view_grid") {

				$(this).addClass("active");
				$("#view_list").removeClass("active");
			
				// remove the list class and change to grid
				theitems.removeClass("list");
				theitems.addClass("grid");
			

			}
			
			else if(theid == "view_list") {
				$(this).addClass("active");
				$("#view_grid").removeClass("active");
										
				// remove the grid view and change to list view
				theitems.removeClass("grid");
				theitems.addClass("list");
			} 
		}

	});
});