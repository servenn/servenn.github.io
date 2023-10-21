$(document).ready(function(){
    
    // var bar  = document.querySelector('.text');
     $('.yo').on('click',function(){
        $('.navbar-nav').toggleClass('borderNavbar');
     });
    var linkss = $('.nav-item');
    linkss.on('click',()=>{
        $('.collapse').collapse('hide'); 
        // $('.navbar-nav').removeClass('borderNavbar')
    })


    // navbar section
    $(window).scroll(function(){

        // navigation links clik handling
        

            //projects animation
            var $ptop = $('.test');
            

            // var top_of_element = $(".test").offset().top;
            // var bottom_of_element = $(".test").offset().top + $(".test").outerHeight();
            // var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
            // var top_of_screen = $(window).scrollTop();

            $ptop.each(function(){
                var topof = $(this).offset().top;
                var bottomof = $(this).offset().top + $(this).outerHeight();
                var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
                var top_of_screen = $(window).scrollTop();

                if ((bottom_of_screen > topof) && (top_of_screen < bottomof)){
                    // the element is visible, do something
                    var i = 0;
                    $(this).addClass('animate__animated animate__zoomIn');
                    $(this).css({
                        opacity:'1'
                    })
            
                }

            })


            // if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
            //     the element is visible, do something
            //     var i = 0;
            //     $('.test').each(function(){
            //         $(this).addClass('animate__animated animate__zoomIn');
            //         i+=0.3;
            //         $(this).css({
            //             animationDelay:i+'s',
            //             opacity:1
            //         })
                    

            //     });
        
            // }
            // this section belongs to skill bar animation
            var top_of_element = $(".text").offset().top;
            var bottom_of_element = $(".text").offset().top + $(".text").outerHeight();
            var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
            var top_of_screen = $(window).scrollTop();

            if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
                var counting = 0;
                $('.html').addClass('htmls');
                $('.css').addClass('csss');
                $('.js').addClass('jss');
                $('.java').addClass('javas');
                $('.wp').addClass('wps');
                $('.node').addClass('nodes');
                $('.android').addClass('androids');
                
                
              
                
            }

            
            //navbar responsivenes test
            navbar();
        
     });
    
    $('.p-testing').addClass('animate__animated animate__fadeInUp');
    $('.P-testing').css({
       opacity:1,
    //    animationDelay:'2.5s' 
    });

    //functions 
    function navbar(){
        if($(window).scrollTop()>0){
            $('.navbar').addClass('sticky');
            // $('.logo').attr('src','https://img.icons8.com/material/24/ffffff/circled-s.png');
            // $('.nav-link').addClass('.navbrand');
          
        }else{
         $('.navbar').removeClass('sticky'); 
        //  $('.logo').attr('src','https://img.icons8.com/material/48/ffffff/circled-s.png');
        //  $('.nav-link').removeClass('.navbrand');
        }
    }

    
    

    
});