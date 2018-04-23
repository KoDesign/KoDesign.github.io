if (typeof value === "undefined") {
    // ...
}

jQuery(document).ready(function () {
    

    

var navoffset = jQuery("nav").offset().top;

jQuery(window).scroll(function() {
    var scrollPos = jQuery(window).scrollTop();
   
    if (scrollPos >= navoffset) {
        jQuery("nav").addClass("fixed");
    }    else {
        jQuery("nav").removeClass("fixed");
        
    } 
   
});
    

    
    
});