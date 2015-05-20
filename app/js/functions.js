$(window).resize(function(){
	resizeColorRows();
});
function resizeColorRows(){
	var windowHeight=$(window).height();
	var rowHeight=windowHeight/3;
	$(".login-color-row").css("height",rowHeight);
	return false;
}
function openAlbum(element){
	$(element).children(".album-arrow").toggleClass("album-arrow-open");
	$(element).siblings(".image-box-container").toggleClass("image-box-container-shown")
	return false;
}
function openImagePopup(element){
	$(".popup-overlay").toggleClass("popup-overlay-open");
	$(element).siblings(".image-window").toggleClass("image-window-open")
	return false;
}
function closePopup(){
	$(".popup-overlay").toggleClass("popup-overlay-open");
	$(".image-window-open").toggleClass("image-window-open");
	return false;
}