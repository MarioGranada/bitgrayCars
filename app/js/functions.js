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
function openPopup(element){
	$(".popup-overlay").toggleClass("popup-overlay-open");
	$(".car-popup-title").html($(element).siblings(".car-full-title").html());
	$(".car-details-image").html($(element).siblings(".main-car-img").html());
	$(".car-details").html($(element).siblings(".car-basic-info-box").html())
	$(".car-details").append($(element).siblings(".car-main-info"));
	$(".car-popup").fadeIn(500);
	// $(window).animate({scrollTop:0}, '500', 'swing');
	$("html, body").animate({ scrollTop: "0px" });
	return false;
}
function closePopup(){
	$(".car-popup").fadeOut(500);
	$(".popup-overlay").toggleClass("popup-overlay-open");
	return false;
}