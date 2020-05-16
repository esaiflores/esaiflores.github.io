$(document).ready(function() {

    // ...

    // toggle "navbar-no-bg" class
    $('.top-content .text').waypoint(function () {
        $('nav').toggleClass('navbar-no-bg');
    });

    // ...


    /*
        Navigation
    */
    $('a.scroll-link').on('click', function (e) {
        e.preventDefault();
        scroll_to($(this), $('nav').outerHeight());
    });
    // toggle "navbar-no-bg" class
    $('.top-content .text').waypoint(function () {
        $('nav').toggleClass('navbar-no-bg');
    });

    /*
        Background slideshow
    */
    $('.top-content').backstretch("assets/img/backgrounds/1.jpg");
    $('.call-to-action-container').backstretch("assets/img/backgrounds/1.jpg");
    $('.testimonials-container').backstretch("assets/img/backgrounds/1.jpg");

    $('#top-navbar-1').on('shown.bs.collapse', function () {
        $('.top-content').backstretch("resize");
    });
    $('#top-navbar-1').on('hidden.bs.collapse', function () {
        $('.top-content').backstretch("resize");
    });

    $('a[data-toggle="tab"]').on('shown.bs.tab', function () {
        $('.testimonials-container').backstretch("resize");
    });

    /*
        Wow
    */
    new WOW().init();


});