$(document).ready(function(){
	var truncate = $(".paragraph-conatiner p:first-child").text().substr(0, 250);
	$(".paragraph-conatiner p:first-child").text(truncate)
});
