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
        $('.proposal').toggle();
        
    });
    $('.close').click(function () { 
        $('.proposal').hide();
        
    });

    $('pro').click(function () { 
    
        
    });









    
   

});


