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

    //for form select
    if ($('.cwppartner-form .cwppartner-select').length) {
        $('.cwppartner-form .cwppartner-select').change(function () {
            var selectVal = $(this).find('option:selected').val();

            if (selectVal == 'placeholder'){
                if ($(this).hasClass('selected')) {
                    $(this).removeClass('selected');
                }
            } else {
                if (!($(this).hasClass('selected'))){
                    $(this).addClass('selected');
                }
            }
        })
    }
});