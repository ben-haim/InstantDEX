

var IDEX = (function(IDEX, $, undefined) 
{
	var $contentWrap = $("#content_wrap");
	
	
	$(".popup-header-close").on("click", function()
	{
		var $popup = $(this).closest(".popup");
		$popup.removeClass("active");
	})
	
	
	$("#topLogoWrap").on("click", function()
	{
		window.location.reload()
	})

	
	$(".popup-trig").on("mousedown", function(e)
	{
		$(this).addClass("mousedown");
	})
	
	$(".popup-trig").on("mouseover", function(e)
	{
		$(this).addClass("mouseover");
	})
	
	$(".popup-trig").on("mouseleave", function(e)
	{
		$(this).removeClass("mouseover");
	})
	
	$(document).on("mouseup", function(e)
	{
		$(".popup-trig").removeClass("mousedown");
	})
	

	$contentWrap.on("mouseover", ".chart-style", function()
	{
		$(this).find(".dropdown-wrap").addClass("active");
		$(this).find(".dropdown-title").addClass("active");
	})
	
	$contentWrap.on("mouseleave", ".chart-style", function()
	{
		$(this).find(".dropdown-wrap").removeClass("active");
		$(this).find(".dropdown-title").removeClass("active");
	})
	
	
	$contentWrap.on("mouseover", ".chart-time-button-outer", function()
	{
		var $wrap = $(this).closest(".chart-time-wrap");
		$wrap.find(".chart-time-dropdown-wrap").addClass("active");
	})
	
	$contentWrap.on("mouseleave", ".chart-time-wrap", function()
	{
		var $wrap = $(this)
		$wrap.find(".chart-time-dropdown-wrap").removeClass("active");
	})
	
	$contentWrap.on("click", ".chart-time-dropdown-wrap li", function()
	{
		var $wrap = $(this).closest(".chart-time-wrap");
		var isSwitch = $(this).hasClass("time-change");		
		var val = $(this).attr("data-val");	
	
		if (isSwitch)
		{
			$wrap.find("ul").removeClass("active");
			var $otherList = $wrap.find("ul[data-inttype='"+val+"']")
			var $otherCell = $otherList.find("li.active")
			val = $otherCell.attr("data-val");
			var title = $otherCell.text();
			$otherList.addClass("active");
		}
		else
		{
			var $list = $(this).closest("ul");
			var title = $(this).text();

			$list.find("li").removeClass("active");
			$(this).addClass("active");
		}
		
		$wrap.find(".chart-time-button-title span").text(title);

	})
	
	
	
	
	/*		DROPDOWN		*/
	
	$contentWrap.on("mouseover", ".dropdown-list-wrap", function()
	{
		$(this).find(".dropdown-list").addClass("active");
		$(this).find(".dropdown-title").addClass("active");
	})
	
	$contentWrap.on("mouseleave", ".dropdown-list-wrap", function()
	{
		$(this).find(".dropdown-list").removeClass("active");
		$(this).find(".dropdown-title").removeClass("active");
	})

	
	$contentWrap.on("click", ".dropdown-list li", function()
	{
		var $wrap = $(this).closest(".dropdown-list-wrap");
		
		if ($wrap.hasClass("dropdown-list-mult-wrap") || $wrap.hasClass("tile-header-link-dropdown"))
		{
			
		}
		else
		{
			var $list = $(this).closest("ul");

			var val = $(this).attr("data-val");	
			var title = $(this).text();

			$list.find("li").removeClass("active");
			$(this).addClass("active");
			
			$wrap.find(".dropdown-title span").text(title);
			$wrap.trigger("mouseleave");
		}
	})

	
	$(".temp-exit").on("click", function()
	{
		IDEX.hideLoading();
	})
	
	
	
	return IDEX;
	
	
}(IDEX || {}, jQuery));




