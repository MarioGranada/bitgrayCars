$(window).resize(function(){
	resizeCorrections();
});
function resizeCorrections(){
	if ($(window).width()>=768) {
		$(".navigation-links").css("display","block");
	}else{
		$(".navigation-links").css("display","none");
	}
}
function openPopup(element){
	$(".popup-overlay").toggleClass("popup-overlay-open");
	$(".car-popup-title").html($(element).siblings(".car-full-title").html());
	$(".car-details-image").html($(element).siblings(".main-car-img").html());
	$(".car-details").html($(element).siblings(".car-basic-info-box").html());
	$(".car-details").append($(element).siblings(".car-main-info"));
	$(".car-popup").fadeIn(500);
	// $(window).animate({scrollTop:0}, '500', 'swing');
	$("html, body").animate({ scrollTop: "0px" });
	return false;
}
function closePopup(){
	$(".car-popup").fadeOut(500);
	$(".popup-overlay").toggleClass("popup-overlay-open");
	$(".cars-dropdown-1-visible").toggleClass("cars-dropdown-1-visible");
	$(".car-details:eq(0)").toggleClass("detailed-car");
	return false;
}
function compareCars(element){
	// alert($(element).find(":selected").val());
	var selectedCar=$(element).find(":selected").val();
	var currentDropdown=$(element).attr("id");
	var newCarOnCompare="<div class='car-details'>"+$("#"+selectedCar).html()+"</div>"
	if ($(".car-details").size() == 1 ) {
		displaySecondaryCompareDropdown();
		$(".car-popup-container").append(newCarOnCompare);
		$(".car-details").toggleClass("compare-cars-col2");
		$(".car-details:eq(1)").toggleClass("last-compare-col");
		$(".car-details:eq(0)").toggleClass("detailed-car");

	};
	if ($(".car-details").size() == 2 ) {
	if (currentDropdown=="cars-dropdown-0") {
		
		$(".last-compare-col").remove();//In case the user is updating only the second car to compare and not adding a third one.
		$(".car-details").removeClass("compare-cars-col2");		
		$(".car-popup-container").append(newCarOnCompare);
		$(".car-details").toggleClass("compare-cars-col2");
		$(".car-details:eq(1)").toggleClass("last-compare-col");
	} else{
		$(".compare-cars-col2").toggleClass("compare-cars-col2");
		$(".car-popup-container").append(newCarOnCompare);
		$(".car-details").toggleClass("compare-cars-col3");
		$(".last-compare-col").toggleClass("last-compare-col");
		$(".car-details:eq(2)").toggleClass("last-compare-col");
	};

	};
	if ($(".car-details").size() == 3 ) {
		$(".last-compare-col").remove();//In case the user is updating only the third car to compare. 
		//In this case, it doesn't matter which dropdown is selected, since there are three cars already, the app will update the third one.
		$(".car-details").removeClass("compare-cars-col3");
		$(".car-popup-container").append(newCarOnCompare);
		$(".car-details").toggleClass("compare-cars-col3");
		$(".car-details:eq(2)").toggleClass("last-compare-col");
	};
}
function displaySecondaryCompareDropdown(){
	$(".cars-dropdown-1").toggleClass("cars-dropdown-1-visible");
}
function openNavMobile(element){
	$(".navigation-links").animate({width:'toggle'},500);
	$(element).toggleClass("mobile-toggle-open");
	$(".view-frame").toggleClass("mobile-view-open");
	$("footer").toggleClass("mobile-footer-open");
	$(".bitgray-logo-link").toggleClass("mobile-footer-open");
}