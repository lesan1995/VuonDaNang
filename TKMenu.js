$(document).ready(function(){
	$("#content").load("index.html");
	$("input").on({
		focus: function(){
			$(this).css("background-color","#cccccc");
		},
		blur: function(){
			$(this).css("background-color","#ffffff");
		}

	});
});