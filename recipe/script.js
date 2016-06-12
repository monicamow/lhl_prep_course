$(document).ready(function() {
	$(".unhide-img").hide();

	//

	$(".hide-img").click(function() { // need help to nest these into one $(".hide-img")
		$("img").hide();
	})

	$(".hide-img").click(function() {
		$(".unhide-img").show();
	})

	$(".hide-img").click(function() {
		$(this).hide();
	})	

	//

	$(".unhide-img").click(function() { // same as comment above
		$("img").show();
	})

	$(".unhide-img").click(function() {
		$(".hide-img").show();
	})

	$(".unhide-img").click(function() {
		$(this).hide();
	})

	//

	$("li").click(function() {
		$(this).wrap("<strike>");
	})

	$("#directions p").hover(function() {
		$(this).addClass("highlight")
	}, function() {
		$(this).removeClass("highlight");
	})
});
