$(function(){
//ham-btn
const hamBtn = $('#ham-btn');
const gnav = $('#g-nav');
$(hamBtn).on('click',function(){
$(this).toggleClass('is-active');
$(gnav).toggleClass('is-active');
});
//gnav a > click
$('#g-nav a').on('click',function(){
$(hamBtn).removeClass('is-active');
$(gnav).removeClass('is-active');
});
//to-form-btn > scroll event
const toForm = $('#to-form');
$(toForm).removeClass('scrl');
$(window).scroll(function(){
if($(this).scrollTop() > 399){
$(toForm).addClass('scrl');
}else{
$(toForm).removeClass('scrl');
}
});

});