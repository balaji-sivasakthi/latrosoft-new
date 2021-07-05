$(document).ready(function () {
    $('.mobile-menu').click(function () { 
        $(".mobile-menu").toggleClass("mobile-menu-rotate");
        $('.nav-list').toggle(()=>{
            
            $('.nav-list').show("slow");
        });
      
        
    });
});