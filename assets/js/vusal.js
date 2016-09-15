var Width = $('.boxes').width() + 30;

	FixPanelSizes();

	$(window).resize(function(){
	    FixPanelSizes();

	});

	function FixPanelSizes() {
	    
	    numbOfPanels = NumberOfPanels();

	    itemsMain = numbOfPanels * Width;
	    
	    $('.itemsMain').css('width', itemsMain + 'px');
	}

	function NumberOfPanels() {
	    var windowWidth = $(window).width();
	    if (windowWidth >= 800) {
	        return 4;
	    } else if (windowWidth >= 600) {
	        return 3;
	    } else if (windowWidth >= 400) {
	        return 2;
	    }else {
	        return 1;
	    }
	}