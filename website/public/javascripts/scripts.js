$(document).ready(function() {
    'use strict';
    /*-----------------------------------------------------------------------------------*/
    /*	SCROLL NAVIGATION HIGHLIGHT
    /*-----------------------------------------------------------------------------------*/
    var headerWrapper = parseInt($('.navbar').height(), 10);
    var header_height = $('.navbar').height();
    var shrinked_header_height = 70;
    var firstStyle=
    {
        'padding-top':''+shrinked_header_height+'px',
        'margin-top':'-'+shrinked_header_height+'px'
    };
    $('.onepage section').css(firstStyle);
    var secondStyle=
    {
      'padding-top':''+header_height+'px',
      'margin-top':'-'+header_height+'px'
    };
    $('.onepage section:first-of-type').css(secondStyle);
    var offsetTolerance = -(header_height);
    //Detecting user's scroll
    $(window).scroll(function() {
        //Check scroll position
        var scrollPosition = parseInt($(this).scrollTop(), 10);
        //Move trough each menu and check its position with scroll position then add current class
        $('.onepage .navbar ul.navbar-nav a').each(function() {
            var thisHref = $(this).attr('href');
            var thisTruePosition = parseInt($(thisHref).offset().top, 10);
            var thisPosition = thisTruePosition - headerWrapper - offsetTolerance;
            if (scrollPosition >= thisPosition) {
                $('.current').removeClass('current');
                $('.navbar ul.navbar-nav a[href=' + thisHref + ']').parent('li').addClass('current');
            }
        });
        //If we're at the bottom of the page, move pointer to the last section
        var bottomPage = parseInt($(document).height(), 10) - parseInt($(window).height(), 10);
        if (scrollPosition == bottomPage || scrollPosition >= bottomPage) {
            $('.current').removeClass('current');
            $('.onepage .navbar ul.navbar-nav a:last').parent('li').addClass('current');
        }
    });
    /*-----------------------------------------------------------------------------------*/
    /*	MENU
	/*-----------------------------------------------------------------------------------*/
    $('.js-activated').dropdownHover({
        instantlyCloseOthers: false,
        delay: 0
    }).dropdown();
    $('.btn.responsive-menu').on('click', function() {
        $(this).toggleClass('opn');
    });
    $('.onepage .navbar .nav li a').on('click', function() {
        $('.navbar .navbar-collapse.in').collapse('hide');
        $('.btn.responsive-menu').removeClass('opn');
    });
    $('.offset').css('padding-top', $('.navbar').height() + 'px');
    /*-----------------------------------------------------------------------------------*/
	/*	STICKY FILTER HIGHLIGHT
	/*-----------------------------------------------------------------------------------*/
		var stickyWrapper		= parseInt($('#sticky-filter').height(), 10);
		var stickyOffsetTolerance	= 70;		
		//Detecting user's scroll
		$(window).scroll(function() {		
			//Check scroll position
			var stickyScrollPosition	= parseInt($(this).scrollTop(), 10);			
			//Move trough each menu and check its position with scroll position then add current class
			$('#sticky-filter a').each(function() {	
				var stickyThisHref				= $(this).attr('href');
				var stickyThisTruePosition	= parseInt($(stickyThisHref).offset().top, 10);
				var stickyThisPosition 		= stickyThisTruePosition - stickyWrapper - stickyOffsetTolerance;				
				if(stickyScrollPosition >= stickyThisPosition) {					
					$('.current').removeClass('current');
					$('#sticky-filter a[href='+ stickyThisHref +']').parent('li').addClass('current');					
				}
			});
			//If we're at the bottom of the page, move pointer to the last section
			var stickyBottomPage	= parseInt($(document).height(), 10) - parseInt($(window).height(), 10);			
			if(stickyScrollPosition == stickyBottomPage || stickyScrollPosition >= stickyBottomPage) {			
				$('.current').removeClass('current');
				$('#sticky-filter a:last').parent('li').addClass('current');
			}
		});
    /*-----------------------------------------------------------------------------------*/
    /*	LOCALSCROLL
	/*-----------------------------------------------------------------------------------*/
    $('.navbar, .scroll').localScroll({
        hash: true
    });
    $('#sticky-filter ul').localScroll({
	    offset: {top:-134, left:0}
    });
    /*-----------------------------------------------------------------------------------*/
	/*	STICKY FILTER
	/*-----------------------------------------------------------------------------------*/
	$("#sticky-filter").sticky({ topSpacing: 70, className:"sfilter", responsiveBreakpoint: 0 });
    /*-----------------------------------------------------------------------------------*/
    /*	CUBE PORTFOLIO
    /*-----------------------------------------------------------------------------------*/
    $('.cbp-onepage-grid').cubeportfolio({
        filters: '#js-filters-full-width',
        loadMore: '#cbp-onepage-grid-more',
        loadMoreAction: 'click',
        layoutMode: 'mosaic',
        sortToPreventGaps: true,
        defaultFilter: '*',
        animationType: 'quicksand',
        gapHorizontal: 10,
        gapVertical: 10,
        gridAdjustment: 'responsive',
        mediaQueries: [{
            width: 768,
            cols: 3
        }, {
            width: 767,
            cols: 1
        }],
        caption: 'fadeIn',
        displayType: 'lazyLoading',
        displayTypeSpeed: 100,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
        // singlePageInline
        singlePageInlineDelegate: '.cbp-singlePageInline',
        singlePageInlinePosition: 'top',
        singlePageDeeplinking: true,
        singlePageInlineInFocus: true,
        offsetValue: 100,
        singlePageInlineCallback: function(url, element) {
            // to update singlePageInline content use the following method: this.updateSinglePageInline(yourContent)
            var t = this;
            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'html',
                timeout: 10000
            }).done(function(result) {
                t.updateSinglePageInline(result);
            }).fail(function() {
                t.updateSinglePageInline('AJAX Error! Please refresh the page!');
            });
        }
    });
    $('#js-grid-full-width').cubeportfolio({
        filters: '#js-filters-full-width',
        loadMore: '#js-grid-full-width-more',
        loadMoreAction: 'click',
        layoutMode: 'mosaic',
        sortToPreventGaps: true,
        defaultFilter: '*',
        animationType: 'quicksand',
        gapHorizontal: 0,
        gapVertical: 0,
        gridAdjustment: 'responsive',
        mediaQueries: [{
            width: 2560,
            cols: 6
        }, {
            width: 1920,
            cols: 5
        }, {
            width: 1450,
            cols: 4
        }, {
            width: 1024,
            cols: 3
        }, {
            width: 768,
            cols: 2
        }, {
            width: 650,
            cols: 1
        }],
        caption: 'fadeIn',
        displayType: 'lazyLoading',
        displayTypeSpeed: 100,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
        // singlePageInline
        singlePageInlineDelegate: '.cbp-singlePageInline',
        singlePageInlinePosition: 'top',
        singlePageDeeplinking: true,
        singlePageInlineInFocus: true,
        offsetValue: 100,
        singlePageInlineCallback: function(url, element) {
            // to update singlePageInline content use the following method: this.updateSinglePageInline(yourContent)
            var t = this;
            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'html',
                timeout: 10000
            }).done(function(result) {
                t.updateSinglePageInline(result);
            }).fail(function() {
                t.updateSinglePageInline('AJAX Error! Please refresh the page!');
            });
        }
    });
    $('#js-grid-mosaic').cubeportfolio({
        filters: '#js-filters-mosaic',
        loadMore: '#js-grid-mosaic-more',
        loadMoreAction: 'click',
        layoutMode: 'mosaic',
        sortToPreventGaps: true,
        defaultFilter: '*',
        animationType: 'quicksand',
        gapHorizontal: 0,
        gapVertical: 0,
        gridAdjustment: 'responsive',
        mediaQueries: [{
            width: 768,
            cols: 4
        }, {
            width: 767,
            cols: 2
        }],
        caption: 'fadeIn',
        displayType: 'lazyLoading',
        displayTypeSpeed: 100,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
        // singlePageInline
        singlePageInlineDelegate: '.cbp-singlePageInline',
        singlePageInlinePosition: 'top',
        singlePageDeeplinking: true,
        singlePageInlineInFocus: true,
        offsetValue: 100,
        singlePageInlineCallback: function(url, element) {
            // to update singlePageInline content use the following method: this.updateSinglePageInline(yourContent)
            var t = this;
            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'html',
                timeout: 10000
            }).done(function(result) {
                t.updateSinglePageInline(result);
            }).fail(function() {
                t.updateSinglePageInline('AJAX Error! Please refresh the page!');
            });
        }
    });
    /*-----------------------------------------------------------------------------------*/
    /*	OWL CAROUSEL
	/*-----------------------------------------------------------------------------------*/
    $('.carousel-boxed').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        navText: ['', ''],
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });
    $('.basic-slider').owlCarousel({
        items: 1,
        nav: true,
        navText: ['', ''],
        dots: true,
        autoHeight: false,
        loop: true,
        margin: 0
    });
    $('.blog-carousel').owlCarousel({
	    items: 5,
	    nav: true,
	    navText: ['', ''],
	    dots: false,
	    loop: false,
	    margin: 0,
	    autoWidth: false,
	    responsive: {
	        0: {
	            items: 1
	        },
	        600: {
	            items: 2
	        },
	        1441: {
	            items: 3
	        },
	        1921: {
	            items: 4
	        }
	    }
	});
    $('.clients').owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        loop: true,
        margin: 50,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 3
            },
            768: {
                items: 5
            },
            1200: {
                items: 6
            }
        }
    });
    $('.testimonials').owlCarousel({
        items: 1,
        nav: false,
        dots: false,
        autoHeight: true,
        autoplay: true,
        autoplayTimeout: 5000,
        loop: true,
        margin: 0
    });
    /*-----------------------------------------------------------------------------------*/
    /*	SWIPER
	/*-----------------------------------------------------------------------------------*/
    $('.swiper-container.gallery').each(function(){
		  $(this).swiper({
		    grabCursor: true,
		    slidesPerView: 'auto',
		    wrapperClass: 'swiper',
		    slideClass: 'item',
		    offsetPxBefore: 0,
		    offsetPxAfter: 0
		  });
		
		  var $swipers = $(this);
		
		$swipers.siblings('.arrow-left').on( "click", function(){
		$swipers.data('swiper').swipeTo($swipers.data('swiper').activeIndex-1);
		return false;
		});
		$swipers.siblings('.arrow-right').on( "click", function(){
		$swipers.data('swiper').swipeTo($swipers.data('swiper').activeIndex+1);
		return false;
		});
	});
    /*-----------------------------------------------------------------------------------*/
    /*	FITVIDS VIDEO
	/*-----------------------------------------------------------------------------------*/
    $('.player').fitVids();
    /*-----------------------------------------------------------------------------------*/
    /*	IMAGE ICON HOVER
	/*-----------------------------------------------------------------------------------*/
    $('.icon-overlay a').prepend('<span class="icn-more"></span>');
    /*-----------------------------------------------------------------------------------*/
    /*	REVOLUTION
	/*-----------------------------------------------------------------------------------*/
    $('.tp-fullscreen').revolution({
        delay: 9000,
        startwidth: 1170,
        startheight: 750,
        hideThumbs: 0,
        hideArrowsOnMobile: "on",
        fullWidth: "on",
        fullScreen: "on",
        soloArrowLeftHOffset: 0,
        soloArrowRightHOffset: 0,
        fullScreenOffsetContainer: ".mode-sm:not(.onepage) .navbar, .mode-xs:not(.onepage) .navbar"
    });
    /*-----------------------------------------------------------------------------------*/
    /*	FANCYBOX
	/*-----------------------------------------------------------------------------------*/
    $(".fancybox-media").fancybox({
        arrows: true,
        padding: 0,
        closeBtn: true,
        openEffect: 'fade',
        closeEffect: 'fade',
        prevEffect: 'fade',
        nextEffect: 'fade',
        helpers: {
            media: {},
            overlay: {
                locked: false
            },
            buttons: false,
            thumbs: false,
            /*thumbs: {
                width: 50,
                height: 50
            },*/
            title: {
                type: 'inside'
            }
        },
        beforeLoad: function() {
            var el, id = $(this.element).data('title-id');
            if (id) {
                el = $('#' + id);
                if (el.length) {
                    this.title = el.html();
                }
            }
        }
    });
    /*-----------------------------------------------------------------------------------*/
    /*	PROGRESS BAR
	/*-----------------------------------------------------------------------------------*/
    $('.progress-list .progress .bar').progressBar({
			shadow : false,
			percentage : false,
			animation : true,
			height: 15
	});
    /*-----------------------------------------------------------------------------------*/
    /*	TABS
	/*-----------------------------------------------------------------------------------*/
    $('.tabs.tabs-top').easytabs({
        animationSpeed: 300,
        updateHash: false
    });
    /*-----------------------------------------------------------------------------------*/
    /*	TOGGLE
	/*-----------------------------------------------------------------------------------*/
    $('.panel-group').find('.panel-default:has(".in")').addClass('panel-active');
    $('.panel-group').on('shown.bs.collapse', function(e) {
        $(e.target).closest('.panel-default').addClass(' panel-active');
    }).on('hidden.bs.collapse', function(e) {
        $(e.target).closest('.panel-default').removeClass(' panel-active');
    });
    /*-----------------------------------------------------------------------------------*/
    /*	BACKGROUND VIDEO PARALLAX
	/*-----------------------------------------------------------------------------------*/
    $('#video-office').backgroundVideo({
        $outerWrap: $('.outer-wrap'),
        pauseVideoOnViewLoss: false,
        parallaxOptions: {
            effect: 1.9
        }
    });
    /*-----------------------------------------------------------------------------------*/
    /*	PARALLAX MOBILE
	/*-----------------------------------------------------------------------------------*/
    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i)) {
        $('.parallax').addClass('mobile');
    }
    /*-----------------------------------------------------------------------------------*/
    /*	DATA REL
	/*-----------------------------------------------------------------------------------*/
    $('a[data-rel]').each(function() {
        $(this).attr('rel', $(this).data('rel'));
    });
    /*-----------------------------------------------------------------------------------*/
    /*	PRETTIFY
	/*-----------------------------------------------------------------------------------*/
    window.prettyPrint && prettyPrint()
    /*-----------------------------------------------------------------------------------*/
    /*	TOOLTIP
    /*-----------------------------------------------------------------------------------*/
    if ($("[rel=tooltip]").length) {
        $("[rel=tooltip]").tooltip();
    }
    /*-----------------------------------------------------------------------------------*/
    /* INPUT FOCUS
	/*-----------------------------------------------------------------------------------*/
    $('.comment-form input[title], .comment-form textarea').each(function () {
        if ($(this).val() === '') {
            $(this).val($(this).attr('title'));
        }

        $(this).focus(function () {
            if ($(this).val() == $(this).attr('title')) {
                $(this).val('').addClass('focused');
            }
        });
        $(this).blur(function () {
            if ($(this).val() === '') {
                $(this).val($(this).attr('title')).removeClass('focused');
            }
        });
    });
    /*-----------------------------------------------------------------------------------*/
    /* WIDTH CLASS
	/*-----------------------------------------------------------------------------------*/
    assign_bootstrap_mode();
    $(window).resize(function() {
        assign_bootstrap_mode();
    });
    function assign_bootstrap_mode() {
        var width = $(window).width();
        var mode = '';
        if (width < 768) {
            mode = "mode-xs";
        } else if (width < 992) {
            mode = "mode-sm";
        } else if (width < 1200) {
            mode = "mode-md";
        } else if (width > 1200) {
            mode = "mode-lg";
        }
        $("body").removeClass("mode-xs").removeClass("mode-sm").removeClass("mode-md").removeClass("mode-lg").addClass(mode);
    }
    /*-----------------------------------------------------------------------------------*/
    /*	INSTAGRAM
    /*-----------------------------------------------------------------------------------*/
    var instagramFeed = new Instafeed({
        get: 'user',
        limit: 10,
        userId: 1215763826,
        accessToken: '1215763826.f1627ea.dad6ca96bd7642519b573d52c3ef467f',
        resolution: 'low_resolution',
        template: '<div class="item"><figure class="icon-overlay"><a href="{{link}}"><img src="{{image}}" /></a></figure></div>',
        after: function() {
	        $('#instafeed .item .icon-overlay a').prepend('<span class="icn-more"></span>');
            var $portfoliogrid = $('.image-grid .isotope');
            $portfoliogrid.isotope({
                itemSelector: '.item',
                transitionDuration: '0.7s',
                masonry: {
                    columnWidth: $portfoliogrid.width() / 12
                },
                layoutMode: 'masonry'
            });
            $(window).resize(function() {
                $portfoliogrid.isotope({
                    masonry: {
                        columnWidth: $portfoliogrid.width() / 12
                    }
                });
            });
            $portfoliogrid.imagesLoaded(function() {
                $portfoliogrid.isotope('layout');
            });
        }
    });
    $('#instafeed').each(function() {
        instagramFeed.run();
    });
    var instagramFeed2 = new Instafeed({
        target: 'instafeed-widget',
        get: 'user',
        limit: 6,
        userId: 1215763826,
        accessToken: '1215763826.f1627ea.dad6ca96bd7642519b573d52c3ef467f',
        resolution: 'low_resolution',
        template: '<div class="item"><figure class="icon-overlay"><a href="{{link}}"><img src="{{image}}" /></a></figure></div>',
        after: function() {
	        $('#instafeed-widget .item .icon-overlay a').prepend('<span class="icn-more"></span>');
            var $portfoliogrid = $('.image-grid .isotope');
            $portfoliogrid.isotope({
                itemSelector: '.item',
                transitionDuration: '0.7s',
                masonry: {
                    columnWidth: $portfoliogrid.width() / 12
                },
                layoutMode: 'masonry'
            });
            $(window).resize(function() {
                $portfoliogrid.isotope({
                    masonry: {
                        columnWidth: $portfoliogrid.width() / 12
                    }
                });
            });
            $portfoliogrid.imagesLoaded(function() {
                $portfoliogrid.isotope('layout');
            });
        }
    });
    $('#instafeed-widget').each(function() {
        instagramFeed2.run();
    });
    /*-----------------------------------------------------------------------------------*/
	/*	FLICKR
	/*-----------------------------------------------------------------------------------*/
    $('.flickr-feed').dcFlickr({
        limit: 10,
        q: {
            id: '51789731@N07',
            lang: 'en-us',
            format: 'json',
            jsoncallback: '?'
        },
        onLoad: function() {
            $('.flickr-feed .item .icon-overlay a').prepend('<span class="icn-more"></span>');
        }
    });
    /*-----------------------------------------------------------------------------------*/
    /*	ISOTOPE GRID VIEW COL3
    /*-----------------------------------------------------------------------------------*/
    var $gridviewcol3 = $('.grid-view.col3 .isotope');
    $gridviewcol3.isotope({
        itemSelector: '.grid-view-post',
        transitionDuration: '0.6s',
        masonry: {
            columnWidth: '.col-sm-6.col-md-4'
        },
        layoutMode: 'masonry'
    });
    $(window).resize(function() {
        $gridviewcol3.isotope({
            masonry: {
                columnWidth: '.col-sm-6.col-md-4'
            }
        });
    });
    $gridviewcol3.imagesLoaded(function() {
        $gridviewcol3.isotope('layout');
    });
    /*-----------------------------------------------------------------------------------*/
    /*	ISOTOPE GRID VIEW COL2
    /*-----------------------------------------------------------------------------------*/
    var $gridviewcol2 = $('.grid-view.col2 .isotope');
    $gridviewcol2.isotope({
        itemSelector: '.grid-view-post',
        transitionDuration: '0.6s',
        masonry: {
            columnWidth: '.col-md-6.col-sm-12'
        },
        layoutMode: 'masonry'
    });
    $(window).resize(function() {
        $gridviewcol2.isotope({
            masonry: {
                columnWidth: '.col-md-6.col-sm-12'
            }
        });
    });
    $gridviewcol2.imagesLoaded(function() {
        $gridviewcol2.isotope('layout');
    });
    /*-----------------------------------------------------------------------------------*/
    /*	ISOTOPE PORTFOLIO GRID
    /*-----------------------------------------------------------------------------------*/
    var $portfoliogrid = $('.image-grid .isotope');
    $portfoliogrid.isotope({
        itemSelector: '.item',
        transitionDuration: '0.7s',
        masonry: {
            columnWidth: $portfoliogrid.width() / 12
        },
        layoutMode: 'masonry'
    });
    $(window).resize(function() {
        $portfoliogrid.isotope({
            masonry: {
                columnWidth: $portfoliogrid.width() / 12
            }
        });
    });
    $portfoliogrid.imagesLoaded(function() {
        $portfoliogrid.isotope('layout');
    });
	
	/*-----------------------------------------------------------------------------------*/
    /*	FIX CHROME ANCHOR ISSUE
    /*-----------------------------------------------------------------------------------*/
	
	 $(function() {
       $('a[href*="#"]:not([href="#"])').click(function() {
         if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
           var target = $(this.hash);
           target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html, body').animate({
               scrollTop: target.offset().top
             }, 1000);
             return false;
           }
         }
       });
     });
	 
	 
	/*-----------------------------------------------------------------------------------*/
    /*	Tab compétences
    /*-----------------------------------------------------------------------------------*/
	
	 $('#comptabs a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    })
		
	/*-----------------------------------------------------------------------------------*/
    /*	LOAD EXPERIENCES
    /*-----------------------------------------------------------------------------------*/
	
	loadExperiences();
	
	initChart();
	
});
/*-----------------------------------------------------------------------------------*/
/*	LOADING
/*-----------------------------------------------------------------------------------*/
$(window).load(function() {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('#preloader .textload').delay(0).fadeOut('slow');
    $('body').delay(350).css({
        'overflow': 'visible'
    });
});
/*-----------------------------------------------------------------------------------*/
/*	FORM
/*-----------------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", function() {
    var myForm;
    myForm = new VanillaForm(document.querySelector("form.vanilla"));
});
/*-----------------------------------------------------------------------------------*/
/*	STICKY HEADER
/*-----------------------------------------------------------------------------------*/
function init() {
// "use strict";
         window.addEventListener('scroll', function(e){
             var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                 shrinkOn = 115,
                 header = document.querySelector(".navbar");
             if (distanceY > shrinkOn) {
                 classie.add(header,"fixed");
             } else {
                 if (classie.has(header,"fixed")) {
                     classie.remove(header,"fixed");
                 }
             }
         });
    }
    window.onload = init();
