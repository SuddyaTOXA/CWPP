jQuery(document).ready(function($) {
    // the blocking of links default behavior
    function prevent(){
        $('.prevent, a[href="/broken"]').on('click', function(event){
            event.preventDefault();
        });
    }
    prevent();

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