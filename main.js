  $('.tab-titles a').click(function(event){
    event.preventDefault();
    $('.active').removeClass('active');
    $(this).addClass('active');
      $('.tablists').addClass('animate__animated animate__fadeInUp');
    
        var id = this.id;
        $('.' + id).addClass('active');
    });



   $('.menubtn').click( function(){
      $('.menubtn').toggleClass("wrk");
      $('.navlist').toggleClass("open");
      $('section').toggleClass("gray");


   });