$(window).resize(function() {
	$('.offset').css('padding-top', $('.navbar').height() + 'px');        
}); 



function loadExperiences()
{
	$.ajax({
		type: "GET",
		url: window.location.origin+"/experiences",
		//url: "localhost:8070/experiences",
		cache: false,
	    dataType: 'json',
		contentType: 'application/json; charset=utf-8',
		
		success: function(experiences){
			experiences = experiences.sort(function(a, b) {
				 a = a.StartDate.split('/').reverse().join('');
				 b = b.StartDate.split('/').reverse().join('');
					return a > b ? 1 : a < b ? -1 : 0;
			}).reverse();
			let html2= '' ;
			let count=0;
		$.each(experiences, function(index) {			
			count++;
			html2 += `	<div class="row timeline-movement`
			if(count>3) html2+=` collapse" id="clps" aria-expanded="false`
			html2 += `"><div class="col-sm-10  timeline-item"> 
            <div class="row"> 
                <div class="col-sm-offset-2 col-sm-10"> 
                    <div class="timeline-panel debits">
                       <ul class="timeline-panel-ul" style="    text-overflow: ellipsis;    word-wrap: break-word;">
                            <li><span class="importo">` + experiences[index].Company+`</span> <small class="text-muted">`+experiences[index].JobInformation+` - `+experiences[index].Location +`</small></li> 
                            <li><div class="causale"> <b><i>` +experiences[index].JobTitle+`</i></b><div></li>
                            <li><div class="causale">` +experiences[index].Description+`<div></li><br/>
							<li>`;
							
			$.each(experiences[index].Tags, function(index2) {		
			
				html2+=`<span class=\"label `
				if(experiences[index].Tags[index2].Type == "JobType")
				{
					html2+= `label-default`;
				}
				else if(experiences[index].Tags[index2].Type == "Language")
				{
						html2+= `label-success`;
				}
				else if(experiences[index].Tags[index2].Type == "Outil")
				{
					html2+=`label-primary`;
				}
				else if(experiences[index].Tags[index2].Type == "SGBD")
				{
					html2+=`label-danger`;
				}
				else if(experiences[index].Tags[index2].Type == "Autre")
				{
					html2+=`label-warning`;
				}
				html2+=`\">`+ experiences[index].Tags[index2].Text+`</span>&nbsp;`;
			});	
							
						html2+=`</li> 
                            <li><p><small class=\"text-muted\">` + experiences[index].StartDate+`- ` + experiences[index].EndDate+`</small></p> </li> 
                        </ul>
                    </div>     
                </div> 
            </div> 
        </div>
		</div>`;
          
        });
		  html2+=`	<div class="row timeline-movement timeline-movement-bottom">
        <div class="timeline-badge timeline-future-movement" id="moreExperiences">
			<a href="#experiences" data-toggle="collapse"  data-target=".timeline-movement" >	
                <span class="glyphicon glyphicon-plus"></span>
				</a>
        </div>    
    </div>`;
		document.getElementById('timeline2').innerHTML = html2;
 $('#moreExperiences').on('click', function() {
        $(this).hide();
    });
		},
		error:function(html){
		//$("#more").after(html);
			alert("Error! " +html);
		}
		
		});
}

