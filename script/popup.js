$(function(){
    $('#event1 .popup1').click(function(){
        $('.popup').fadeIn();//show()
    });
    $('.popup a').click(function(){
        $('.popup').fadeOut();//hide()
    });
});