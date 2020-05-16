
// //
// window.onscroll = function () {
//     myFunction()
// };
//
// function myFunction() {
//     var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//     var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     var scrolled = (winScroll / height) * 100;
//     document.getElementById("myBar").style.width = scrolled + "%";
// }
//
// $(window).scroll(function () {
//     $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
// });

// let i = 0;
// let txt = 'Lorem ipsum typing effect!'; /* The text */
// let speed = 50; /* The speed/duration of the effect in milliseconds */
//
// function typeWriter() {
//     if (i < txt.length) {
//         document.getElementById("demo").innerHTML += txt.charAt(i);
//         i++;
//         setTimeout(typeWriter, speed);
//     }
// }