function initChart()
{
	window.chartColors = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(231,233,237)'
};
	var color = Chart.helpers.color;

	var config = {
  type: 'radar',
  data: {
    labels: [
       "Leadership", "Architecture","Management", "Mentoring", "Curiosité","Gestion de projet","Pragmatisme", "Travail d'équipe"],
    datasets: [{
      label: '',
      backgroundColor: color(window.chartColors.blue).alpha(0.2).rgbString(),
      borderColor: window.chartColors.blue,
      pointBackgroundColor: window.chartColors.blue,
      data: [8,7,6,6,8,6,8,9]
    } ]
  },
  options: {
    legend: {
		display: false
	},
    title: {
      display: false,
      text: ''
    },
    scale: {
      ticks: {
        beginAtZero: true
      }
    },
    tooltips:{
      enabled:false,
      callbacks:{
        label: function(tooltipItem, data){
          var datasetLabel = data.datasets[tooltipItem.datasetIndex].label || '';
          //This will be the tooltip.body
          return datasetLabel + ': ' + tooltipItem.yLabel +': '+ data.datasets[tooltipItem.datasetIndex].notes[tooltipItem.index];
        }
      },
      custom: function(tooltip){
        // Tooltip Element
      var tooltipEl = document.getElementById('chartjs-tooltip');
      if (!tooltipEl) {
        tooltipEl = document.createElement('div');
        tooltipEl.id = 'chartjs-tooltip';
        tooltipEl.innerHTML = "<table></table>"
        document.body.appendChild(tooltipEl);
      }
      // Hide if no tooltip
      if (tooltip.opacity === 0) {
        tooltipEl.style.opacity = 0;
        return;
      }
      // Set caret Position
      tooltipEl.classList.remove('above', 'below', 'no-transform');
      if (tooltip.yAlign) {
        tooltipEl.classList.add(tooltip.yAlign);
      } else {
        tooltipEl.classList.add('no-transform');
      }
      function getBody(bodyItem) {
        return bodyItem.lines;
      }
      // Set Text
      if (tooltip.body) {
        var titleLines = tooltip.title || [];
        var bodyLines = tooltip.body.map(getBody);
        var innerHtml = '<thead>';
        titleLines.forEach(function(title) {
          innerHtml += '<tr><th>' + title + '</th></tr>';
        });
        innerHtml += '</thead><tbody>';
        bodyLines.forEach(function(body, i) {
          var colors = tooltip.labelColors[i];
          var style = 'background:' + colors.backgroundColor;
          style += '; border-color:' + colors.borderColor;
          style += '; border-width: 2px';
          var span = '<span class="chartjs-tooltip-key" style="' + style + '"></span>';
          innerHtml += '<tr><td>' + span + body + '</td></tr>';
        });
        innerHtml += '</tbody>';
        var tableRoot = tooltipEl.querySelector('table');
        tableRoot.innerHTML = innerHtml;
      }
      var position = this._chart.canvas.getBoundingClientRect();
      // Display, position, and set styles for font
      tooltipEl.style.opacity = 1;
      tooltipEl.style.left = position.left + tooltip.caretX + 'px';
      tooltipEl.style.top = position.top + tooltip.caretY + 'px';
      tooltipEl.style.fontFamily = tooltip._fontFamily;
      tooltipEl.style.fontSize = tooltip.fontSize;
      tooltipEl.style.fontStyle = tooltip._fontStyle;
      tooltipEl.style.padding = tooltip.yPadding + 'px ' + tooltip.xPadding + 'px';
      }
    }
  }
};
  window.myRadar = new Chart(document.getElementById("functionalSkillsChart"), config);

}