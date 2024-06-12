$(document).ready(function() {
    // --- Page scrolling navbar changes --- //
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        }else {
            $('.navbar').removeClass("sticky");
        }
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

    // Event Section Actions
    $('.events .events-content .left img').click(function() {
        window.open('https://www.eventbrite.com/e/music-moonlight-a-live-concert-under-the-stars-tickets-920150483867?utm_experiment=test_share_listing&aff=ebdsshios');
        return false;
    });
});