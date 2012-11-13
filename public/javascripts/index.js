$(document).ready(function() {
		
	$("#walrusboy").css("display", "none");
 
    $("#readme").click(function(event){
         $("#walrusboy").fadeIn(2000);  
    });
	$("#readme2").click(function(event){
         $("#walrusboy").fadeIn(2000);  
    });
	$('#readme').hover(
       function(){ $(this).addClass('slightly') },
       function(){ $(this).removeClass('slighty') }
)
});

