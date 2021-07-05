$(document).ready(function () {
    $('.mobile-menu').click(function () { 
        $('.nav-list').toggle(()=>{
            $('.mobile-menu').addClass("mobile-menu-rotate");
            $('.nav-list').show("slow");
        });
      
        
    });
});