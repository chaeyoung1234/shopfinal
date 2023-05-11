
$(function(){

  $('.main_menu>li').mouseover(function(){

    $(this).find('.sub_menu').stop().slideDown();

  }).mouseout(function(){

    $('.sub_menu').stop().slideUp();

  });

});
