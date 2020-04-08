$(document).ready(function () {
    
    $('.scroll-top').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1500);
        return false;
    });

    $('a[href*="#"]').on('click', function(e) {
      e.preventDefault()
      $('html, body').animate(
        {
          scrollTop: $($(this).attr('href')).offset().top - 100,
        },
        500,
        'linear'
      )
    });
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if(top > 50){
            $('header').addClass('active');
        }else{
            $('header').removeClass('active');
        }
    });
    

});
