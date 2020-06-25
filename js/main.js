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
    });
    let allDots = document.getElementsByClassName("owl-dots");
    let dots = allDots[0].getElementsByTagName("button");
    let ellipses = document.getElementsByClassName("ellipse");
    setInterval(function() {

        if(dots[0].classList.contains('active'))
        {
            for(let i = 0; i < ellipses.length; i++)
            {
                ellipses[i].classList.remove("ellipse_" + (i + 1) + "_1");
                ellipses[i].classList.remove("ellipse_" + (i + 1) + "_2");
            }
        }
        else
        if(dots[1].classList.contains('active'))
        {
            for(let i = 0; i < ellipses.length; i++)
            {
                ellipses[i].classList.add("ellipse_" + (i + 1) + "_1");
                ellipses[i].classList.remove("ellipse_" + (i + 1) + "_2");
            }
        }
        else
        if(dots[2].classList.contains('active'))
        {
            for(let i = 0; i < ellipses.length; i++)
            {
                ellipses[i].classList.remove("ellipse_" + (i + 1) + "_1");
                ellipses[i].classList.add("ellipse_" + (i + 1) + "_2");
            }
        }
    }, 50);

});

