$(document).ready(function(e) {   
    
    $( "#neon-btn" ).click(function() {
        /* Header */ 

        $('.header-clean').addClass('header-neon').removeClass('header-clean');
        
        /* Banner */

        $('.banner-hero').addClass('hero-neon').removeClass('banner-hero');
        $('.shape-fill-1').css("fill" , "#000116");
        
        /* About */

        $('.about-left').addClass('about-left-neon').removeClass('about-left');
        $('.about-area').addClass('about-area-neon');
        $('.span-about').addClass('span-about-neon');
        $('.about-project').addClass('about-project-neon');
        $('.about-right').addClass('about-right-neon');
        $('.about-btn').removeClass('about-btn').addClass('about-btn-neon');
        $('.shape-fill').css("fill" , "#000116");

        /* Contact */

        $('.span-contact').addClass('span-contact-neon');
        $('.contact-area').addClass('contact-area-neon');

    });
    
 });