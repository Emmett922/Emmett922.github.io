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
    $('.services .services-content .card').click(function() {
        var id = this.id;
        $('.services .services-content .card').toggleClass("active");
        $('.services .services-content .card .serv-descr').toggleClass("active");
        $('.services .services-content .card .transparent-overlay').toggleClass("active");

        // Changes Description icon based on the chosen service
        if ('.services .services-content .card .serv-descr #surveillance') {
            $('.services .services-content .card .serv-descr i').attr('class', 'fa-solid fa-video');
        }
        if ('.services .services-content .card .serv-descr #surveillance') {
            $('.services .services-content .card .serv-descr i').attr('class', 'fa-solid fa-video');
        }
        if ('.services .services-content .card .serv-descr #surveillance') {
            $('.services .services-content .card .serv-descr i').attr('class', 'fa-solid fa-video');
        }
        if ('.services .services-content .card .serv-descr #surveillance') {
            $('.services .services-content .card .serv-descr i').attr('class', 'fa-solid fa-video');
        }
        if ('.services .services-content .card .serv-descr #surveillance') {
            $('.services .services-content .card .serv-descr i').attr('class', 'fa-solid fa-video');
        }
    });

    // Closing pop-up
    $('.services .services-content .card .serv-descr.active .close-btn').click(function() {
        $('.services .services-content .card').toggleClass("active");
        $('.services .services-content .card .serv-descr').toggleClass("active");
        $('.services .services-content .card .transparent-overlay').toggleClass("active");
    });
});