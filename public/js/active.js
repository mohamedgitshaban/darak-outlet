
$(document).ready(function() {
    var $window = $(window);
    // :: Nav Active Code
    
        $('#essenceNav').classyNav();
  // :: Favorite Button Active Code
//   $(".choose").click(function() {
// 	$(".choose").addClass("active");
// 	$(".choose > .icon").addClass("active");
// 	$(".pay").removeClass("active");
// 	$(".wrap").removeClass("active");
// 	$(".pay > .icon").removeClass("active");
// 	$(".wrap > .icon").removeClass("active");
// 	$("#line").addClass("one");
// 	$("#line").removeClass("two");
// 	$("#line").removeClass("three");
// });

// $(".pay").click(function() {
// 	$(".pay").addClass("active");
// 	$(".pay > .icon").addClass("active");
// 	$(".choose").removeClass("active");
// 	$(".wrap").removeClass("active");
	
// 	$(".choose > .icon").removeClass("active");
// 	$(".wrap > .icon").removeClass("active");
	
// 	$("#line").addClass("two");
// 	$("#line").removeClass("one");
// 	$("#line").removeClass("three");
	
// });

// $(".wrap").click(function() {
// 	$(".wrap").addClass("active");
// 	$(".wrap > .icon").addClass("active");
// 	$(".pay").removeClass("active");
// 	$(".choose").removeClass("active");
	
// 	$(".pay > .icon").removeClass("active");
// 	$(".choose > .icon").removeClass("active");
	
// 	$("#line").addClass("three");
// 	$("#line").removeClass("two");
// 	$("#line").removeClass("one");
	
// });



// $(".choose").click(function() {
// 	$("#first").addClass("active");
// 	$("#second").removeClass("active");
// 	$("#third").removeClass("active");
	
// });

// $(".pay").click(function() {
// 	$("#first").removeClass("active");
// 	$("#second").addClass("active");
// 	$("#third").removeClass("active");
	
// });

// $(".wrap").click(function() {
// 	$("#first").removeClass("active");
// 	$("#second").removeClass("active");
// 	$("#third").addClass("active");
	
// });



  $(".favme").on( function () {
    $(this).toggleClass('active');
});

$(".favme").on('click touchstart', function () {
    $(this).toggleClass('is_animating');
});

$(".favme").on('animationend', function () {
    $(this).toggleClass('is_animating');
});
    // :: ScrollUp Active Code
   
    

$(".footer_menu a").on('click',function(){
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    });

});
$("#essenceNav a").on('click',function(){
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    });
});
    // :: Sticky Active Code
    $window.on('scroll', function () {
        if ($window.scrollTop() > 0) {
            $('.header_area').addClass('sticky');
        } else {
            $('.header_area ').removeClass('sticky');
        }
    });

    // :: Nice Select Active Code
    //cart
    $("#essenceCartBtn").on('click', function () {
        $(".cart-bg-overlay").toggleClass("cart-bg-overlay-on");
        $(".right-side-cart-area").toggleClass("cart-on");
    });
    $(".cart-bg-overlay").on('click', function () {
        $(this).removeClass("cart-bg-overlay-on");
        $(".right-side-cart-area").removeClass("cart-on");
    });
    $("#rightSideCart").on('click', function () {
        $(".cart-bg-overlay").removeClass("cart-bg-overlay-on");
        $(".right-side-cart-area").removeClass("cart-on");
    });
    $("#checkout").on('click', function () {

        $(".cart-bg-overlay").removeClass("cart-bg-overlay-on");
        $(".right-side-cart-area").removeClass("cart-on");
            

    });
        $('#demo').wrap('<div class="select_wrapper"></div>')
        $('#demo').parent().prepend('<span>'+ $(this).find(':selected').text() +'</span>');
        
        $('#demo').css('display', 'none');					
        $('#demo').parent().append('<ul class="select_inner"></ul>');
        var opttext , optval;
        $('#demo').children().each(function(){
           opttext = $(this).text();
           optval = $(this).val();
          $('#demo').parent().children('.select_inner').append('<li id="' + optval + '">' + opttext + '</li>');
        });
        
        
        if(window.location.pathname=="/checkout" ){
   $('select').parent().find('li').on('click', function (){
          var cur = $(this).attr('id');
          $('select').parent().children('span').text($(this).text());
          $('select').children().removeAttr('selected');
          $('select').children('[value="'+cur+'"]').attr('selected','selected');					
          //console.log($('select').children('[value="'+cur+'"]').text());
               $('select').parent().removeClass('openSelect');
        
           $('select').parent().find('ul').hide();
        });
        $('select').parent().find('span').on('click', function (){
           $('select').parent().find('ul').slideToggle(200);
          
             $('select').parent().toggleClass('openSelect');
        
          
        });
        }
     
        
        
// :: Sliders Active Code
        $('.popular-products-slides').owlCarousel({
            items: 4,
            margin: 30,
            loop: true,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                }
            }
        });
        $('.product_thumbnail_slides').owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: true,
            navText: ["<img src='img/core-img/long-arrow-left.svg' alt=''>", "<img src='img/core-img/long-arrow-right.svg' alt=''>"],
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1000
        });
    

//     // :: Header Cart Active Code
        
   
    // :: Slider Range Price Active Code
  
        $(".cart-list, .cart-content").niceScroll(); 
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 1000,
            easingType: 'easeInOutQuart',
            scrollText: '<i class="ti-angle-up" aria-hidden="true"></i>'
        });
    }  
    if ($window.width() > 767) {
        new WOW().init();
    }
    $('[data-toggle="tooltip"]').tooltip();

    $('.megamenu').mouseleave(function(){
        $(this).addClass("none");
       
    })
    $('.navlin').hover(function(){
        $('.megamenu').removeClass("none");
       
    })
    
});
