$(document).ready(function() {
    // --- Page scrolling navbar changes --- //
    // Main Navbar changes
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
            $('.navbar .menu .services-submenu').addClass("sticky");
        }else {
            $('.navbar').removeClass("sticky");
            $('.navbar .menu .services-submenu').removeClass("sticky");
        }

        if(this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        }else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Slide-Up on ^ button
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 }, 1200);
    });


    // -- Smooth Scrolling on Anchor Link Clicks -- //
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });



    // -- Toggle Menu/Navbar -- //
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.portfolio-nav .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $('.menu li a').click(function() {
        var id = $(this).attr('id');
        console.log(id);
        if (id != 'services-link') {
            $('.navbar .menu').toggleClass("active");
            $('.portfolio-nav .menu').toggleClass("active");
            $('.menu-btn i').toggleClass("active");
        }
    });


    // -- Toggle Submenu -- //
    $('#services-link a, .services-submenu .services-submenu-link').click(function() {
        $('.navbar .menu .services-submenu').toggleClass("active");
        $('.portfolio-nav .menu .services-submenu').toggleClass("active");
    });


    // -- Typing Animation -- //
    var typed = new Typed(".type", {
        strings: ["Surveillance", "Home Theater", "Audio/Visual", "Streaming", "Live Music"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })


    // -- Redirecting to Other Sites -- //
    // Event Section Actions
    $('.events .events-content .left img').click(function() {
        window.open('https://www.eventbrite.com/e/music-moonlight-a-live-concert-under-the-stars-tickets-920150483867?utm_experiment=test_share_listing&aff=ebdsshios');
        return false;
    });

    $('.events .events-content .right img').click(function() {
        window.open('https://www.eventbrite.com/e/music-moonlight-a-live-concert-under-the-stars-tickets-920150483867?utm_experiment=test_share_listing&aff=ebdsshios');
        return false;
    });
});