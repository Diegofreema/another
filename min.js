$(document).ready(function(){
    var filterizd = $('.filter-container').filterizr({
        animationDelay: .5,
    });




        
        $(window).scroll(function(){
          if ($(this).scrollTop() > 600) {
              $('.scrolll').fadeIn();
          } else {
              $('.scrolll').fadeOut();
          }
      });
      
      $('.scrolll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 400); 
        return false; 
      }); 
      
      
      
    });


  
var waypoints = $('.w').waypoint(function(direction){
    $('.w').addClass('animate__animated animate__fadeInLeft');

},{
    offset: '100%'
})
var waypoints = $('.r').waypoint(function(direction){
    $('.r').addClass('animate__animated animate__fadeInUpBig');

},{
    offset: '100%'
})
var waypoints = $('.v').waypoint(function(direction){
    $('.v').addClass('animate__animated animate__fadeInLeft');

},{
    offset: '100%'
})
var waypoints = $('.s').waypoint(function(direction){
    $('.s').addClass('animate__animated animate__fadeInRight');

},{
    offset: '100%'
})
var waypoints = $('.t').waypoint(function(direction){
    $('.t').addClass('animate__animated animate__fadeInLeft');

},{
    offset: '100%'
})
var waypoints = $('.u').waypoint(function(direction){
    $('.u').addClass('animate__animated animate__fadeInUp');

},{
    offset: '100%'
});
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 500,
	speedAsDuration: true
});
    
