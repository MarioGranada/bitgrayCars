$(window).resize(function(){
	resizeColorRows();
});
function resizeColorRows(){
	console.log("Login page changed colors");
	var windowHeight=$(window).height();
	var rowHeight=windowHeight/3;
	$(".login-color-row").css("height",rowHeight);

}