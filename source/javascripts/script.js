/* Author: 

*/
var activeMenu = false;
jQuery(document).ready(function($) {
	
	$(window).load(function() {
		$('body').waitForImages(function() {   
		   $('body').addClass('loaded');
		});
	});	
	/* Royalslider video gallery */
	$('#video-gallery').royalSlider({
		arrowsNav: false,
		fadeinLoadedSlide: true,
		controlNavigationSpacing: 0,
		controlNavigation: 'thumbnails',
		thumbs: {
			autoCenter: false,
			fitInViewport: false,
			orientation: 'vertical',
			spacing: 0,
			paddingBottom: 0
		},
		keyboardNavEnabled: true,
		imageScaleMode: 'fill',
		imageAlignCenter:true,
		slidesSpacing: 0,
		loop: false,
		loopRewind: true,
		numImagesToPreload: 3,
		video: {
		  autoHideArrows:true,
		  autoHideControlNav:false,
		  autoHideBlocks: true
		}, 
		//autoScaleSlider: true, 
		//autoScaleSliderWidth: 960,     
		//autoScaleSliderHeight: 450,
		/* size of all images http://help.dimsemenov.com/kb/royalslider-jquery-plugin-faq/adding-width-and-height-properties-to-images */
		//imgWidth: 640,
		//imgHeight: 360
  });
	/* colorbox vimeo */
	$(".vimeo").colorbox({
		iframe: true,
		initialWidth: 1400,
		initialHeight: 760,
		width: '89%',
		height: '100%',
		opacity: .85,
		fixed: true,
		top: 0,
		left:0,
		title: false,
		onOpen:function(){
			$( "#cboxContent" ).append( "<div class='icon-bar'><i class='icon-close close-colorbox'></i></div>" );
			$('.icon-close').click(function() { 
				$.colorbox.close();
			});
		}
	});
	/* Menu actions */
	$('.menu-icon-wrap').click(function(){
		if(!activeMenu) {
	 		$('body').addClass('active-menu');
	 		activeMenu = true;
	 	} else {
	 		$('body').removeClass('active-menu');
	 		activeMenu = false;
	 	}
	});
});




















