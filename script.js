ScrollReveal().reveal('.header-reveal', {
    delay: 300,
    duration: 500,
    distance: '50px',
    origin: 'top',
    easing: 'ease-in-out',
    reset: false,
    viewFactor: 0.2,
});

ScrollReveal().reveal('.nav-reveal', {
    delay: 400,
    duration: 500,
    distance: '50px',
    origin: 'top',
    easing: 'ease-in-out',
    reset: false,
    viewFactor: 0.2,
});

ScrollReveal().reveal('.search-reveal', {
    delay: 300,
    duration: 500,
    distance: '0px',
    opacity: 0,
    easing: 'ease-in-out',
    reset: false,
    viewFactor: 0.2,
});

ScrollReveal().reveal('.featured-articles', {
    delay: 300,
    duration: 500,
    distance: '50px',
    origin: 'bottom',
    easing: 'ease-in-out',
    reset: false,
    viewFactor: 0.2,
});

const featuredArticle = document.querySelectorAll('.featured-article');

featuredArticle.forEach((blog, index) => {
    ScrollReveal().reveal(blog, {
        delay: 300 * index,
        duration: 500,
        easing: 'ease-in-out',
        origin: 'bottom',
        distance: '50px',
        reset: false
    });
});

ScrollReveal().reveal('.lastest-article', {
    delay: 300,
    duration: 500,
    distance: '50px',
    origin: 'left',
    easing: 'ease-in-out',
    reset: false,
    viewFactor: 0.2,
});

ScrollReveal().reveal('.lastest-article-item', {
    delay: 500,
    duration: 500,
    distance: '50px',
    origin: 'left',
    easing: 'ease-in-out',
    reset: false,
    viewFactor: 0.2,
});

ScrollReveal().reveal('.all-articles', {
    delay: 300,
    duration: 500,
    distance: '50px',
    origin: 'left',
    easing: 'ease-in-out',
    reset: false,
    viewFactor: 0.2,
});

const allArticle = document.querySelectorAll('.all-article');

allArticle.forEach((blog, index) => {
    ScrollReveal().reveal(blog, {
        delay: 200 * index,
        duration: 500,
        easing: 'ease-in-out',
        origin: 'left',
        distance: '50px',
        reset: false
    });
});

ScrollReveal().reveal('.about-reveal', {
    delay: 300,
    duration: 500,
    distance: '50px',
    origin: 'right',
    easing: 'ease-in-out',
    reset: false,
    viewFactor: 0.2,
});

ScrollReveal().reveal('.profile-reveal', {
    delay: 400,
    duration: 500,
    distance: '50px',
    origin: 'right',
    easing: 'ease-in-out',
    reset: false,
    viewFactor: 0.2,
});

ScrollReveal().reveal('.categories-reveal', {
    delay: 300,
    duration: 500,
    distance: '50px',
    origin: 'right',
    easing: 'ease-in-out',
    reset: false,
    viewFactor: 0.2,
});

const categories = document.querySelectorAll('.category-reveal');

categories.forEach((category, index) => {
    ScrollReveal().reveal(category, {
        delay: 300 * index,
        duration: 500,
        easing: 'ease-in-out',
        origin: 'right',
        distance: '50px',
        reset: false
    });
});

ScrollReveal().reveal('.profile-article', {
    delay: 300,
    duration: 500,
    distance: '0px',
    opacity: 0,
    easing: 'ease-in-out',
    reset: true,
    viewFactor: 0.2,
});

ScrollReveal().reveal('.blog-article', {
    delay: 300,
    duration: 500,
    distance: '0px',
    opacity: 0,
    easing: 'ease-in-out',
    reset: true,
    viewFactor: 0.2,
});