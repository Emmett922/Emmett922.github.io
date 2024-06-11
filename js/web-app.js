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
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // -- Toggle Services Description pop-up -- //
    // Opening pop-up
    $('.services .services-content .card').click(function(event) {
        $('.services .services-content .card').toggleClass("active");
        $('.services .services-content .serv-descr').toggleClass("active");
        $('.services .services-content .transparent-overlay').toggleClass("active");

        if (event.currentTarget.id == 'surveillance') {

        }
    });

    // Closing pop-up
    $('.services .services-content .serv-descr .close-btn').click(function() {
        $('.services .services-content .card').toggleClass("active");
        $('.services .services-content .serv-descr').toggleClass("active");
        $('.services .services-content .transparent-overlay').toggleClass("active");
    });
});