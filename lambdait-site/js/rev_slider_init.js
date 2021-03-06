
/******************************************
-	PREPARE PLACEHOLDER FOR SLIDER	-
******************************************/
var setREVStartSize_first = function() {
	"use strict";
	var	tpopt = new Object();
	tpopt.startwidth = 1060;
	tpopt.startheight = 600;
	tpopt.container = jQuery('#rev_slider_1_1');
	tpopt.fullScreen = "on";
	tpopt.forceFullWidth="off";
	tpopt.container.closest(".rev_slider_wrapper").css({height:tpopt.container.height()});tpopt.width=parseInt(tpopt.container.width(),10);tpopt.height=parseInt(tpopt.container.height(),10);tpopt.bw=tpopt.width/tpopt.startwidth;tpopt.bh=tpopt.height/tpopt.startheight;if(tpopt.bh>tpopt.bw)tpopt.bh=tpopt.bw;if(tpopt.bh<tpopt.bw)tpopt.bw=tpopt.bh;if(tpopt.bw<tpopt.bh)tpopt.bh=tpopt.bw;if(tpopt.bh>1){tpopt.bw=1;tpopt.bh=1}if(tpopt.bw>1){tpopt.bw=1;tpopt.bh=1}tpopt.height=Math.round(tpopt.startheight*(tpopt.width/tpopt.startwidth));if(tpopt.height>tpopt.startheight&&tpopt.autoHeight!="on")tpopt.height=tpopt.startheight;if(tpopt.fullScreen=="on"){tpopt.height=tpopt.bw*tpopt.startheight;var cow=tpopt.container.parent().width();var coh=jQuery(window).height();if(tpopt.fullScreenOffsetContainer!=undefined){try{var offcontainers=tpopt.fullScreenOffsetContainer.split(",");jQuery.each(offcontainers,function(e,t){coh=coh-jQuery(t).outerHeight(true);if(coh<tpopt.minFullScreenHeight)coh=tpopt.minFullScreenHeight})}catch(e){}}tpopt.container.parent().height(coh);tpopt.container.height(coh);tpopt.container.closest(".rev_slider_wrapper").height(coh);tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(coh);tpopt.container.css({height:"100%"});tpopt.height=coh;}else{tpopt.container.height(tpopt.height);tpopt.container.closest(".rev_slider_wrapper").height(tpopt.height);tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(tpopt.height);}
};
/* CALL PLACEHOLDER */
setREVStartSize_first();
var tpj=jQuery;
tpj.noConflict();
var revapi1;
tpj(document).ready(function() {
	"use strict";
	if(tpj('#rev_slider_1_1').revolution == undefined)
		revslider_showDoubleJqueryError('#rev_slider_1_1');
	else
		revapi1 = tpj('#rev_slider_1_1').show().revolution(
		{
			dottedOverlay:"twoxtwo",
			delay:6000,
			startwidth:1060,
			startheight:600,
			hideThumbs:200,
			thumbWidth:100,
			thumbHeight:50,
			thumbAmount:3,
			navigationType:"none",
			navigationArrows:"solo",
			navigationStyle:"custom",
			touchenabled:"on",
			onHoverStop:"off",
			swipe_velocity: 0.7,
			swipe_min_touches: 1,
			swipe_max_touches: 1,
			drag_block_vertical: false,

			parallax:"scroll",
			parallaxBgFreeze:"off",
			parallaxLevels:[5,10,15,20,25,30,35,40,45,50],
			parallaxDisableOnMobile:"on",

			keyboardNavigation:"off",
			navigationHAlign:"center",
			navigationVAlign:"bottom",
			navigationHOffset:0,
			navigationVOffset:20,
			soloArrowLeftHalign:"left",
			soloArrowLeftValign:"center",
			soloArrowLeftHOffset:20,
			soloArrowLeftVOffset:0,
			soloArrowRightHalign:"right",
			soloArrowRightValign:"center",
			soloArrowRightHOffset:20,
			soloArrowRightVOffset:0,
			shadow:0,
			fullWidth:"off",
			fullScreen:"on",
			spinner:"spinner0",
			stopLoop:"off",
			stopAfterLoops:-1,
			stopAtSlide:-1,
			shuffle:"off",

			forceFullWidth:"off",
			fullScreenAlignForce:"off",
			minFullScreenHeight:"",

			hideThumbsOnMobile:"off",
			hideNavDelayOnMobile:1500,
			hideBulletsOnMobile:"off",
			hideArrowsOnMobile:"on",
			hideThumbsUnderResolution:0,
			fullScreenOffsetContainer: "#wpadminbar",
			fullScreenOffset: "",
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			startWithSlide:0	
		});

});	
/******************************************
-	PREPARE PLACEHOLDER FOR SLIDER	-
******************************************/
var setREVStartSize_second = function() {
	"use strict";
	var	tpopt = new Object();
	tpopt.startwidth = 1060;
	tpopt.startheight = 700;
	tpopt.container = jQuery('#rev_slider_2_1');
	tpopt.fullScreen = "on";
	tpopt.forceFullWidth="on";
	tpopt.container.closest(".rev_slider_wrapper").css({height:tpopt.container.height()});tpopt.width=parseInt(tpopt.container.width(),10);tpopt.height=parseInt(tpopt.container.height(),10);tpopt.bw=tpopt.width/tpopt.startwidth;tpopt.bh=tpopt.height/tpopt.startheight;if(tpopt.bh>tpopt.bw)tpopt.bh=tpopt.bw;if(tpopt.bh<tpopt.bw)tpopt.bw=tpopt.bh;if(tpopt.bw<tpopt.bh)tpopt.bh=tpopt.bw;if(tpopt.bh>1){tpopt.bw=1;tpopt.bh=1}if(tpopt.bw>1){tpopt.bw=1;tpopt.bh=1}tpopt.height=Math.round(tpopt.startheight*(tpopt.width/tpopt.startwidth));if(tpopt.height>tpopt.startheight&&tpopt.autoHeight!="on")tpopt.height=tpopt.startheight;if(tpopt.fullScreen=="on"){tpopt.height=tpopt.bw*tpopt.startheight;var cow=tpopt.container.parent().width();var coh=jQuery(window).height();if(tpopt.fullScreenOffsetContainer!=undefined){try{var offcontainers=tpopt.fullScreenOffsetContainer.split(",");jQuery.each(offcontainers,function(e,t){coh=coh-jQuery(t).outerHeight(true);if(coh<tpopt.minFullScreenHeight)coh=tpopt.minFullScreenHeight})}catch(e){}}tpopt.container.parent().height(coh);tpopt.container.height(coh);tpopt.container.closest(".rev_slider_wrapper").height(coh);tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(coh);tpopt.container.css({height:"100%"});tpopt.height=coh;}else{tpopt.container.height(tpopt.height);tpopt.container.closest(".rev_slider_wrapper").height(tpopt.height);tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(tpopt.height);}
};
/* CALL PLACEHOLDER */
setREVStartSize_second();
var tpj=jQuery;
tpj.noConflict();
var revapi2;
tpj(document).ready(function() {
	"use strict";
	if(tpj('#rev_slider_2_1').revolution == undefined)
		revslider_showDoubleJqueryError('#rev_slider_2_1');
	else
		revapi2 = tpj('#rev_slider_2_1').show().revolution(
		{
			dottedOverlay:"twoxtwo",
			delay:9000,
			startwidth:1060,
			startheight:700,
			hideThumbs:200,
			thumbWidth:100,
			thumbHeight:50,
			thumbAmount:4,

			simplifyAll:"off",
			navigationType:"bullet",
			navigationArrows:"solo",
			navigationStyle:"preview4",
			touchenabled:"on",
			onHoverStop:"off",
			nextSlideOnWindowFocus:"off",
			swipe_threshold: 0.7,
			swipe_min_touches: 1,
			drag_block_vertical: false,

			keyboardNavigation:"off",
			navigationHAlign:"center",
			navigationVAlign:"bottom",
			navigationHOffset:0,
			navigationVOffset:20,
			soloArrowLeftHalign:"left",
			soloArrowLeftValign:"center",
			soloArrowLeftHOffset:20,
			soloArrowLeftVOffset:0,
			soloArrowRightHalign:"right",
			soloArrowRightValign:"center",
			soloArrowRightHOffset:20,
			soloArrowRightVOffset:0,
			shadow:0,
			fullWidth:"off",
			fullScreen:"on",
			spinner:"spinner0",

			stopLoop:"off",
			stopAfterLoops:-1,
			stopAtSlide:-1,
			shuffle:"off",

			forceFullWidth:"on",
			fullScreenAlignForce:"off",
			minFullScreenHeight:"400",

			hideThumbsOnMobile:"off",
			hideNavDelayOnMobile:1500,
			hideBulletsOnMobile:"off",
			hideArrowsOnMobile:"off",
			hideThumbsUnderResolution:0,
			fullScreenOffsetContainer: "#wpadminbar",
			fullScreenOffset: "",
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			startWithSlide:0	
		});
});	

