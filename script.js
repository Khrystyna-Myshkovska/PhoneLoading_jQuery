$(function(){
    $('.loading2').hide();
    $('.loading2').slideDown(120000,'linear',function(){
        $('span').text('1 minute')
    });
    $('.loading2').slideUp(60000,'linear',function(){
        $('span').text('0 minute')
    });
   
})