$(document).ready(function(){
    $('.first').owlCarousel({
        center: true,
        items:3,
        nav: true,
        autoplay: true,
        navText : ["",""],
        loop:true,
        margin:10,
        responsive:{
            100:{
                items:1
            }
        }
    });

    $('.second').owlCarousel({
        items:3,
        dots: false,
        nav: true,
        navText : ["",""],
        loop:true,
        margin:50,
        responsive:{
            0:{
                items:1
            },
            501:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
});

