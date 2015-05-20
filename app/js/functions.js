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
	//This causes to other window which are closed to open up, in this case it is better to remove the 'open' class instead of toggling
	$(".image-window-open").toggleClass("image-window-open");
	return false;
}