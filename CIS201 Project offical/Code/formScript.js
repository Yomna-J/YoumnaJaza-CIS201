"use strict";
$(document).ready(function () {
    /*------- button with class register -------*/
    var reg_btn = $('#contact .box-1 .send');
  
    /*------- back button ----------------------*/
    var back_btn = $('#contact .box-1 .back');
    reg_btn.click(function (e) {
        e.preventDefault();
        $(this).siblings('.reg').css({
            'transform': 'translateY(40%) scale(5)',
            'border-radius': '0',
            'width': '100%',
            'height': '100%'
        }).end();
        reg_btn.siblings('#contact .box-1 h3:nth-of-type(1)').css({
            'top': '40%',
            'z-index': '8',
        }).end().end();
    });
})