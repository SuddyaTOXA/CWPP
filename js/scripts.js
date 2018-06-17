jQuery(document).ready(function($) {
    // the blocking of links default behavior
    function prevent(){
        $('.prevent, a[href="/broken"]').on('click', function(event){
            event.preventDefault();
        });
    }
    prevent();

	// for smooth scroll
    smoothScroll.init({
        selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
        speed: 500, // Integer. How fast to complete the scroll in milliseconds
        easing: 'easeInQuad', // Easing pattern to use
        offset: 50 // Integer. How far to offset the scrolling anchor location in pixels
    });

    //for input
    if ($(".cwppartner-input-style").length) {
        var input = $(".cwppartner-input-style");

        input.focusout(function(){
            if($(this).val() != ""){
                $(this).addClass("has-content");
            }else{
                $(this).removeClass("has-content");
            }
        });
    }
});