$(function() {
  fr = new FilmRoll({
    container: '#film_roll',
    height: 450
  });
});

$(function(){
    $('.hb-icon').click(function(){
    if($('.hb-nav').hasClass('open')){
      $('.hb-nav').removeClass('open');
      $(this).removeClass('open');
      $('html').removeClass('scroll-prevent');
    }else{
      $('.hb-nav').addClass('open');
      $(this).addClass('open');
      $('html').addClass('scroll-prevent')
    }
	});
});

$(function(){
	$('.hb-nav a').click(function(){
      $('.hb-nav').removeClass('open');
      $(this).removeClass('open');
      $('html').removeClass('scroll-prevent');
      $('.hb-icon').removeClass('open');
	});
});

$(function(){
  var topBtn=$('#page_top');
  topBtn.hide();
    
  $(window).scroll(function(){
    if($(this).scrollTop()>350){
      topBtn.fadeIn();
    }else{
      topBtn.fadeOut();
    }
  });
  
  topBtn.click(function(){
    $('body,html').animate({
    scrollTop: 0},500);
    return false;
  });
});


