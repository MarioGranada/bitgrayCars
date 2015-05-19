$(window).resize(function(){
	resizeColorRows();
});
function resizeColorRows(){
	var windowHeight=$(window).height();
	var rowHeight=windowHeight/3;
	$(".login-color-row").css("height",rowHeight);

}