// Fade in function
/* Every time the window is scrolled ... */
$(window).scroll( function(){
    /* Check the location of each desired element */
    $('.hideme').each( function(i){
        
        var bottom_of_object = $(this).position().top + $(this).outerHeight()/1.5;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        /* If the object is completely visible in the window, fade it it */
        if( bottom_of_window > bottom_of_object ){
            $(this).animate({'opacity':'1','top':'0'},700);       
        }
        
    }); 
});


// Can also be used with $(document).ready()
$('.flexslider').flexslider({
    animation: "fade",
    controlNav: false,
    prevText: "",           //String: Set the text for the "previous" directionNav item
    nextText: ""
});

// open/close video
iframe = $(".for_video").find("iframe");
videosrc = $(".for_video").find("iframe").attr("src");
iframe.attr("src","");
console.log(videosrc);

$(".watch_video").on("click",function(){
    iframe.attr("src",videosrc);
    $(".for_video").fadeIn();
    $(".tint").addClass("actint");
});
$(".videoClose").on("click",function(){
    $(".for_video").fadeOut();
   $(".tint").removeClass("actint"); 
   iframe.attr("src","");
});