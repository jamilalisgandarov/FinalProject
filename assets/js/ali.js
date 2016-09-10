/* GIVING RESPONSIVITY FOR PANELS */
var panelWidth = $('.thumb').width() + 10 * 2; //.thumb width + 10 * 2 for margins

function FixPanelSizes() {
	//getting number of panels in one row
	numbOfPanels = ChooseNumberOfPanels();

	//calculate width of row
	thumbWrapper = numbOfPanels * panelWidth;
	$('.thumbWrapper').css('width', thumbWrapper + 'px');
}

function ChooseNumberOfPanels() {
	var windowWidth = $(window).width();
	if (windowWidth >= 1720) {
		return 7;
	} else if (windowWidth >= 1480) {
		return 6;
	} else if (windowWidth >= 1260) {
		return 5;
	} else if (windowWidth >= 900) {
		return 4;
	} else if (windowWidth >= 700) {
		return 3;
	} else if (windowWidth >= 580) {
		return 2;
	} else {
		return 1;
	}
}

FixPanelSizes();

$(window).resize(function(){
	FixPanelSizes();
});

/* *************************************************************************** */

//Changing text of thumbType on hover
$('.thumbType a').mouseenter(function(){
	$('.thumbType a').text('View Gallery');
})
$('.thumbType a').mouseleave(function(){
	$('.thumbType a').text('Motion');
})

/* *************************************************************************** */
/* CONFIG FOR POP-UP WINDOW(.smallInfo) */

function SmallInfoConfig(bigId, smallId) {
	var bottomOfThumb = $(bigId).offset().top + 230 + 5- 55*2; //230 is height of .thumb
	var rightOfThumb = $(bigId).offset().left + 215;

	//first decide to pop on bottom or top
	var freeBottomSpace = $(window).height() - bottomOfThumb;
	var freeRightSpace = $(window).width() - rightOfThumb;

	var leftPos = $(bigId).offset().left + $(bigId).width() / 2 + 40;

	//check if no space to put pop-up on right of thumb
	if (freeRightSpace < 300) {
		//put pop-up on left side
		var leftPos = $(bigId).offset().left - $(bigId).width() + 40;
	}

	if (freeBottomSpace < 190) {
		bottomOfThumb -= 230;
	}

	//SET POSITIONS
	$(smallId).css({
		'top' 	: bottomOfThumb + 'px',
		'left' 	: leftPos + 'px'
	})
	$(smallId).removeClass('hide');
}

if ($(window).width() > 1005) {
	$('.user_name').mouseenter(function(){
		parent = $(this).parent().parent().parent();
		bigId = '#' + $(parent).attr('id') + '';
		smallId = '#user_small_' + $(parent).attr('id');
		SmallInfoConfig(bigId, smallId);
	})

	$('.smallInfo').mouseleave(function() {
		// parent = $(this).parent().parent().parent();
		// bigId = '#' + $(parent).attr('id') + '';
		// smallId = '#user_small_' + $(parent).attr('id');
		// $(smallId).addClass('hide');
		$(this).addClass('hide');
	})
}



