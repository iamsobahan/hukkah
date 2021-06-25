

// backntop and fixed menu start
$(window).scroll(function(){

    console.log($(window).scrollTop())
    if($(window).scrollTop() > 200){
        $(".add").addClass("fixed")
    }else{
        $(".add").removeClass("fixed")
    }


    if($(window).scrollTop() > 900){
        $(".backtotop").fadeIn()
    }else{
        $(".backtotop").fadeOut()
    }


})



// backntop and fixed menu end





// venobox js start------ 

$(document).ready(function () {
    $('.venobox').venobox();
});

// venobox js end-------

// counter up js start-------
$(document).ready(function () {
    $('.counter').counterUp({

    });
});

// counter js end-------

// counter down js start--------

// Set the date we're counting down to
var countDownDate = new Date("June 30, 2021 59:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("day").innerHTML = days
    document.getElementById("hour").innerHTML = hours
    document.getElementById("min").innerHTML = minutes
    document.getElementById("second").innerHTML = seconds

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED"
    }
}, 1000);

// counter down js end-------------


// banner slick slider start-------------

$('.banner-slider').slick({
    dots: false,
    infinite: false,
    arrows: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<i class="fas fa-chevron-left prev"></i>',
    nextArrow: '<i class="fas fa-chevron-right next"></i>',
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,

            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

// banner slick slider end------------

// team slick slider start-------------

$('.team-slider').slick({
    dots: true,
    infinite: false,
    autoplay: true,
    arrows: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,


            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,

            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,


            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

// team slick slider end------------

// gallery slick slider start----------------

$('.gallery-slider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,

    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,

    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,

            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

// gallery slick slider end-------------

// testimonial slick slider start-----------

$('.testimonial-slider').slick({
    dots: false,
    infinite: true,
    autoplay: false,
    arrows: true,
    prevArrow: '<i class="fas fa-chevron-left left"></i>',
    nextArrow: '<i class="fas fa-chevron-right right"></i>',
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true

            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

// testimonial slick slider end------------

// banner curb text start---------------

const circleType = new CircleType(document.getElementById('charlotte'));
circleType.radius(600);

const abc = new CircleType(document.getElementById('charlottetwo'));
abc.radius(600);

// banner curb text end---------------