/******************************************
-	PREPARE PLACEHOLDER FOR SLIDER	-
******************************************/
var setREVStartSize_third = function() {
	"use strict";
	var	tpopt = new Object();
	tpopt.startwidth = 1060;
	tpopt.startheight = 600;
	tpopt.container = jQuery('#rev_slider_3_1');
	tpopt.fullScreen = "on";
	tpopt.forceFullWidth="off";
	tpopt.container.closest(".rev_slider_wrapper").css({height:tpopt.container.height()});tpopt.width=parseInt(tpopt.container.width(),10);tpopt.height=parseInt(tpopt.container.height(),10);tpopt.bw=tpopt.width/tpopt.startwidth;tpopt.bh=tpopt.height/tpopt.startheight;if(tpopt.bh>tpopt.bw)tpopt.bh=tpopt.bw;if(tpopt.bh<tpopt.bw)tpopt.bw=tpopt.bh;if(tpopt.bw<tpopt.bh)tpopt.bh=tpopt.bw;if(tpopt.bh>1){tpopt.bw=1;tpopt.bh=1}if(tpopt.bw>1){tpopt.bw=1;tpopt.bh=1}tpopt.height=Math.round(tpopt.startheight*(tpopt.width/tpopt.startwidth));if(tpopt.height>tpopt.startheight&&tpopt.autoHeight!="on")tpopt.height=tpopt.startheight;if(tpopt.fullScreen=="on"){tpopt.height=tpopt.bw*tpopt.startheight;var cow=tpopt.container.parent().width();var coh=jQuery(window).height();if(tpopt.fullScreenOffsetContainer!=undefined){try{var offcontainers=tpopt.fullScreenOffsetContainer.split(",");jQuery.each(offcontainers,function(e,t){coh=coh-jQuery(t).outerHeight(true);if(coh<tpopt.minFullScreenHeight)coh=tpopt.minFullScreenHeight})}catch(e){}}tpopt.container.parent().height(coh);tpopt.container.height(coh);tpopt.container.closest(".rev_slider_wrapper").height(coh);tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(coh);tpopt.container.css({height:"100%"});tpopt.height=coh;}else{tpopt.container.height(tpopt.height);tpopt.container.closest(".rev_slider_wrapper").height(tpopt.height);tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(tpopt.height);}
};
/* CALL PLACEHOLDER */
setREVStartSize_third();
var tpj=jQuery;
tpj.noConflict();
var revapi3;
tpj(document).ready(function() {
	"use strict";
	if(tpj('#rev_slider_3_1').revolution == undefined)
		revslider_showDoubleJqueryError('#rev_slider_3_1');
	else
		revapi3 = tpj('#rev_slider_3_1').show().revolution(
		{
			dottedOverlay:"twoxtwo",
			delay:7000,
			startwidth:1060,
			startheight:600,
			hideThumbs:200,
			thumbWidth:100,
			thumbHeight:50,
			thumbAmount:5,

			simplifyAll:"off",
			navigationType:"none",
			navigationArrows:"solo",
			navigationStyle:"preview1",
			touchenabled:"on",
			onHoverStop:"off",
			nextSlideOnWindowFocus:"off",
			swipe_threshold: 0.7,
			swipe_min_touches: 1,
			drag_block_vertical: false,

			keyboardNavigation:"on",
			navigationHAlign:"center",
			navigationVAlign:"bottom",
			navigationHOffset:0,
			navigationVOffset:20,
			soloArrowLeftHalign:"left",
			soloArrowLeftValign:"center",
			soloArrowLeftHOffset:20,
			soloArrowLeftVOffset:0,
			soloArrowRightHalign:"right",
			soloArrowRightValign:"center",
			soloArrowRightHOffset:20,
			soloArrowRightVOffset:0,
			shadow:0,
			fullWidth:"off",
			fullScreen:"on",
			spinner:"spinner0",

			stopLoop:"off",
			stopAfterLoops:-1,
			stopAtSlide:-1,
			shuffle:"off",

			forceFullWidth:"off",
			fullScreenAlignForce:"off",
			minFullScreenHeight:"400",

			hideThumbsOnMobile:"off",
			hideNavDelayOnMobile:1500,
			hideBulletsOnMobile:"off",
			hideArrowsOnMobile:"off",
			hideThumbsUnderResolution:0,
			fullScreenOffsetContainer: "#wpadminbar",
			fullScreenOffset: "",
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			startWithSlide:0	
		});

});	
/******************************************
-	PREPARE PLACEHOLDER FOR SLIDER	-
******************************************/
var setREVStartSize_fourth = function() {
	"use strict";
	var	tpopt = new Object();
	tpopt.startwidth = 1060;
	tpopt.startheight = 600;
	tpopt.container = jQuery('#rev_slider_4_1');
	tpopt.fullScreen = "on";
	tpopt.forceFullWidth="off";
	tpopt.container.closest(".rev_slider_wrapper").css({height:tpopt.container.height()});tpopt.width=parseInt(tpopt.container.width(),10);tpopt.height=parseInt(tpopt.container.height(),10);tpopt.bw=tpopt.width/tpopt.startwidth;tpopt.bh=tpopt.height/tpopt.startheight;if(tpopt.bh>tpopt.bw)tpopt.bh=tpopt.bw;if(tpopt.bh<tpopt.bw)tpopt.bw=tpopt.bh;if(tpopt.bw<tpopt.bh)tpopt.bh=tpopt.bw;if(tpopt.bh>1){tpopt.bw=1;tpopt.bh=1}if(tpopt.bw>1){tpopt.bw=1;tpopt.bh=1}tpopt.height=Math.round(tpopt.startheight*(tpopt.width/tpopt.startwidth));if(tpopt.height>tpopt.startheight&&tpopt.autoHeight!="on")tpopt.height=tpopt.startheight;if(tpopt.fullScreen=="on"){tpopt.height=tpopt.bw*tpopt.startheight;var cow=tpopt.container.parent().width();var coh=jQuery(window).height();if(tpopt.fullScreenOffsetContainer!=undefined){try{var offcontainers=tpopt.fullScreenOffsetContainer.split(",");jQuery.each(offcontainers,function(e,t){coh=coh-jQuery(t).outerHeight(true);if(coh<tpopt.minFullScreenHeight)coh=tpopt.minFullScreenHeight})}catch(e){}}tpopt.container.parent().height(coh);tpopt.container.height(coh);tpopt.container.closest(".rev_slider_wrapper").height(coh);tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(coh);tpopt.container.css({height:"100%"});tpopt.height=coh;}else{tpopt.container.height(tpopt.height);tpopt.container.closest(".rev_slider_wrapper").height(tpopt.height);tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(tpopt.height);}
};
/* CALL PLACEHOLDER */
setREVStartSize_fourth();
var tpj=jQuery;
tpj.noConflict();
var revapi4;
tpj(document).ready(function() {
	"use strict";
	if(tpj('#rev_slider_4_1').revolution == undefined)
		revslider_showDoubleJqueryError('#rev_slider_4_1');
	else
		revapi4 = tpj('#rev_slider_4_1').show().revolution(
		{
			dottedOverlay:"twoxtwo",
			delay:6000,
			startwidth:1060,
			startheight:600,
			hideThumbs:200,
			thumbWidth:100,
			thumbHeight:50,
			thumbAmount:3,

			simplifyAll:"off",
			navigationType:"none",
			navigationArrows:"solo",
			navigationStyle:"custom",
			touchenabled:"on",
			onHoverStop:"off",
			nextSlideOnWindowFocus:"off",
			swipe_threshold: 0.7,
			swipe_min_touches: 1,
			drag_block_vertical: false,

			keyboardNavigation:"off",
			navigationHAlign:"center",
			navigationVAlign:"bottom",
			navigationHOffset:0,
			navigationVOffset:20,
			soloArrowLeftHalign:"left",
			soloArrowLeftValign:"center",
			soloArrowLeftHOffset:20,
			soloArrowLeftVOffset:0,
			soloArrowRightHalign:"right",
			soloArrowRightValign:"center",
			soloArrowRightHOffset:20,
			soloArrowRightVOffset:0,
			shadow:0,
			fullWidth:"off",
			fullScreen:"on",
			spinner:"spinner0",

			stopLoop:"off",
			stopAfterLoops:-1,
			stopAtSlide:-1,
			shuffle:"off",

			forceFullWidth:"off",
			fullScreenAlignForce:"off",
			minFullScreenHeight:"",

			hideThumbsOnMobile:"off",
			hideNavDelayOnMobile:1500,
			hideBulletsOnMobile:"off",
			hideArrowsOnMobile:"off",
			hideThumbsUnderResolution:0,
			fullScreenOffsetContainer: "#wpadminbar",
			fullScreenOffset: "",
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			startWithSlide:0	
		});

});	