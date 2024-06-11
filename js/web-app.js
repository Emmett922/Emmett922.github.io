// --- Page scrolling navbar changes --- //
$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        }else {
            $('.navbar').removeClass("sticky");
        }
    });

    // -- Toggle Menu/Navbar -- //
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // -- Toggle Services Description pop-up -- //
    // Opening pop-up
    $('.services .services-content .card').click(function($e) {
        $('.services .services-content .card .serv-descr').addClass("active");
        $('.services .services-content .card').addClass("active");

        $('.services .services-content .card .serv-descr .close').click(function() {
            $('.services .services-content .card .serv-descr').removeClass("active");
            $('.services .services-content .card').removeClass("active");
        });
    });
});