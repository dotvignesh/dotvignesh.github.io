var owl = $('.owl-carousel');
owl.owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});

ScrollReveal().reveal('.landing', { delay: 200 });
ScrollReveal().reveal('.about', { delay: 200 });
ScrollReveal().reveal('.edu', { delay: 200 });
ScrollReveal().reveal('.tech-stack', { delay: 200 });
ScrollReveal().reveal('.projects', { delay: 200 });
