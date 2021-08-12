$(document).ready(function () {
    //Mobile Toggle 
    $('.mobile-menu').click(function () { 
        $(".mobile-menu").toggleClass("mobile-menu-rotate");
        $('.nav-list').toggle(()=>{
            
            $('.nav-list').show("slow");
        });
      
    });

    //Add active class for navBar
    // $('.link').click(function (){
    //     $('.link').removeClass("active");
    //     $(this).addClass("active");
    // });

    //proposal
    $('.start-btn').click(function () { 
        $("body"). css("overflow", "hidden"); 
        $('.proposal').toggle();
        
    });
    $('.close').click(function () { 
        $("body"). css("overflow", "scroll"); 
        $('.proposal').hide();
       
    });

    $('pro').click(function () { 
    
        
    });









    
   

});


