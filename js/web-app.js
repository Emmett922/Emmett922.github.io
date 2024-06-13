$(document).ready(function() {
    // --- Page scrolling navbar changes --- //
    // Main Navbar changes
    $(window).scroll(function() {
        if (this.scrollY > 100) {
            $('.navbar').addClass("sticky");
        }else {
            $('.navbar').removeClass("sticky");
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
    $('.menu-btn, .menu li a').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });



    // -- Cycle Background Images in Masthead -- //
    var images = ["images/soundbord.jpg", "images/mic&headset.jpg", "images/security_cam.jpg", "images/mic.jpg"],
        index = 0,
        count = -1,
        $masthead = $('#masthead');

    setInterval(function() {
        $masthead.animate({ left: -100 }, function() {
            if (count == 0) {
                $masthead.css('background-image', 'linear-gradient(rgba(0,0,0,0.75), rgba(6,29,80,0.65)), url('+images[++index]+')');
            } else {
                $masthead.css('background-image', 'linear-gradient(rgba(0,0,0,0.75), rgba(6,29,80,0.65)), url('+images[index++]+')');
                $masthead.animate({ left: 0}, function() {
                    if(index == images.length) index = 0, count = 0;
                });
            }
        });
        count++;
    }, 5000);



    // -- Typing Animation -- //
    var typed = new Typed(".type", {
        strings: ["Surveillance", "Home Theater", "Audio/Visual", "Streaming", "Live Music"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })



    // -- Toggle Services Description pop-up -- //
    // Opening pop-up
    $('.services .services-content .card').click(function(event) {
        $('.services .services-content .card').toggleClass("active");
        $('.services .services-content .serv-descr').toggleClass("active");
        $('.services .services-content .transparent-overlay').toggleClass("active");

        // Description Content changes based on chosen card
        if (event.currentTarget.id == 'surveillance') {
            $('.services .services-content .serv-descr .serv-descr-content i').attr('class', 'fa-solid fa-video');
            $('.services .services-content .serv-descr .serv-descr-content h2').html('Surveillance');
        }
        if (event.currentTarget.id == 'home-theater') {
            $('.services .services-content .serv-descr .serv-descr-content i').attr('class', 'fa-solid fa-clapperboard');
            $('.services .services-content .serv-descr .serv-descr-content h2').html('Home Theater');
        }
        if (event.currentTarget.id == 'audio-visual') {
            $('.services .services-content .serv-descr .serv-descr-content i').attr('class', 'fa-solid fa-headphones');
            $('.services .services-content .serv-descr .serv-descr-content h2').html('Audio/Visual');
        }
        if (event.currentTarget.id == 'streaming') {
            $('.services .services-content .serv-descr .serv-descr-content i').attr('class', 'fa-solid fa-display');
            $('.services .services-content .serv-descr .serv-descr-content h2').html('Streaming');
        }
        if (event.currentTarget.id == 'live-music') {
            $('.services .services-content .serv-descr .serv-descr-content i').attr('class', 'fa-solid fa-music');
            $('.services .services-content .serv-descr .serv-descr-content h2').html('Live Music');
        }
    });

    // Closing pop-up
    $('.services .services-content .serv-descr .close-btn, .services .services-content .serv-descr .serv-descr-content a').click(function() {
        $('.services .services-content .card').toggleClass("active");
        $('.services .services-content .serv-descr').toggleClass("active");
        $('.services .services-content .transparent-overlay').toggleClass("active");
    });



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