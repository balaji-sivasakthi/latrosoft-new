$(document).ready(function () {
    //Mobile Toggle 
    $('.mobile-menu').click(function () { 
        $(".mobile-menu").toggleClass("mobile-menu-rotate");
        $('.nav-list').toggle(()=>{
            
            $('.nav-list').show("slow");
        });
      
    });

    //Add active class for navBar
    $('.link').click(function (){
        $('.link').removeClass("active");
        $(this).addClass("active");
    });
});