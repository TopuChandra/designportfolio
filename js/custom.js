$(function () {


    //preloader
    $(window).on('load', function () {
        $('.preloader').delay(500).fadeOut(500);

    });

    //animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 95
                }, 1500);
                return false;
            }
        }
    });

    //back to top
    $('.back_top').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });

    // 
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 200) {
            $('.navbar').addClass('bg');
        } else {
            $('.navbar').removeClass('bg');
        }

        if (scrolling > 200) {
            $('.back_top').fadeIn(500);
        } else {
            $('.back_top').fadeOut(500);
        }
    });


    //typed js
    $(".typed").typed({
        strings: ["Developers.", "Web Designers.", "People."],
        // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
        stringsElement: null,
        // typing speed
        typeSpeed: 30,
        // time before typing starts
        startDelay: 1200,
        // backspacing speed
        backSpeed: 20,
        // time before backspacing
        backDelay: 500,
        // loop
        loop: true,
        // false = infinite
        loopCount: 5,
        // show cursor
        showCursor: false,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function () {},
        // starting callback function before each string
        preStringTyped: function () {},
        //callback for every typed string
        onStringTyped: function () {},
        // callback for reset
        resetCallback: function () {}
    });


    //    // service slider
    //
    $('.service_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        centerPadding: false,
        autoplaySpeed: 1500,
        arrows: true,
        dots: false,
        prevArrow: '.left',
        nextArrow: '.right',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
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

  ]

    });
    //skill slider
    new WOW().init();


    // review slider

    $('.review_main').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        centerPadding: false,
        autoplaySpeed: 1500,
        arrows: true,
        dots: false,
        prevArrow: '.left',
        nextArrow: '.right',
        responsive: [

            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },

            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {

                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }

  ]
    });

});
