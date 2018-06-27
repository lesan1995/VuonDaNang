$(document).ready(function(){
	$("#content").load("https://raw.githubusercontent.com/lesan1995/VuonDaNang/master/index.html");
	$("input").on({
		focus: function(){
			$(this).css("background-color","#cccccc");
		},
		blur: function(){
			$(this).css("background-color","#ffffff");
		}

	});
	$("#dangKyVuon").click(function(){
		$("#content").load("https://github.com/lesan1995/VuonDaNang/blob/master/DangKyVuon.html");
	});
});