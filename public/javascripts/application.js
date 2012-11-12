	$(document).ready(function() {
		
	$(".container").css("display", "none");
 
    $(".container").fadeIn(2000);
 
    $("a.transition").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(1000, redirectPage);      
    });
	$('button').hover(
       function(){ $(this).addClass('highlighted') },
       function(){ $(this).removeClass('highlighted') }
)
});

	$('.bright').each(function() {
		var default_value = this.value;
		$(this).focus(function() {
			if(this.value == default_value) {
				this.value = '';
			}
		});
		$(this).blur(function() {
			if(this.value == '') {
				this.value = default_value;
			}
			
			});
	});


function clearDefault(el) {
	if (el.defaultValue==el.value) el.value = ""
	// If Dynamic Style is supported, clear the style
	if (el.style) el.style.cssText = ""
}

 $(function() {
  var availableTags = [
		{label:"Nick Jordan", value:"/tweet/nick_sb"},
		{label:"Brian Fischer", value:"/tweet/fisch"},
		{label:"Reed Law", value:"/tweet/reedlaw"},
		{label:"Eric Guess", value:"/tweet/guess"},
		{label:"Brad Barbin", value:"/tweet/brad"},
		{label:"Leonel Galan", value:"/tweet/leo"},
		{label:"Jonathan Stephens", value:"/tweet/jon"},
		{label:"Alexander Belaeyv", value:"/tweet/alex"},
		{label:"Dante Passera", value:"/tweet/dante"},
		{label:"Biko Tushinde", value:"/tweet/biko"},
		{label:"Chike Lawrence-Mitchell", value:"/tweet/chike"},
		{label:"Eric Harmon", value:"/tweet/eric"},
		{label:"Matt McFarling", value:"/tweet/matt"},
		{label:"Kenneth Nicholson", value:"/tweet/kenneth"},
		{label:"Charles Adair", value:"/tweet/charles"},		
  ];
  $( "#search" ).autocomplete({
	minLength: 2,
	autoFocus: true,
   source: function(request, response) {
        var results = $.ui.autocomplete.filter(availableTags, request.term);

        response(results.slice(0, 5));
    },
   select: function(event, ui) {
                                $('#search').css('color', 'white');
								var selectedObj = ui.item;
                                document.location.href = selectedObj.value;
								
  
   }
  });
 });
 
