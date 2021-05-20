$(function(){
  
    $("header > .top_bar_wrap > .nav_wrap > ul > li").click(function(){
      var indexNum = $(this).index();
      
      if($(".nav_2_depth_wrap > .nav_2_depth_box > .nav_2_depth_left > .nav_2_content").eq(indexNum).hasClass("active")){
        $(".nav_2_depth_wrap").removeClass("active");
        $(".nav_2_depth_wrap > .nav_2_depth_box > .nav_2_depth_left > .nav_2_content").removeClass("active");
      }
      
      else{
        $(".nav_2_depth_wrap > .nav_2_depth_box > .nav_2_depth_left > .nav_2_content").removeClass("active");
      
        $(".nav_2_depth_wrap").addClass("active");
        $(".nav_2_depth_wrap > .nav_2_depth_box > .nav_2_depth_left > .nav_2_content").eq(indexNum).addClass("active");
      }
  
    });
    
    $(".nav_2_depth_wrap > .nav_2_depth_box > .nav_2_depth_right").click(function(){
      
      $(".nav_2_depth_wrap").removeClass("active");
      $(".nav_2_depth_wrap > .nav_2_depth_box > .nav_2_depth_left > .nav_2_content").removeClass("active");
      
    });
    
    
    
    
    
    
    
    
  });